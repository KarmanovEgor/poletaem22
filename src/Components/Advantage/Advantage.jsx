import { Adv } from "../Constanse/const";
import "./Advantage.css";

export default function Advantage({ isAdv, ref}) {
  return (
    <section ref={ref} className="advantage" id="about">
      <div
        className={`advantage__container ${
          isAdv ? "opacity__container-visible" : ""
        } page__size`}
      >
        {Adv.map((item, index) => (
          <div className="advantage__card" key={index}>
            <img
              src={item.img}
              alt={item.title}
              title={item.title}
              className="advantage__img"
            />
            <h2 className="advantage__title">{item.title}</h2>
            <p className="advantage__text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
