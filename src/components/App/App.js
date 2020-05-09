import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';

import { connect } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

/* Page Components Here */
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Comments from '../Comments/Comments'
import Review from '../Review/Review'
import Success from '../Success/Success'

class App extends Component {

  componentDidMount = () => {
    // console.log(`(App.js) Here's Redux`, this.props)
  }

  /* I utilized this function to check the current reduxState for testing. 
  handleClick = () => {
    console.log(`Current props are:`, this.props.reduxState)
  } */

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <HashRouter>
          <Route exact path="/" render={(props) => <Feeling {...props} dispatch={this.props.dispatch}/>} />
          <Route path="/Understanding" render={(props) => <Understanding {...props} dispatch={this.props.dispatch} />} />
          <Route path="/Support" render={(props) => <Support {...props} dispatch={this.props.dispatch} />}  />
          <Route path="/Comments" render={(props) => <Comments {...props} dispatch={this.props.dispatch} />}  />
          <Route path="/Review" render={(props) => <Review {...props} dispatch={this.props.dispatch} />}  />
          <Route path="/Success" component={Success} />
        </HashRouter>
        <p></p>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(App);