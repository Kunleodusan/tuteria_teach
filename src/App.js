import React, { Component } from 'react';
import './App.css';
import './font-awesome/css/font-awesome.min.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import SearchJumbo from './components/SearchJumbo';
import SelectedSubjects from './components/SelectedSubjects';
import SubjectCategory from './components/SubjectCategory';
import Footer from './components/Footer';
import {apiGet,apiPost,apiDelete} from './api';
export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedCategory:0,
            selectedSubjects:null,
            categories:[]
        };
        this.addSubject=this.addSubject.bind(this);
        this.changeSubject=this.changeSubject.bind(this);
        this.removeSubject=this.removeSubject.bind(this);
        this.changeCategory=this.changeCategory.bind(this);
        this.hasSubject=this.hasSubject.bind(this);
    }

    componentWillMount(){
        apiGet('/categories').then((success)=>{
            let categories={...this.state.categories};
            categories=success.data;

            this.setState({categories});
        }).catch(error=>{
            console.log(error);
        });
        apiGet('/selectedSubjects').then((success)=>{
            let selectedSubjects={...this.state.selectedSubjects};
            selectedSubjects=success.data;

            this.setState({selectedSubjects});
        }).catch(error=>{
            console.log(error);
        })
    }
    changeCategory(key){
        let state={...this.state};
        //console.log(key);
        state.selectedCategory=key;
        this.setState(state);

    }
    addSubject(subject){
        let selectedSubjects=[...this.state.selectedSubjects];
        /*selectedSubjects.forEach(function (item) {
           console.log(item);
        });*/
        if(!this.hasSubject(subject)){
            apiPost('selectedSubjects',{title:subject}).then(
                (success)=>{
                    selectedSubjects.push(success.data);
                    this.setState({selectedSubjects});
                }).catch((error)=>{
                console.log('could not add subject');
            });
        }
    }

    hasSubject(subject){
        let status=false;
        this.state.selectedSubjects.forEach(
            (obj) =>{
                if(obj.title===subject){
                    status= true;
                }
            }
        );
        return status;
    }
    /*@todo fix change subject*/
    changeSubject(subject){
        console.log(subject);
        let selectedSubjects=[...this.state.selectedSubjects];
        //not selected so add subject
        if(!this.hasSubject(subject)){
            console.log('add subject');
            apiPost('selectedSubjects',{title:subject}).then(
                (success)=>{
                    selectedSubjects.push(success.data);
                    this.setState({selectedSubjects});
                }).catch((error)=>{
                console.log('could not add subject');
            });
        }
        //remove subject
        else {
            console.log('remove subject');

            this.state.selectedSubjects.forEach(
                (obj) =>{
                    if(obj.title===subject){
                        this.removeSubject(selectedSubjects.indexOf(obj));
                        //selectedSubjects.splice(selectedSubjects.indexOf(obj),1);
                        //this.setState({selectedSubjects});
                    }
                }
            );
            /*Object.keys(selectedSubjects).map((key)=>{
                if(selectedSubjects[key]===subject){
                    selectedSubjects.splice(key,1);
                    this.setState({selectedSubjects});
                }
                return true;
            });*/
        }

    }
    removeSubject(subjectKey){
        console.log(subjectKey);
        let selectedSubjects=[...this.state.selectedSubjects];
        console.log(selectedSubjects[subjectKey]);
        apiDelete('selectedSubjects/'+this.state.selectedSubjects[subjectKey].id,{}).then(
            (success)=>{
                selectedSubjects.splice(subjectKey,1);//.pop(subjectKey);

                this.setState({selectedSubjects});
            }).catch(error=>{
            console.log('could not delete subject');
        });
            Object.keys(selectedSubjects).map((key)=>{

                if(selectedSubjects[key]===subjectKey){

                }
                    return true;
            });

    }

  render() {
    return (
      <div className="App">
          <Header/>
          <Navigation/>
          <SearchJumbo categories={this.state.categories} selectedSubjects={this.state.selectedSubjects} addSubject={this.addSubject} removeSubject={this.removeSubject}/>
          <SelectedSubjects selectedSubjects={this.state.selectedSubjects} addSubject={this.addSubject} removeSubject={this.removeSubject}/>
          <SubjectCategory selectedCategory={this.state.selectedCategory} changeCategory={this.changeCategory} hasSubject={this.hasSubject} categories={this.state.categories} selectedSubjects={this.state.selectedSubjects} addSubject={this.addSubject} changeSubject={this.changeSubject} removeSubject={this.removeSubject}/>
          <Footer/>
      </div>
    );
  }
}
/*
* <header className="App-header">
 <img src={logo} alt="logo" />
 <h1 className="App-title">Welcome to React</h1>
 </header>
 <p className="App-intro">
 To get started, edit <code>src/App.js</code> and save to reload.
 </p>
 */
