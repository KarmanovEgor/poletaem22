import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import { useCallback, useEffect, useRef, useState } from "react";
import Popup from "./Popup/Popup";
import Promo from "./Promo/Promo";
import Advantage from "./Advantage/Advantage";
import Present from "./Present/Present";
import Offers from "./Offfers/Offers";
import Offer from "./Offer/Offer";
import { useIntersectionObserver } from "./hooks/HookObserve";
import {
  helicopter,
  party,
  photosession,
  plane,
} from "./Constanse/constOffers";
import Map2GIS from "./Map2gis/Map2gis";
// import Promo from './Promo/Promo';
// import About from './About/About';
// import Pictures from './Pictures/Pictures';
// import PlateList from './PlateList/PlateList';
// import Contacts from './Contacts/Contacts';
// import Footer from './Footer/Footer';

function App() {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const isOpen = isOpenPopup;
  const location = useLocation();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isAdv, setIsAdv] = useState(false);
  const [isPresent, setIsPresent] = useState(false);
  const [isOffers, setIsOffers] = useState(false);
  const offersRef = useRef(null);
  const advantageRef = useRef(null);
  const presentRef = useRef(null);
  const handleClick = (path) => {
    navigate(path);
  };
  const closePopup = useCallback(() => {
    setIsOpenPopup(false);
  }, [setIsOpenPopup]);
  const openPopup = () => {
    setIsOpenPopup(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Устанавливаем видимость через 100 мс
    }, 100); // Задержка перед началом анимации

    return () => clearTimeout(timer); // Очистка таймера при размонтировании
  }, []);
  // Используем кастомный хук для каждого элемента
  useIntersectionObserver(advantageRef, 0.5, 900, isAdv, setIsAdv);
  useIntersectionObserver(presentRef, 0.1, 300, isPresent, setIsPresent);
  useIntersectionObserver(offersRef, 0.1, 100, isOffers, setIsOffers);


  // скролинг с хедэра на разных маршрутах
  useEffect(() => {
    const btnHeader = document.querySelectorAll(
      ".header__link, .header__link-main"
    );
    const handleClick = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute("href").substring(1);

      if (location.pathname === "/") {
        // Если маршрут /
        const section = document.getElementById(targetId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Если маршрут не /
        navigate("/"); // Перенаправляем на /
        setTimeout(() => {
          const section = document.getElementById(targetId);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }, 0); // Небольшая задержка для смены маршрута
      }
    };

    btnHeader.forEach((btn) => {
      btn.addEventListener("click", handleClick);
    });

    return () => {
      btnHeader.forEach((btn) => {
        btn.removeEventListener("click", handleClick);
      });
    };
  }, [location, navigate]);

  useEffect(() => {
    if (!isOpen) return;

    function handleESC(e) {
      if (e.key === "Escape") {
        closePopup();
      }
    }

    document.addEventListener("keydown", handleESC);

    return () => document.removeEventListener("keydown", handleESC);
  }, [isOpen, closePopup]);

  return (
    <div className="page__content">
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Header openPopup={openPopup} />

              <Promo isVisible={isVisible} />
              <main className="content">
                <div ref={advantageRef}>
                  <Advantage isAdv={isAdv} />
                </div>
               
                <div ref={presentRef}>
                  <Present isPresent={isPresent} />
                </div>
                <div ref={offersRef}>
                  <Offers
                    handleClick={handleClick}
                    openPopup={openPopup}
                    onClose={closePopup}
                    isVisible={isVisible}
                    isOffers={isOffers}
                  />
                </div>
                <Map2GIS  />
              </main>

              {/* <Footer /> */}
              <Popup isOpen={isOpenPopup} onClose={closePopup} />
            </>
          }
        ></Route>
        <Route
          path="/plane"
          element={
            <>
              <Header openPopup={openPopup} />
              <main className="content">
                <Offer plane={plane} openPopup={openPopup} />
              </main>
              {/* <Footer /> */}
              <Popup isOpen={isOpenPopup} onClose={closePopup} />
            </>
          }
        />
        <Route
          path="/helicopter"
          element={
            <>
              <Header openPopup={openPopup} />
              <main className="content">
                <Offer helicopter={helicopter} openPopup={openPopup} />
              </main>
              {/* <Footer /> */}
              <Popup isOpen={isOpenPopup} onClose={closePopup} />
            </>
          }
        />
        <Route
          path="/party"
          element={
            <>
              <Header openPopup={openPopup} />
              <main className="content">
                <Offer party={party} openPopup={openPopup} />
              </main>
              {/* <Footer /> */}
              <Popup isOpen={isOpenPopup} onClose={closePopup} />
            </>
          }
        />
        <Route
          path="/photo"
          element={
            <>
              <Header openPopup={openPopup} />
              <main className="content">
                <Offer photosession={photosession} openPopup={openPopup} />
              </main>
              {/* <Footer /> */}
              <Popup isOpen={isOpenPopup} onClose={closePopup} />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
