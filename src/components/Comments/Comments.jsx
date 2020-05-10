import React, { Component } from 'react';
import { Button, OutlinedInput } from '@material-ui/core';

class Comments extends Component {
    state = { comments: '' }

    backClick = () => {
        this.props.history.push('/Support'); /* This allows user to return to previous page */
    }

    componentDidMount = () => {
        // console.log(`(Comments.jsx) this.props.dispatch is:`, this.props.dispatch)
    }

    handleChange = (event) => {
        console.log(`Comments is set to:`, event.target.value)
        this.setState({ comments: event.target.value })
    }

    handleClick = () => {
        this.props.dispatch({ type: 'Comments', payload: this.state });
        this.props.history.push('/Review');
    }

    render() {
        return (
            <>
                <h1>Any comments you want to leave?</h1>
                <label>Comments</label>
                <br />
                <OutlinedInput multiline={true} type="text" onChange={this.handleChange} />
                <p />
                <Button color="secondary" variant="contained" size="small" onClick={this.backClick}>Previous</Button>
                <Button color="primary" variant="contained" size="small" onClick={this.handleClick}>Next</Button>
            </>
        )
    }
}

export default Comments;