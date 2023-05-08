import s from "./Searchbar.module.css";

const Searchbar = ({ children }) => {

  return (
    <header className={s.Searchbar}>
      {children}
     </header>
  )
  
};

export default Searchbar;