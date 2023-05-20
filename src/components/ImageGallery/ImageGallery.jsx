import { useEffect, useState } from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import Loader from "components/Loader/Loader";
import ErrorView from "./ErrorView";
import NoPhotoView from "./NoPhotoView";
import StartView from "./StartView";
import Button from "components/Button/Button";
import ApiService from "../../serviсes/ApiService";

import PropTypes from "prop-types";
import s from "./ImageGallery.module.css";

const newApiService = new ApiService();

function ImageGallery({ searchQuery }) {
  const [cards, setCards] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {

    if (searchQuery === '') {
      return;
    }
    
    setStatus('pending')

    newApiService.value = searchQuery;
    newApiService.resetPage();
    newApiService.getImages()
      .then(result => {
        
        if (result.hits.length !== 0) {
          setCards(result.hits)
          setStatus('resolved')          
          return;
        }
        
        setCards(result.hits)
        setStatus('rejected')
        return result;
      })
      .catch(err => console.warn(err))      
  }, [searchQuery])

  const loadMore = () => {
    setStatus('pending')

    newApiService.getImages()
      .then(result => {
        setCards([...cards, ...result.hits])
        setStatus('resolved')        
        return result;
      })
      .catch(err => console.warn(err)) 
      .finally(() => {
        setTimeout(() => {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }, 100);
        return;
      });
  }
    
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
    return <ErrorView message={searchQuery} />
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

        <Button loadMore={loadMore} />
      </>
    )     
  } 
}

ImageGallery.protoType = {
  searchQuery: PropTypes.string,
};

export default ImageGallery;