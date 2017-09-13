import React, { Component } from 'react';
import logo from './logo.svg';
import NavBarSearch from './components/NavbarSearch'
import RenderList from './components/RenderList'
require( './App.scss');


class App extends Component {
  
  constructor(props){
    super(props)

    this.state= {
      items:[""]
    }

    this.makeSearch = this.makeSearch.bind(this)
  }



  makeSearch(query){

    console.log("from parent received: ",query)
    //Backp  fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`
    fetch(`http://localhost:3333/search/${query}`).then(response => response.json())
      .then(json => {
        //console.log("front end response type of: ",typeof(json))
        //json.map((item)=>console.log(item))
        //console.log("stringifeado: ",JSON.stringify(json));
        /*const items = json.map(function(item){
          if(item === "items"){

              console.log("encontrado vieja es: ",item)
              return item

          }
      })*/
        this.setState({
          items:json.items
        })
        return json
      })
      .catch(error=>console.log("ERROR: ",error))
  }
/*
  updateState(data){

    this.setState({
      items:data.items
    })

  }
 */ 

  
  render() {
    const items = this.state.items;
    return (
      <div className="App">
       
        <NavBarSearch searchVal={this.makeSearch}/>
        <RenderList productList={this.state.items}/>
          
      </div>
    );
  }
}

export default App;
