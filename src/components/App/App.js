import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';

import { HashRouter, Route } from 'react-router-dom';

/* Page Components Here */
import Feelings from '../Feelings/Feelings'
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Comments from '../Comments/Comments'
import Review from '../Review/Review'
import Success from '../Success/Success'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <HashRouter>
          <Route exact path="/" component={Feelings} />
          <Route path="/Understanding" component={Understanding} />
          <Route path="/Support" component={Support} />
          <Route path="/Comments" component={Comments} />
          <Route path="/Review" component={Review} />
          <Route path="/Success" component={Success} />
        </HashRouter>
      </div>
    );
  }
}

export default App;
