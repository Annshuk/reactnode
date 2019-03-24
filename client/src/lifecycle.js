import React, { Component } from 'react';
import './App.css';
import Child from './child';

class LifeCycle extends Component {
 
  constructor(){
    super();
    this.state = {
      name: "Anshuk"
    }
    console.log("Constructor");
  }
  
  componentWillMount(){
    console.log("componentWillMount");
  }

  componentDidMount(){    
     console.log("componentDidMount");
  }
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps')
  }
  
  componentWillUpdate(){
    console.log('componentWillUpdate')
  }
  shouldComponentUpdate(){
    return true;
  }
  
  changeState(){
    this.setState({name: 'Avanya'})
  }

  render() {
    console.log("parent render");
    return (
      <div className="App">
      Name:  {this.state.name}
       <Child name={this.state.name} />
       <button onClick={this.changeState.bind(this)}>Change State</button>
      </div>
    );
  }
}

export default LifeCycle;
