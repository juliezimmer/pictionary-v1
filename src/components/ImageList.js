import React from 'react';

const ImageList = (props ) => {
   // the arrow function inside ,map() is called with each image that is returned by the unsplash API.
   // This statement returns an array.
   // description, id, and urls, have been desctuctured out of the image object
   const images = props.images.map(({ description, id, urls}) => {
      return <img alt={description} key={id} src={urls.regular} />
   });

   return <div>{images}</div>;
};

export default ImageList;