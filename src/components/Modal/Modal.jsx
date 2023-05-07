// import PropTypes from "prop-types";
import { Component } from "react";
import s from "./Modal.module.css";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

  componentDidMount() {
    window.addEventListener("keydown", this.hendleKeyDown)
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.hendleKeyDown)
  }

  hendleKeyDown = event => {
      if (event.code === "Escape") {
        this.props.onClose()
      }
  }
  
  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose()
    }
  }

  render() {
    const { item } = this.props

    return createPortal(
      <div className={s.Overlay} onClick={this.handleBackdropClick}>
          <div className={s.Modal}>
            <img src={item.largeImageURL} alt={item.tags} />        
          </div>
      </div>, modalRoot
    )
  }
}

Modal.protoType = {
  
};

export default Modal;