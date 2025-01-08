import "./Present.css";
import pres1 from "../../img/present1.jpg";
import pres2 from "../../img/present2.jpg";

export default function Present({ isPresent, ref }) {
  return (
    <section ref={ref} className="present">
      <div
        className={`present__container ${
          isPresent ? "opacity__container-visible" : ""
        } page__size`}
      >
        <div className="present__block-imgs">
          <img
            src={pres1}
            alt="Изображение с сайта полеты в Барнауле"
            title="Изображение с сайта полеты в Барнауле"
            className="prsent__img"
          />
          <img
            src={pres2}
            alt="Изображение с сайта полеты в Барнауле"
            title="Изображение с сайта полеты в Барнауле"
            className="prsent__img"
          />
        </div>
        <div className="present__block-text">
          <h2 className="present__title">Подарочные сертификаты</h2>
          <p className="present__text">
            Хочешь, чтобы твой подарок запомнился на всю жизнь? Хочешь, чтобы
            про него рассказывали всем друзьям и родным? Хочешь, чтобы он вызвал
            WOW ЭФФЕКТ? Подари полёт! 100% попадание в идеальный подарок!
            Прекрасно подходит для тех, у кого все есть. Доставим сертификат
            бесплатно!
          </p>
        </div>
      </div>
    </section>
  );
}
