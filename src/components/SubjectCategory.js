/**
 * Created by kunle on 9/29/17.
 */
import React from 'react';
import {Col,Row} from 'react-bootstrap';
import logo from '../assets/refresh.svg';
import MyAccordion from '../MyAccordion';
export default class SubjectCategory extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'',
            category:{
                width:8,
                offset:2,
                subjectClass:'hidden',
                selectedCategory:0
            },
            categories:{}
        };
        this.showSubjects=this.showSubjects.bind(this);
    }
    showSubjects(e){
        let section=e.target.getAttribute('datatype');
        //this.selectedCategory=section;
        this.props.changeCategory(section);

        let category={...this.state.category};
        category={
            width:6,
            offset:1,
            subjectClass:''
        };
        this.setState({category});
    }
    render(){
        let state=this.state;
        return(
            <div>
                <Row>
                    <Col md={6} mdOffset={3}>
                    <h4 className="text-center color-2">You can also select from the category below</h4>
                    </Col>
                </Row>
                <Row>
                    <Col className="margin-top-1 little" md={state.category.width} mdOffset={state.category.offset}>
                        {Object.keys(this.props.categories).map(
                            (key)=>{
                                return(
                                    <div className="card user-card margin-1" key={key} datatype={key} onClick={(event)=>{this.showSubjects(event)}}>
                                        <img className="user-card-img" src={logo} alt="category" datatype={key}  onClick={(event)=>{this.showSubjects(event)}}/>
                                        <div className="user-card-body">
                                            <h5 className="name"  datatype={key}  onClick={(event)=>{this.showSubjects(event)}}>{this.props.categories[key].name}</h5>
                                            <span className="text-muted"  datatype={key}  onClick={(event)=>{this.showSubjects(event)}}> </span>
                                        </div>
                                        <div className="pull-right side-drop">
                                            <i className="fa fa-chevron-right fa-2x padding-auto"  datatype={key}  onClick={(event)=>{this.showSubjects(event)}}> </i>
                                        </div>
                                    </div>
                                )
                            }
                        )}
                    </Col>

                    <Col md={4} className={"margin-top-1 "+this.state.category.subjectClass}>
                        <MyAccordion {...this.props}/>
                    </Col>
                </Row>
            </div>
        )
    }
}