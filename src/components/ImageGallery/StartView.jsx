import s from './ImageGallery.module.css';

const StartView = ({ searchQuery }) => {   

    return (
      <p className={s.notQuery}>Введіть пошуковий запит</p>
    )  
};

export default StartView;