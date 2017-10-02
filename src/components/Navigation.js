/**
 * Created by kunle on 9/29/17.
 */
import React from 'react';
import {Nav,NavItem} from 'react-bootstrap';
export default class Navigation extends React.Component{
    render(){
        return(
        <div>
            <Nav bsStyle="tabs" justified activeKey={1}>
                <NavItem className="myNav" eventKey={1} href="/home">Select Subject</NavItem>
                <NavItem className="myNav" eventKey={2}>Take Subject Test</NavItem>
                <NavItem className="myNav" eventKey={3}>Add Details & Set Your Fee</NavItem>
            </Nav>
        </div>
        )
    }
}
