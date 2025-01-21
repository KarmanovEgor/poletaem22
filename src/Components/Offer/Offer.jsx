import { useLocation } from "react-router-dom";
import "./Offer.css";

export default function Offer({
  plane,
  helicopter,
  photosession,
  party,
  mover,
  openPopup,
}) {
  const location = useLocation();

  const dataMap = {
    "/plane": plane,
    "/helicopter": helicopter,
    "/party": party,
    "/photo": photosession,
    "/moving": mover,
  };

  // Получаем данные в зависимости от текущего пути
  const data = dataMap[location.pathname] || {}; // Значение по умолчанию
  console.log(data);

  return (
    <section className="offer">
      <h2 className="offer__title page__size">{data.title}</h2>
      <div className="offer__container">
        <div className="offer__block-first page__size">
          {data.img ? (
            <img
              src={data.img}
              alt={data.title}
              title={data.title}
              className="offer__img"
            />
          ) : null}
          <div className="offer__block-text">
            <p className="offer__text page__size">{data.text}</p>
            {location.pathname !== "/plane" ? (
              <div className="offer__prices-other">
                {data.priceList &&
                Array.isArray(data.priceList) &&
                data.priceList.length > 0 ? (
                  data.priceList.map((priceItem, priceIndex) => (
                    <div key={priceIndex} className="offer__price-item_list">
                      <p className="offer__time">{priceItem.time}</p>
                      <p className="offer__price">{priceItem.price}</p>
                    </div>
                  ))
                ) : (
                  <div className="offer__price-item_list">
                    <p className="offer__time">{data.priceList?.time}</p>
                    <p className="offer__price">{data.priceList?.price}</p>
                  </div>
                )}
                <button
                  className="offer__button-click"
                  type="button"
                  name="calling"
                  onClick={openPopup}
                >
                  НАПИШИТЕ НАМ!
                </button>
              </div>
            ) : null}
          </div>
        </div>
        <div className="offer__block-second">
          {location.pathname === "/plane" &&
          data.detail &&
          data.detail.length > 0 ? (
            <div className="offer__details">
              {data.detail.map((item, index) => (
                <div
                  key={index}
                  className={`offer__detail-card ${
                    index % 2 === 0 ? "side" : ""
                  } page__size`}
                >
                  <img
                    src={item.planeImage}
                    alt={item.textPlane}
                    title={item.textPlane}
                    className="offers__detail-img"
                  />
                  <div className="offer__detail-block">
                    <h3>{item.textPlane}</h3> {/* Название самолета */}
                    <p>{item.description}</p> {/* Описание самолета */}
                    <div className="offer__prices">
                      {item.priceList.map((priceItem, priceIndex) => (
                        <div key={priceIndex} className="offer__price-item">
                          <div className="offer__price-item_list">
                            <p className="offer__time">{priceItem.time}</p>
                            <p className="offer__price">{priceItem.price}</p>
                          </div>
                          <p className="offer__place">
                            {priceItem.place || null}
                          </p>
                        </div>
                      ))}
                    </div>
                    <button
                      className="offer__button-click"
                      type="button"
                      name="calling"
                      onClick={openPopup}
                    >
                      НАПИШИТЕ НАМ!
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
