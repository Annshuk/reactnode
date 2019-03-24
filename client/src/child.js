import React, { Component } from 'react';
import SubChild from './subChild';
import './App.css';

class Child extends Component {
 
  constructor(){
    super();
    this.state = {
      sub: "Arun"
    }
    console.log("Child Constructor");
  }
  componentWillMount(){
    if(window.innerWidth < 500){
      this.setState({innerWidth: window.innerWidth});
    }
    console.log("Child componentWillMount");
  }
  componentDidMount(){    
    console.log("Child componentDidMount");
  }

  componentWillReceiveProps(){
    console.log("Child componentWillReceiveProps");
  }
  
 /* shouldComponentUpdate(){
    return false;
  }*/

  render() {
    console.log("Child render");
    return (
      <div className="App">
      <SubChild name ={this.props.name}  state={this.state.sub}></SubChild>
      </div>
    );
  }
}

export default Child;
