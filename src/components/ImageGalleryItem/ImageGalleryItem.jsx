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

// class ImageGalleryItem extends Component{
    
//   state = {
//     isModalOpen: false
//   };  

//   openModal = () => this.setState({ isModalOpen: true })
//   closeModal = () => this.setState({ isModalOpen: false })

//   render() {
//     const { item } = this.props;
//     const { isModalOpen } = this.state;

//     return (
//       <>
//         <li
//           onClick={this.openModal}
//           className={s.ImageGalleryItem}
//         >
//           <img
//             className={s.ImageGalleryItemImage}
//             src={item.webformatURL}
//             alt={item.tags}
//           />
                  
//         </li>

//         {isModalOpen && <Modal onClose={this.closeModal} item={ item } />}
//       </>
//     )
//   }
// };

ImageGalleryItem.protoType = {
  item: PropTypes.object,
};

export default ImageGalleryItem;