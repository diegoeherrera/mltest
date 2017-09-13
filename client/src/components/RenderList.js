import React from 'react'
import {Container} from 'react-bootstrap'
require('./RenderList.scss')


class RenderList extends React.Component{
    
        constructor(props){
            super(props)
    
            this.State = {
                selecteProduct:""
               
                }
        }
    
    
        render(){
                const listItems = this.props.productList
                console.log(listItems)
                return(              
                    <div>
                        <section className="container">
                            <ul className="list-group">

                                {
                                   
                                    
                                   
                                    
                                    listItems.map((item)=>{
                                        if(item.price){
                                        return <li className="listItem">
                                                        <img src={item.thumbnail}/>
                                                        <div className="itemTxt">
                                                        <h3>${item.price}</h3>
                                                        <h6 className="itemDescription">{item.title}</h6>
                                                        <span className="itemLocation">{item.address.city_name}</span>     
                                                        </div>
                                                                                                       

                                                </li>
                                        }
                                        }
                                    )
                                    
                                }
                    
                            </ul>
                        </section>
                    </div>
                )
            }
    }
    
    
    
    
    export default RenderList