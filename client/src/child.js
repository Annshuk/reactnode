import React, { Component } from 'react';

import './App.css';

class Child extends Component {
 
  constructor(){
    super();
    this.state = {
      name: "Avanya"
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
  
  shouldComponentUpdate(){
    return false;
  }

  render() {
    console.log("Child render");
    return (
      <div className="App">
      Child Component:  {this.props.name}
      </div>
    );
  }
}

export default Child;
