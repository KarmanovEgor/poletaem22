import "./Popup.css";
import { Link } from "react-router-dom";
// import { FaPhone, FaTelegram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Popup({ isOpen, onClose }) {
  const phoneNumber = "+79130278176";
  const email = "poletaem22@mail.ru";
  const handlePopupClose = () => {
    onClose();
  };
  return (
    <div className={`popup ${isOpen && "popup_opened"}`} onClick={onClose}>
      <div
        className="popup__container"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="popup__close"
          type="button"
          title="Закрыть окно"
          aria-label="Закрыть"
          onClick={handlePopupClose}
        />
        <div className="popup__list">
          <Link to={`tel:${phoneNumber}`} className="popup__links">
        {phoneNumber}
          </Link>
          <Link
            to={`https://t.me/${phoneNumber}?text=Здравствуйте,пишу с вашего сайта`}
            className="popup__links"
          >
           Telegram
          </Link>
          <Link
            to={`https://wa.me/${phoneNumber}?text=Здравствуйте,пишу с вашего сайта`}
            className="popup__links"
          >
             Whatsapp
          </Link>
          <Link to={`mailto:${email}`} className="popup__links">
            Email
          </Link>
        </div>
      </div>
    </div>
  );
}
