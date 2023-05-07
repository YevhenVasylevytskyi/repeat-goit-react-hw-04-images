import { Component } from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import Loader from "components/Loader/Loader";
import ErrorView from "./ErrorView";
import NoPhotoView from "./NoPhotoView";
import StartView from "./StartView";
import Button from "components/Button/Button";
import ApiService from "../../serviсes/ApiService";

// import PropTypes from "prop-types";
import s from "./ImageGallery.module.css";

class ImageGallery extends Component{

  state = {
    cards: [],
    // loading: false,
    error: null,
    status: 'idle',
    page: 1,
  };  

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;

    if (prevQuery !== nextQuery) {
      this.setState({ /*loading: true, cards: null,*/ status: 'pending' })
      
      ApiService(nextQuery, 1)
        .then(result => {
        if (result.hits.length !== 0) {
          return this.setState({
            cards: result.hits,
            status: 'resolved',
            page: 1,
          });
        }

        return this.setState({ cards: result.hits, status: 'rejected' });
      })
        .catch(error => this.setState({ error, status: 'rejected' }))
        // .finally(this.setState({ loading: true }))
    }
  }

  loadMore = () => {
    const nextSearch = this.props.searchQuery;
    const { page } = this.state;
    this.setState({ status: 'pending' });

    ApiService(nextSearch, page + 1)
      .then(result => {
        return this.setState(prevState => {
          return {
            cards: [...prevState.cards, ...result.hits],
            status: 'resolved',
            page: prevState.page + 1,
          };
        });
      })
      .finally(() => {
        setTimeout(() => {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }, 100);
      });
    // console.log("this.state.page", this.state.page);
  };


  render() {
    const {
      cards,
      // loading,
      error,
      status
    } = this.state;

    const {searchQuery} = this.props;
    
    if (status === 'idle') { 
      return  <StartView />
    }

    if (status === 'pending') {
      return (
        <>
          <ul className={s.ImageGallery}>
            {cards.map(item => (
              <ImageGalleryItem item={item} key={item.id} />
            ))} 
          </ul>
          <Loader />
        </>
      );
    }

    if (status === 'rejected') {
      return <ErrorView message={ error.message } />
    }

    if (status === 'resolved') {
      
      if (cards.length === 0) {
        return <NoPhotoView searchQuery={ searchQuery } />
        }
            
      return (
        <>
          <ul className={s.ImageGallery} >
              
            {cards.map(item => (
              <ImageGalleryItem item={item} key={item.id} />
            ))} 
                      
          </ul >

          <Button loadMore={this.loadMore} />
        </>
      )             
      
    }


    // return (
    //   <>
    //     {error && <p className={s.notQuery}>{error.message}</p>}
    //     {loading && !data && !error && <Loader />}
    //     {!data && !loading && <p className={s.notQuery}>Введіть пошуковий запит</p>}
    //     {data &&
    //       <ul className={s.ImageGallery}>
            
    //         {data.hits.map(item => (
    //           <ImageGalleryItem item={item} key={item.id} />  
    //         ))} 
            
    //       </ul>
    //     }
    //   </>
    // )      
  }
};

ImageGallery.protoType = {
  
};

export default ImageGallery;