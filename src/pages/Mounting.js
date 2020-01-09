import React, {Component} from 'react'
import {Container} from "react-bootstrap"
export default class MountingApp extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"Every one"
        }
    }
    componentDidMount(){

    }
    render(){
        return(
           <Container>
    <h1>Hello{this.state.name}</h1>
           </Container>
        )
    }
}