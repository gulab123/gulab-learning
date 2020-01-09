import React, {Component} from 'react'
import User from "./user"
import GustApp from "./gust"

import {Container} from 'react-bootstrap'
export default class StatApp extends Component{
    constructor(props){
        super(props);
      this.state={
          isRegf:true
      }
    }

    clickIsLogin=()=>{
        this.setState({isRegf:true});
    }
   clickIsLogout=()=>{
    this.setState({isRegf:false});
   }
 
    render(){
     if(this.state.isRegf){
         return(
            <Container>
           <User clickData1={()=>(this. clickIsLogout())} />  
           </Container>
         )
     }
 
        return(
            <Container>
               <GustApp clickData2={()=>(this.clickIsLogin())}/>
            </Container>
        )
    }
}