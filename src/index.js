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
const firstReducer = (state = { feeling: '', understanding: '', support: '', review: '', comments: '' }, action) => {
    // console.log('(index.js) firstReducer loaded');
    if (action.type === 'Feeling') {
        console.log('Feeling set to:', action.payload)
        // console.log(`(index.js) state is:`, state)
        feeling = action.payload.feeling;
        console.log('here is', feeling)
        return { ...state, feeling: action.payload.feeling };
    }
    if (action.type === 'Understanding') {
        console.log('Understanding set to:', action.payload)
        // console.log(`(index.js) state is:`, state)
        understanding = action.payload.understanding;
        return { ...state, understanding: action.payload.understanding };
    }
    if (action.type === 'Support') {
        console.log('Support set to:', action.payload)
        // console.log(`(index.js) state is:`, state)
        support = action.payload.support;
        return { ...state, support: action.payload.support };
    }
    if (action.type === 'Comments') {
        console.log('Comments set to:', action.payload)
        // console.log(`(index.js) state is:`, state)
        comments = action.payload.comments;
        return { ...state, comments: action.payload.comments };
    }
    if (action.type === 'Submit') {
        // AXIOS POST here
        review = { feeling: feeling, understanding: understanding, support: support, comments: comments };
        console.log(`Let's post this to AXIOS now:`, review);
        axios.post('/', review)
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
