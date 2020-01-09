import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import Cardss from './Cardcom'
export default class GustApp extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                Welcome Gust
                <Cardss />
                <Button onClick={this.props.clickData2} variant="primary">Login</Button>
            </div>
        )
    }
}