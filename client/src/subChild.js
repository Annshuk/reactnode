import React, { Component } from 'react';

import './App.css';

class subChild extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      name: "MERA SUB CLASS"
    }
    console.log(props)
    console.log("sub Child Constructor");
  }
  componentWillMount(){
    if(window.innerWidth < 500){
      this.setState({innerWidth: window.innerWidth});
    }
    console.log("sub Child componentWillMount");
  }
  componentDidMount(){    
    console.log("sub Child componentDidMount");
  }

  componentWillReceiveProps(){
    console.log("sub Child componentWillReceiveProps");
  }

  render() {
    console.log("sub Child render");
    return (
      <div className="App">
        <p> Sub Child : {this.props.name}  and child state:  {this.props.state} sub child state:{this.state.name}</p>
      </div>
    );
  }
}

export default subChild;
