import React from "react";
import maps from '../../img/map.png';
import './map.css'
import Messengers from "../Messengers/Messengers";

const Map2GIS = ({isMap, ref}) => {

  return (
    <section ref={ref} className="map" >
     <div className={`map__container ${isMap ? 'map__container-visible' : ''}`}>
        <h2 className="map__title page__size">Наши Контакты</h2>
        <Messengers />
        <p className="map__text">Кликни по карте, чтоб проложить маршрут</p>
      <a
        href="https://go.2gis.com/lNFSE"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block", width: "100%", height: "100%" }}
      >
      


        <img
          className="map__img"
          src={maps}
          alt="2GIS Map"
          title="карта местонахождения организации"
        />
      </a>
      </div>
    </section>
  );
};

export default Map2GIS;