import React, {Component} from 'react';

class Support extends Component {

    componentDidMount = () => {
        // console.log(`(Support.jsx) this.props.dispatch is:`, this.props.dispatch)
    }

    handleChange = (event) => {
        console.log(`Support is set to:`, event.target.value)
        this.setState({ support: event.target.value })
    }

    handleClick = () => {
        this.props.dispatch({ type: 'Support', payload: this.state });
        this.props.history.push('/Comments');
    }

    render() {
        return (
            <>
                <h1>How well are you being supported?</h1>
                <label>Support?</label>
                <br />
                <input placeholder="#" min="0" max="5" type="number" onChange={this.handleChange} />
                <br />
                <button onClick={this.handleClick}>Next</button>
            </>
        )
    }
}

export default Support;