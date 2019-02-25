import React from 'react';

class SearchBar extends React.Component{
   
   // runs when user enters text in the search bar.
   // runs with event autpomatically passed to it.
   onInputChange (event) {
      console.log(event.target.value);
   }
   
     render() {
      return ( 
         <div className="ui segment">
            <form className="ui form">
               <div className="field">
                  <label>Image Search</label>
                  <input type="text" 
                     onChange={this.onInputChange} />
               </div>
           </form>
         </div>
      );
   }
}

export default SearchBar;