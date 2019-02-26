import React from 'react';
import axios from 'axios';  
import SearchBar from './SearchBar';

class App extends React.Component {
   // function is called with search term entered by the user in the search bar
   onSearchSubmit(term){
      axios.get('https://api.unsplash.com/search/photos', {
         params: { query: term },
         headers:  {
            Authorization: 'Client-ID a010665274225790939fc6b46a627c3170d1b391dcf1b092068d5e6fb2583d0c'
         }
      })   
   }

   render () {
      return (
         <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit} />
         </div>
      )
   }
}

export default App;