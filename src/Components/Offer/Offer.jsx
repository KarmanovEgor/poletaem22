import { useLocation } from "react-router-dom";
import "./Offer.css";

export default function Offer({ plane, helicopter, photosession, party, openPopup }) {
  const location = useLocation();

  const dataMap = {
    "/plane": plane,
    "/helicopter": helicopter,
    "/party": party,
    "/photo": photosession,
  };
  // Получаем данные в зависимости от текущего пути
  const data = dataMap[location.pathname] || {}; // Значение по умолчанию
  console.log(data);

  return (
    <section className="offer">
      <h2 className="offer__title page__size">{data.title}</h2>
      <div className="offer__container">
        <div className="offer__block-first">
          {data.img ? (
            <img
              src={data.img}
              alt={data.title}
              title={data.title}
              className="offer__img"
            />
          ) : null}
          <p className="offer__text page__size">{data.text}</p>
        </div>
        <div className="offer__block-second">
          {location.pathname === "/plane" &&
          data.detail &&
          data.detail.length > 0 ? (
            <div className="offer__details">
              {data.detail.map((item, index) => (
                <div key={index} className={`offer__detail-card ${index % 2 === 0 ? 'side' : ''} page__size`}>
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
                        <p className="offer__time">{priceItem.time}</p>
                        <p className="offer__price">{priceItem.price}</p>
                      </div>
                    ))}
                  </div>
                  <button className="offer__button-click" type="button" name="calling" onClick={openPopup}>НАПИШИТЕ НАМ!</button>
                  </div>
              
                </div>
              ))}
            </div>
          ) : (
            <div className="offer__prices">
              {data.priceList &&
                data.priceList.map((priceItem, priceIndex) => (
                  <div key={priceIndex} className="offer__price-item">
                    <p className="offer__time">{priceItem.time}</p>
                    <p className="offer__price">{priceItem.price}</p>

                  </div>
                ))}

            </div>
          )}
            <button className="offer__button-click" type="button" name="calling" onClick={openPopup}>НАПИШИТЕ НАМ!</button>
        </div>
      </div>
    </section>
  );
}
