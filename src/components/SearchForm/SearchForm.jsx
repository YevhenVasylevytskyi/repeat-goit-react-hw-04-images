import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { toast } from 'react-toastify';

import PropTypes from "prop-types";
import s from "./SearchForm.module.css";

function SearchForm({onSubmit}) {

  const [searchQuery, setSearchQuery] = useState('')

  const handleChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase())
  }

  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === "") {
      return toast.error("Введіть пошуковий запит");
    }
    onSubmit(searchQuery);
    setSearchQuery('');
    }

  return (
    <form
      className={s.SearchForm}
      onSubmit={handleSubmit}
    >
      <button
        type="submit"
        className={s.SearchFormButton}
      >                    
        <FiSearch className={s.SearchSvg} />                    
      </button>

        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleChange}
        />
    </form>
  )
}

SearchForm.protoType = {
  onSubmit: PropTypes.func,
};

export default SearchForm;