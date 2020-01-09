import React, { Component } from 'react'
import{Container, Row, Col} from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
export default class AboutApp extends Component {
    constructor(props){
        super(props);
      this.state={
          show:false
      }
    }
    handleClick=()=>{
        this.setState({show:true})
    }
    handleClse=()=>{
        this.setState({show:false})
    }
    render() {
        return (
            <React.Fragment>
            <Container>
                <Breadcrumb className="mt-4">
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>
                <Row className="justify-content-md-center">
                    <Col md={4} lg={{ order: 12 }} > <h1>hello this is about1 </h1>  </Col>
                    <Col md={4}> <h1>hello this is about2 </h1>
                    <Button variant="warning" size="lg" onClick={()=>{this.handleClick()}}>Submit</Button>
                      </Col>
                </Row>
             
            </Container>
          <Modal show={this.state.show} onHide={()=>{this.handleClse()}}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{this.handleClse()}}>
            Close
          </Button>
          <Button variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
          </Modal>
            </React.Fragment>
        )
    }
}



