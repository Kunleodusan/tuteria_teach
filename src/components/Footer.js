/**
 * Created by kunle on 9/29/17.
 */
import React from 'react';
import {Col,Row,Clearfix,Button,ProgressBar} from 'react-bootstrap';
export default class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }

    render(){
        return(
            <footer>
                <Row>
                    <Col md={2} smHidden={true} className="">
                    </Col>
                    <Col md={4} xs={12} className="">
                        <p className="color-grey-2">12% Complete</p>
                        <ProgressBar bsStyle="success" now={12} />
                    </Col>
                    <Col md={6} xs={12} className="text-center">
                        <Button bsStyle="primary">Am Done Now, Let's Proceed ></Button>
                    </Col>
                </Row>
            </footer>
        )
    }
}
