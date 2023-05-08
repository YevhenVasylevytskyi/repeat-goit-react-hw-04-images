import PropTypes from "prop-types";
import s from './ImageGallery.module.css';

const ErrorView = ({ message }) => {   

    return (
      <p className={s.notQuery}>{message}</p>
    )  
};

ErrorView.protoType = {
  message: PropTypes.string,
}

export default ErrorView;