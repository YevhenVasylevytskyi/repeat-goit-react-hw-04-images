import { ToastContainer } from 'react-toastify';
import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import SearchForm from "./SearchForm/SearchForm";
import ImageGallery from "./ImageGallery/ImageGallery";

import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {

  state = {
    searchQuery: "",
  }

  handleFormSubmit = searchQuery => {
    this.setState({searchQuery})
  }

  render() {
    return (
      <>
        <Searchbar>
          <SearchForm
            onSubmit={this.handleFormSubmit}
          />
        </Searchbar>
        <ImageGallery searchQuery={this.state.searchQuery} />
        {/* <Button /> */}
        <ToastContainer
          autoClose={3000}
        />
      </>
    )
  }
};
