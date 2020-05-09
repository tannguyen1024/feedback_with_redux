import React, { Component } from 'react';

class Feelings extends Component {

    handleClick = () => {
        this.props.history.push('/Understanding');
    }

    render() {
        return (
            <>
                <h1>How are you feeling today?</h1>
                <form>
                <label>Feeling?</label>
                <br />
                <input type="number" />
                <br />
                <button onClick={this.handleClick}>Next</button>
                </form>
            </>
        )
    }

}

export default Feelings;