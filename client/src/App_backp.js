import React, { Component } from 'react';
import logo from './logo.svg';
import NavBarSearch from './components/NavbarSearch'
import RenderList from './components/RenderList'
require( './App.scss');


class App extends Component {
  
  constructor(props){
    super(props)

    this.state= {
      List:[]
    }

    this.makeSearch = this.makeSearch.bind(this)
  }



  makeSearch(query){
    console.log("from parent received: ",query)
    //Backp  fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`
    fetch(`http://localhost:3333/search/${query}`).then(response => response.json())
      .then(json => {
        console.log("funco proxy"+{...json});
        this.setState({
          List:json
        })
        return json
      })
      .catch(error=>console.log("ERROR: ",error))
    
  
    
  }

  updateState(data){

    this.setState({
      List:data
    })

  }
  

  
  render() {
    const List = this.state.List;
    return (
      <div className="App">
        <NavBarSearch searchVal={this.makeSearch}/>
        <RenderList productList={this.state.List}/>
        
      </div>
    );
  }
}

export default App;
