import React from "react";
import maps from '../../img/map.png';

const Map2GIS = () => {
  console.log(Map); // Проверьте путь к изображению
  return (
    <div className="map" style={{ width: "100%", height: "500px", margin: "0", overflow: "hidden" }}>
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
        />
      </a>
    </div>
  );
};

export default Map2GIS;