import s from './ImageGallery.module.css';

const ErrorView = ({ message }) => {   

    return (
      <p className={s.notQuery}>{message}</p>
    )  
};

export default ErrorView;