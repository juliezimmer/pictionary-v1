import React from 'react';

class SearchBar extends React.Component{
   //initialize a state object
   state = {
      term: ''
   };

   onFormSubmit = event => {
      event.preventDefault(); // this prevents the browser from trying to automatically submit the form and refresh the page.
      
      this.props.onSubmit(this.state.term);
   }
   
   render() {
      return ( 
         <div className="ui segment">
            <form className="ui form"
               onSubmit={this.onFormSubmit} >
               <div className="field">
                  <label>Image Search</label>
                  <input type="text" 
                     value={this.state.term}
                     onChange={(e) => this.setState({term: e.target.value})} />
               </div>
           </form>
         </div>
      ) ;
   }
}

export default SearchBar;