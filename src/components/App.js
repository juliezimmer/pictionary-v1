import React from 'react';
import axios from 'axios';  
import SearchBar from './SearchBar';

class App extends React.Component {
   // initialize state
   state = {
      images: [] 
   };

   // function is called with search term entered the user entered in the search bar.
   onSearchSubmit = async (term) => {
      const response = await axios
         .get('https://api.unsplash.com/search/photos', {
            params: { query : term }, 
            headers:  { 
               Authorization: 'Client-ID a010665274225790939fc6b46a627c3170d1b391dcf1b092068d5e6fb2583d0c'
            }
         });
      // update state after images are returned by unsplash API
      this.setState({ images: response.data.results });   
    }   

   render () {
      return (
         <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            Found: {this.state.images.length} images
         </div>
      )
   }
}

export default App;