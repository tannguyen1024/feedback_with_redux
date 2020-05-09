import React, { Component } from 'react';

class Comments extends Component {

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
                <input  type="text" onChange={this.handleChange} />
                <br />
                <button onClick={this.handleClick}>Next</button>
            </>
        )
    }
}

export default Comments;