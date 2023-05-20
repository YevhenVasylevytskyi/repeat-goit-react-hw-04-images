import { useState } from "react";
import Modal from "components/Modal/Modal";

import PropTypes from "prop-types";
import s from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  
  return (
    <>
      <li
        onClick={openModal}
        className={s.ImageGalleryItem}
      >
        <img
          className={s.ImageGalleryItemImage}
          src={item.webformatURL}
          alt={item.tags}
        />
                  
      </li>

      {isModalOpen && <Modal onClose={closeModal} item={ item } />}
    </>
  )  
}

ImageGalleryItem.protoType = {
  item: PropTypes.object,
};

export default ImageGalleryItem;