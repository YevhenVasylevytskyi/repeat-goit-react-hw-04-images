import s from './ImageGallery.module.css';

const NoPhotoView = ({ searchQuery }) => {   

    return (
      <p className={s.notQuery}>Фото {searchQuery} не знайдено</p>
    )  
};

export default NoPhotoView;