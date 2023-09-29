import { useEffect } from "react";
import './Popup.css';
import success from '../../images/icon-success.svg'

function Popup({ isOpen, onClose }) {

  useEffect(() => {
    if (!isOpen) return;
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, [isOpen, onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`popup ${isOpen ? "popup_opened" : ""}`}
      onClick={handleOverlay}
    >
      <div className="popup__container">
        <img
          className="popup__icon"
          src={success}
          alt="success"
        />
        <h2 className="popup__title">Thanks for subscribing!</h2>
        <p className="popup__text">A confirmation email has been sent to <span className="popup__email">ash@loremcompany.com</span>. Please open it and click the button inside to confirm your subscription.</p>
        <button type="submit" onClick={onClose} className="popup__button">Dismiss message</button>
      </div>
    </div>
  );
}

export default Popup;