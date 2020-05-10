import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import { Button } from '@material-ui/core'
import "./Admin.css"

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
        console.log(`Delete ID is:`, id.id)
        /* Sweet Alert 2 Integration */
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#A130FF',
            cancelButtonColor: '#FFB522',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                axios.delete(`/feedback/${id.id}`)
                    .then(response => {
                        console.log('Here is your response:', response); /* DELETE from Server works! */
                        this.getFeedback(); /* Refreshes DOM with updated response.data */
                    }).catch(error => {
                        console.log(error)
                    })
            }
        })
    } // End axios DELETE

    handlePut = (id) => {
        console.log(`Put ID is:`, id.id)
        if(id.flagged== false){
        axios.put(`/feedback/${id.id}`)
            .then(response => {
                console.log('Here is your response:', response); /* DELETE from Server works! */
                this.getFeedback(); /* Refreshes DOM with updated response.data */
            }).catch(error => {
                console.log(error)
            })
        }
        else if (id.flagged == true) {
            axios.put(`/feedback/true/${id.id}`)
                .then(response => {
                    console.log('Here is your response:', response); /* DELETE from Server works! */
                    this.getFeedback(); /* Refreshes DOM with updated response.data */
                }).catch(error => {
                    console.log(error)
                })
        }
    }

    render() {
        // console.log('State is:',this.state)
        return (
            <>
            <h1>Administrative Page</h1>
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
                                    <td><Button onClick={() => { this.handlePut(feedback) }}>{String(feedback.flagged)}</Button></td>
                                    <td><Button onClick={() => { this.handleDelete(feedback) }}>🗑</Button></td>
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