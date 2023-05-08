import PropTypes from "prop-types";
import s from './ImageGallery.module.css';

const NoPhotoView = ({ searchQuery }) => {   

    return (
      <p className={s.notQuery}>Фото {searchQuery} не знайдено</p>
    )  
};

NoPhotoView.protoType = {
  searchQuery: PropTypes.string,
};

export default NoPhotoView;