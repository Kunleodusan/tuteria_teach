/**
 * Created by kunle on 10/1/17.
 */
/**
 * Created by kunle on 9/29/17.
 */
import React from 'react';
import {Accordion,Panel,Checkbox} from 'react-bootstrap';
export default class MyAccordion extends React.Component{
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
        this.handleChange=this.handleChange.bind(this);
        this.entered=this.entered.bind(this);
    }
    entered(e){
        console.log(e);
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
    handleChange(e){
        this.props.changeSubject(e.target.value);
    }
    render(){
        //console.log(this.props.categories[this.props.selectedCategory]);
        if(typeof this.props.categories[this.props.selectedCategory]!=='undefined' && this.props.selectedSubjects!==null){
            return(
                <Accordion>

                    {Object.keys(this.props.categories[this.props.selectedCategory]['sub_category']).map(
                        (key)=>{
                            let sub_category=this.props.categories[this.props.selectedCategory]['sub_category'][key];
                            return(
                                <Panel header={sub_category.name} panelRole="hello" onSelect={this.entered} eventKey={key} key={key}>
                                    {
                                        Object.keys(sub_category.subjects).map(
                                            (subjectKey)=>{
                                                let name=sub_category.subjects[subjectKey];
                                                //console.log(name);
                                                return(
                                                    <Checkbox inputRef={ref=>{this[name]=ref}} onChange={this.handleChange} value={name}
                                                              checked={this.props.hasSubject(name)} key={name}>
                                                        {name}
                                                    </Checkbox>
                                                )
                                            }
                                        )
                                    }
                                </Panel>
                            )
                        })
                    }
                </Accordion>
            )
        }
        else{
            return(
                <h2 className="text-center">Loading</h2>
            )
        }
    }
}