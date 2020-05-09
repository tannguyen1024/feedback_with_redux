import React, { Component } from 'react';

class Understanding extends Component {

    handleClick = () => {
        this.props.history.push('/Support');
    }

    render() {
        return (
            <>
                <h1>How well are you understanding the content?</h1>
                <label>Understanding?</label>
                <br />
                <input type="number" />
                <br />
                <button onClick={this.handleClick}>Next</button>
            </>
        )
    }

}

export default Understanding;