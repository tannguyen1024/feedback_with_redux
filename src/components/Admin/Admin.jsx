import React, { Component } from 'react';
import axios from 'axios';

class Admin extends Component {
    state = {
        feedback: [],
    }

    componentDidMount() {
        // console.log(`Admin has mounted.`) /* No longer needed */
        this.getFeedback();
    }

    getFeedback = () => {
        axios.get('/feedback')
            .then(response => {
                console.log('Here is your response.data', response.data); /* GET from Server works! */
                this.setState({
                    feedback: response.data
                })
            }).catch(error => {
                console.log(error)
            })
    } // End axios GET

    handleDelete = (id) => {
        console.log(`Delete ID is:`, id)
        axios.delete(`/feedback/${id}`)
            .then(response => {
                console.log('Here is your response:', response); /* DELETE from Server works! */
                this.getFeedback(); /* Refreshes DOM with updated response.data */
            }).catch(error => {
                console.log(error)
            })
    } // End axios DELETE

    render() {
        // console.log('State is:',this.state)
        return (
            <>
            <h1>Admin</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Understanding</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Date</th>
                            <th>Flagged</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.feedback.map((feedback) => {
                            return (
                                <tr key={feedback.id}>
                                    <td>{feedback.feeling}</td>
                                    <td>{feedback.understanding}</td>
                                    <td>{feedback.support}</td>
                                    <td>{feedback.comments}</td>
                                    <td>{feedback.date}</td>
                                    <td>{String(feedback.flagged)}</td>
                                    <td><button onClick={() => {this.handleDelete(feedback.id)}}>Delete</button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </>
        )
    }
}

export default Admin;

/* ### ADMIN SECTION

- Display all of the existing feedback at the route `/admin`.
The most recently added feedback should appear at the top of the list.
Allow the user to delete existing feedback.
Prompt the user to confirm prior to deleting the feedback from the database. */