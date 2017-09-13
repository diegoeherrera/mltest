import React from  'react'
import {Grid, Row, Col, input, Navbar,FormGroup,InputGroup,Button,FormControl} from 'react-bootstrap'
import LogoImg from './Logo_Ml.png'
require('./NavBarSearch.scss')
class NavBarSearch extends React.Component{
    constructor(props){
        super(props)
        this.State=[
            {
                queryResult:"",
                querySearch:"",
                isFetching:false
            }
        ]

       // this.handleSubmit = this.handleSubmit.bind(this);
       this.tereso = this.tereso.bind(this);
       // this.sendQuery = this.sendQuery.bind(this);


    }


    
    tereso () {
   
        console.log("DALE")
    }


    render(){
        return(
            <div>
                <header className="stHeader">
                   
                    <nav className="container">                            
                            <Col xs={1} xsOffset={1} className="logoEntender">
    
                                <img className="imgLogo" src={LogoImg}/>
                               
                            </Col>
                            <Col xs={9}  className="inputEntender" >
                                <FormGroup bsSize="sm" className="inputSearch">
                                            <InputGroup bsSize="sm" onChange={this.handleSubmit}>
                                                <FormControl type="text" bsSize="sm"  placeholder="Nunca dejes de buscar" />               
                                                <InputGroup.Button bsSize="sm">
                                                <Button onClick={this.tereso}><i className="glyphicon glyphicon-search"/></Button>
                                                </InputGroup.Button>
                                            </InputGroup>
                                </FormGroup>
                            </Col>  
                    </nav>
                  

                </header>
                
            </div>
            
        )
        
    }
}


export default NavBarSearch