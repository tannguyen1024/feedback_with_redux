import React, { Component } from 'react';
// Moved AXIOS to index.js
import './App.css';
import { Button } from '@material-ui/core';
import 'typeface-roboto';
import { connect } from 'react-redux';
import { HashRouter, Route, Link } from 'react-router-dom';

/* Page Components Here */
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Comments from '../Comments/Comments'
import Review from '../Review/Review'
import Success from '../Success/Success'
import Admin from '../Admin/Admin'

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
          <Route path="/admin" component={Admin} />
          <p/>
          <div className="restart"><Link to="/"><Button className="fab" color="secondary" size="small" variant="outlined">↺ Restart</Button></Link></div>
        </HashRouter>
        
        <p></p>
      </div>
    ) // End return
  } // End render
} // End App

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(App);