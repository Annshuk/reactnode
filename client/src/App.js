import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './stores/store';
import Layout from './components/layouts/Layout';

import Home from './components/layouts/Home';
import About from './components/layouts/About';
import Form from './components/layouts/signup';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
            <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/signup" component={Form} />
        </Layout>
        </Router>
        </Provider>
       );
  }
}

export default App;