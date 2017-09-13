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

       this.handleSubmit = this.handleSubmit.bind(this);
       this.sendQuery = this.sendQuery.bind(this);


    }


   handleSubmit (e) {
        console.log("ingresaste",e.target.value)


        this.setState({
            querySearch:e.target.value
        })
    }

    sendQuery(){

        console.log("you entered: ", this.state.querySearch+" URL:"+`http://localhost:3030/${this.state.querySearch}`)
        this.props.searchVal(this.state.querySearch)
    }


    render(){
        return(
            <div>
                <header className="stHeader">
                   
                    <nav className="container">                            
                            <Col xs={1} xsOffset={0} className="logoEntender">
    
                                <img className="imgLogo" src={LogoImg}/>
                               
                            </Col>
                            <Col xs={11}  className="inputEntender" >
                                <FormGroup bsSize="sm" className="inputSearch">
                                            <InputGroup bsSize="sm" onChange={this.handleSubmit}>
                                                <FormControl type="text" bsSize="sm"  placeholder="Nunca dejes de buscar" />               
                                                <InputGroup.Button bsSize="sm">
                                                <Button onClick={this.sendQuery}><i className="glyphicon glyphicon-search"/></Button>
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