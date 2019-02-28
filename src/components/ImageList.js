import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props ) => {
   // the arrow function inside .map() is called with each image that is returned by the unsplash API.
   // description, id, and urls, have been desctuctured out of the image object
   const images = props.images.map((image) => {
      return <ImageCard key={image.id} image={image}/>
   });

   return <div className="image-list">{images}</div>;
};

export default ImageList;