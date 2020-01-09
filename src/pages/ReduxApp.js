import React, {Component} from 'react'
import {Container} from "react-bootstrap"
import {connect} from 'react-redux'
import { Myfun } from '../actions/Action'
function AppRedux(props){
    return(
        <Container>
<h1 className="text-primary">Hi {props.myname}</h1>
<button className="btn btn-primary" onClick={()=>{props.changeName()}}>change</button>
    <h3>{props.mywish[1]}</h3>
        </Container>
    )
}
const mapStateToProps=(state)=>{
return{
    myname:state.name,
    mywish:state.wish
}
}
const mapDispatchToProps=(dispatch)=>{
return{
    changeName:()=>{dispatch(Myfun())}
}
}
export default connect(mapStateToProps, mapDispatchToProps)(AppRedux) ;