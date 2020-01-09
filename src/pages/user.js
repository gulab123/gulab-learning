import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
export default class User extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                Welcome User
                <Button onClick={this.props.clickData1} variant="secondary" size="lg">Logout</Button>
            </div>
        )
    }
}