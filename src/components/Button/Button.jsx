// import PropTypes from "prop-types";
import s from "./Button.module.css";

function Button({ loadMore }) {
  return (
    <button type="submit" onClick={() => loadMore()} className={s.Button}>
      Load more
    </button>
  );
}

Button.protoType = {
  
};

export default Button;