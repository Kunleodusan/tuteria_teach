/**
 * Created by kunle on 9/29/17.
 */
import React from 'react';
import {Col,Row,Clearfix} from 'react-bootstrap';
import logo from '../logo.svg';
import refresh from '../assets/refresh.svg';
export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }

    render(){
        return(
            <Row className="App-header">
                <Col md={2} className="logo">
                    <img src={logo} className="logo-image" alt="logo" />
                </Col>
                <Col md={2} className="text-center">
                Step 4: Create Subject
                </Col>
                <Col md={3} mdPush={5} className="save-status text-center">
                    <img src={refresh} alt="refresh" width="20px" /> Saved 30 seconds ago
                </Col>
                <Clearfix/>
            </Row>
        )
    }
}
