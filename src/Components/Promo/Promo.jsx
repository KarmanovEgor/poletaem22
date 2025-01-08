
import "./Promo.css";


export default function Promo({isVisible}) {

  
    return (
      <section className="promo page__size">
        <div className={`promo__container ${isVisible ? 'promo__container-visible' : ''}`}>
          <div className="promo__block">
            <h1 className="promo__title">Полеты на частном самолете в Барнауле</h1>
            <button className="promo__btn" type="">
              Подробнее
            </button>
          </div>
        </div>
      </section>
    );
}
