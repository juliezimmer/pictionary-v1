import React from 'react';

class ImageCard extends React.Component {
   constructor (props) {
      super (props);

      this.state = {
         span: 0
      };

      this.imageRef = React.createRef();
   }

   componentDidMount() {
      // when the image loads, this.setSpans is called as a callback function.
      this.imageRef.current.addEventListener('load', this.setSpans);
   }
   // called when image loads  
   setSpans = () => {
      const height = this.imageRef.current.clientHeight;
      
      const spans = Math.ceil(height / 10);
      // math.ceil caps the value

      // after spans are calculated, they should be set on the state object:
      this.setState({ spans });
   }


   render (){
      // object destructuring
      const { description, urls } = this.props.image;
      
      return (
         <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
            <img ref={this.imageRef} src={urls.regular} alt={description} />
         </div>
      );
   }
} 

export default ImageCard; 