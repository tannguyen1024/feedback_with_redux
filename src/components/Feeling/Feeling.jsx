import React, { Component } from 'react';

class Feeling extends Component {

    componentDidMount = () => {
        // console.log(`(Feelings.jsx) this.props.dispatch is:`, this.props.dispatch)
    }

    handleChange = (event) => {
        console.log(`Feelings is set to:`,event.target.value)
        this.setState({feeling: event.target.value})
    }

    handleClick = () => {
        this.props.dispatch({ type: 'Feeling', payload: this.state });
        this.props.history.push('/Understanding');
    }

    render() {
        return (
            <>
                <h1>How are you feeling today?</h1>
                <label>Feeling?</label>
                <br />
                <input placeholder="#" min="0" max="5" type="number" onChange={this.handleChange} />
                <br />
                <button onClick={this.handleClick}>Next</button>
            </>
        )
    }

}

export default Feeling;