import "./Offers.css";
import { waysImages } from "../Constanse/const";
import { useEffect, useRef, useState } from "react";

export default function Offers({ handleClick, openPopup, isVisible }) {
  const [visibleCards, setVisibleCards] = useState(Array(waysImages.length).fill(false));
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerCards = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(entry.target);
          if (entry.isIntersecting && !visibleCards[index]) {
            setVisibleCards((prev) => {
              if (prev[index]) return prev; // Не обновляем, если карточка уже видима
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
            observerCards.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } //  порог видимости
    );

    cardRefs.current.forEach((card) => {
      if (card) {
        observerCards.observe(card);
      }
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          observerCards.unobserve(card);
        }
      });
    };
  }, [visibleCards]);

  return (
    <section ref={sectionRef} className="offers">
      <div className="offers__container">
        <h2 className={`offers__title ${isVisible ? "offers__title-visible" : ""} page__size`}>
          Наши головокружительные предложения
        </h2>
        <div className="offers__block">
          {waysImages.map((ways, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) {
                  cardRefs.current[index] = el;
                }
              }}
              className={`offers__block-item ${
                index % 2 === 0 ? "from-left" : "from-right"
              } ${visibleCards[index] ? "visible" : ""} page__size`}
            >
              <img
                className="offers__img"
                title={ways.alt}
                alt={ways.alt}
                src={ways.img}
                onClick={() => handleClick(ways.way)}
              />
              <div className="offers__block-text">
                <h3 className="offers__block-title">{ways.text}</h3>
                <p className="offers__block-description">{ways.description}</p>
                <button className="offers__btn" type="submit" onClick={() => handleClick(ways.way)}>
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}