/**
 * Created by kunle on 9/29/17.
 */
import React from 'react';
import {Col,FormGroup,InputGroup,FormControl} from 'react-bootstrap';
export default class SearchJumbo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        };
        this.handleChange=this.handleChange.bind(this);
        this.selectItem=this.selectItem.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }
    handleChange(e) {
        this.setState({ value: e.target.value });
    }
    selectItem(e){
        console.log(e);
        alert(e.target.value);
    }
    submitForm(e){
        e.preventDefault();
        console.log(this.state.value);
        this.props.addSubject(this.state.value);
        this.setState({value:''});
    }

    render(){
        
        return(
                <div className="top-margin-5">
                    <h2 className="text-center bold">What subject do you want to teach?</h2>
                    <Col md={6} mdOffset={3}>
                        <form onSubmit={this.submitForm}>
                            <datalist id="courses">
                                {/*loop through categories*/}
                                {Object.keys(this.props.categories).map(
                                    (key)=>{
                                        return Object.keys(this.props.categories[key]['sub_category']).map(
                                            (subCatKey)=>{
                                                return Object.keys(this.props.categories[key]['sub_category'][subCatKey]['subjects']).map(
                                                    (subjectKey)=>{
                                                        let name=this.props.categories[key]['sub_category'][subCatKey]['subjects'][subjectKey];
                                                        //console.log(name);
                                                        return(
                                                            <option value={name} key={name}/>
                                                        );
                                                    })
                                        }
                                        )
                                    }
                                )}
                            </datalist>
                            <FormGroup>
                                <InputGroup>
                                    <FormControl bsSize="large" onChange={this.handleChange} list="courses" type="text" value={this.state.value} placeholder="Type here to search for what you want to teach" />
                                    <InputGroup.Addon><i className="fa fa-2x fa-search color-grey"> </i></InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>
                        </form>
                    </Col>
                </div>
        )
    }
}
