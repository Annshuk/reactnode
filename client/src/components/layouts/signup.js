import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            value:'',
            active: true
        }
        this.onChange = this.onChange.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
    }
    onChange(e){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
          });
    }
    
    render () {
      return (
        <form className="demoForm" onSubmit={this.handleSubmit}>
          <h2>Sign up</h2>
          <div className="form-group">
            <input type="checkbox" name="active" checked={this.state.active} onChange={this.onChange}/>
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control"
              name="email"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control"
              name="password"  disabled={!this.state.active}/>
          </div>
          <button type="submit" className="btn btn-primary">
             Sign up
          </button>
        </form>
      )
    }
   }

   export default Form;