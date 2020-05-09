import React, { Component } from 'react';
import { Button, Radio } from '@material-ui/core';

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
                {/* <label>Understanding?</label> */}
                {/* <input placeholder="#" min="0" max="5" type="number" onChange={this.handleChange} /> BASE MODE */}
                Not well at all
                <Radio checked={this.state.understanding === '0'} onChange={this.handleChange} value="0" name="understanding" />
                <Radio checked={this.state.understanding === '1'} onChange={this.handleChange} value="1" name="understanding" />
                <Radio checked={this.state.understanding === '2'} onChange={this.handleChange} value="2" name="understanding" />
                <Radio checked={this.state.understanding === '3'} onChange={this.handleChange} value="3" name="understanding" />
                <Radio checked={this.state.understanding === '4'} onChange={this.handleChange} value="4" name="understanding" />
                <Radio checked={this.state.understanding === '5'} onChange={this.handleChange} value="5" name="understanding" />
                Extremely well
                <br />
                <Button color="secondary" variant="contained" size="small" onClick={this.backClick}>Previous</Button>
                <Button color="primary" variant="contained" size="small" onClick={this.handleClick}>Next</Button>
            </>
        )
    }

}

export default Understanding;