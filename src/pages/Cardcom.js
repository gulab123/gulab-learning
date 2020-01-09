import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
export default class Cardss extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const arr=[10,20,30,40,50]
        const newArr=arr.map(num=>{
        return  <ListGroup.Item key={num}>{num*9}</ListGroup.Item>
        });
        return(
            
                 <React.Fragment>
                  <ListGroup>
 {newArr}
  
</ListGroup>
                 </React.Fragment>     
                          
                
        )
    }
}