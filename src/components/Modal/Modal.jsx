import { useEffect } from "react";
import { createPortal } from "react-dom";

import PropTypes from "prop-types";
import s from "./Modal.module.css";

const modalRoot = document.querySelector('#modal-root');

function Modal({ onClose, item }) {
  
  useEffect(() => {
    const hendleKeyDown = event => {
      if (event.code === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", hendleKeyDown)

    return () => {
      window.removeEventListener("keydown", hendleKeyDown)
    };
  }, [onClose])

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose()
    }
  }

  return createPortal(
    <div className={s.Overlay} onClick={handleBackdropClick}>
      <div className={s.Modal}>
        <img src={item.largeImageURL} alt={item.tags} />        
      </div>
    </div>, modalRoot
  )
}

Modal.protoType = {
  item: PropTypes.object,
  onClose: PropTypes.func,
};

export default Modal;