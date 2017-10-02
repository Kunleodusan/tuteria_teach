/**
 * Created by kunle on 9/29/17.
 */
import React from 'react';
import {Col,Label} from 'react-bootstrap';
export default class SelectedSubjects extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        };
        this.handleAlertDismiss=this.handleAlertDismiss.bind(this);
    }
    handleAlertDismiss(e){
        console.log(e.target.id);
        this.props.removeSubject(e.target.id);
        //console.log('remove item from state');
    }

    render(){
        if(this.props.selectedSubjects!==null){
            return(
                    <Col md={6} xs={12} mdOffset={3} className="selectedSubjects">
                        <h6 className="top-margin-2 text-center">SUBJECTS YOU WANT TO TEACH</h6>
                        {Object.keys(this.props.selectedSubjects).map(key=>{
                            return(
                                <Label key={key} className="selected-subject margin-1" bsStyle="info">
                                   {this.props.selectedSubjects[key].title} <span id={key} className="delete" onClick={this.handleAlertDismiss}>x</span>
                                </Label>
                            )
                        })}
                    </Col>
            )
        }

        else{
            return(<h2 className="text-center success">Loading your selection</h2>)
        }
    }
}
