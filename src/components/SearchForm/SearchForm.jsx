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

// class SearchForm extends Component{  

//   state = {
//     searchQuery: "",
//   };

//   handleChange = event => {
//     this.setState({ searchQuery: event.currentTarget.value.toLowerCase() })
//     // console.log(this.state.searchQuery)
//   }

//   handleSubmit = event => {
//     event.preventDefault();

//     if (this.state.searchQuery.trim() === "") {
//       return toast.error("Введіть пошуковий запит");
//     }
//     this.props.onSubmit(this.state.searchQuery);
//     this.setState({ searchQuery: "" });
//     }
    
//   render() {
      
    
//         return (
//           <form
//             className={s.SearchForm}
//             onSubmit={this.handleSubmit}
//           >
//               <button
//                 type="submit"
//                 className={s.SearchFormButton}
//               >                    
//                 <FiSearch className={s.SearchSvg} />                    
//               </button>

//               <input
//                 className={s.SearchFormInput}
//                 type="text"
//                 autoComplete="off"
//                 autoFocus
//                 placeholder="Search images and photos"
//               value={this.state.searchQuery}
//               onChange={this.handleChange}
//               />
//             </form>
//     )
//   }
// };

SearchForm.protoType = {
  onSubmit: PropTypes.func,
};

export default SearchForm;