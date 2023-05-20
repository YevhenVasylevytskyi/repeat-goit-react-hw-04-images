import { ToastContainer } from 'react-toastify';
import {useState } from "react";
import Searchbar from "./Searchbar/Searchbar";
import SearchForm from "./SearchForm/SearchForm";
import ImageGallery from "./ImageGallery/ImageGallery";

import 'react-toastify/dist/ReactToastify.css';

export function App() {

  const [searchQuery, setSearchQuery] = useState('');

  const handleFormSubmit = searchQuery => {
    setSearchQuery(searchQuery)
  }
  
  return (
      <>
        <Searchbar>
          <SearchForm
            onSubmit={handleFormSubmit}
          />
        </Searchbar>
        <ImageGallery searchQuery={searchQuery} />
        <ToastContainer
          autoClose={3000}
        />
      </>
    )
}