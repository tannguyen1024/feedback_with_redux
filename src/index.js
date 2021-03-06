import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

/* Insert Redux */
import { createStore } from 'redux';
import { Provider } from 'react-redux';

/* Globals */
let feeling;
let understanding;
let support;
let comments;
let review = { feeling: feeling, understanding: understanding, support: support, comments: comments };

/* Create firstReducer Function */
const firstReducer = (state = { feeling: '', understanding: '', support: '', comments: '' }, action) => {
    // console.log('(index.js) firstReducer loaded'); /* No longer needed */
    if (action.type === 'Feeling') {
        console.log('Feeling set to:', action.payload)
        // console.log(`(index.js) state is:`, state) /* No longer needed */
        feeling = action.payload.feeling;
        // console.log('here is', feeling)
        return { feeling: feeling };
    }
    if (action.type === 'Understanding') {
        console.log('Understanding set to:', action.payload)
        // console.log(`(index.js) state is:`, state) /* No longer needed */
        understanding = action.payload.understanding;
        return { ...state, understanding: understanding };
    }
    if (action.type === 'Support') {
        console.log('Support set to:', action.payload)
        // console.log(`(index.js) state is:`, state) /* No longer needed */
        support = action.payload.support;
        return { ...state, support: support };
    }
    if (action.type === 'Comments') {
        console.log('Comments set to:', action.payload)
        // console.log(`(index.js) state is:`, state) /* No longer needed */
        comments = action.payload.comments;
        return { ...state, comments: comments };
    }
    if (action.type === 'Submit') {
        // AXIOS POST here
        review = { feeling: feeling, understanding: understanding, support: support, comments: comments };
        console.log(`Let's post this to AXIOS now:`, review);
        axios.post('/feedback', review)
            .then(response => {
                console.log(`Success!`)
            }).catch(error => {
                console.log(`Error with adding Review`, error);
            }) // End AXIOS POST
    }
    // console.log(`(index.js) state is:`,state) /* No longer needed */
    return state;
}

/* Our Store */
const storeInstance = createStore(firstReducer);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
