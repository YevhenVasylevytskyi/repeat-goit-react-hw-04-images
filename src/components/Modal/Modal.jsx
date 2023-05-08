import { Component } from "react";
import { createPortal } from "react-dom";

import PropTypes from "prop-types";
import s from "./Modal.module.css";

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
  item: PropTypes.object,
  onClose: PropTypes.func,
};

export default Modal;