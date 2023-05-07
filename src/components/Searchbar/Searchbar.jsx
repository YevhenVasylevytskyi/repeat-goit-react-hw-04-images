// import PropTypes from "prop-types";
import s from "./Searchbar.module.css";

const Searchbar = ({ children }) => {

  return (
    <header className={s.Searchbar}>
      {children}
     </header>
  )
  
};

Searchbar.protoType = {
  
};

export default Searchbar;