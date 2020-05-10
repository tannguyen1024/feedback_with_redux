import React, { Component } from 'react';
import axios from 'axios';

class Admin extends Component {
    state = '';

    componentDidMount(){
        console.log(`Admin has mounted.`)
        this.getFeedback();
    }

    getFeedback = () => {
        axios.get('/get')
            .then(response => {
                console.log('Here is your response.data', response.data); // Server GET is working here.
                this.setState({
                    feedback: response.data
                })
            }).catch(error => {
                console.log(error)
            })
    }

    render() {
        console.log(this.state)
        return (
            <h1>Admin</h1>
        )
    }

}

export default Admin;

/* ### ADMIN SECTION

- Display all of the existing feedback at the route `/admin`.
The most recently added feedback should appear at the top of the list.
Allow the user to delete existing feedback.
Prompt the user to confirm prior to deleting the feedback from the database. */