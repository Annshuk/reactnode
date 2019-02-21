import React, { Component } from 'react';
import News from '../containers/News';

class Home extends Component {
    render(){
        return  (
            <div>
                <h2>Welcome to Live News</h2>
               <News />
            </div>
        )
    }
}

export default Home;
