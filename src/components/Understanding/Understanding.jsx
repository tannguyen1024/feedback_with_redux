import React, { Component } from 'react';

class Understanding extends Component {
    state = { understanding: '' }

    backClick = () => {
        this.props.history.push('/'); /* This allows user to return to previous page */
    }

    componentDidMount = () => {
        // console.log(`(Understanding.jsx) this.props.dispatch is:`, this.props.dispatch)
    }

    handleChange = (event) => {
        console.log(`Understanding is set to:`, event.target.value)
        this.setState({ understanding: event.target.value })
    }

    handleClick = () => {
        if (this.state.understanding < 0 || this.state.understanding > 5 || this.state.understanding === '') {
            alert(`Please enter a value between 0-5`);
            return;
        }
        else {
            this.props.dispatch({ type: 'Understanding', payload: this.state });
            this.props.history.push('/Support');
        }
    }

    render() {
        return (
            <>
                <h1>How well are you understanding the content?</h1>
                <label>Understanding?</label>
                <br />
                <input placeholder="#" min="0" max="5" type="number" onChange={this.handleChange} />
                <br />
                <button onClick={this.backClick}>Previous</button>
                <button onClick={this.handleClick}>Next</button>
            </>
        )
    }

}

export default Understanding;