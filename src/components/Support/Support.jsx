import React, {Component} from 'react';
import { Button, Radio } from '@material-ui/core';

class Support extends Component {
    state = { support: '' }

    backClick = () => {
        this.props.history.push('/Understanding'); /* This allows user to return to previous page */
    }

    componentDidMount = () => {
        // console.log(`(Support.jsx) this.props.dispatch is:`, this.props.dispatch)
    }

    handleChange = (event) => {
        console.log(`Support is set to:`, event.target.value)
        this.setState({ support: event.target.value })
    }

    handleClick = () => {
        if (this.state.support < 0 || this.state.support > 5 || this.state.support === '') {
            alert(`Please enter a value between 0-5`);
            return;
        }
        else {
        this.props.dispatch({ type: 'Support', payload: this.state });
        this.props.history.push('/Comments');
        }
    }

    render() {
        return (
            <>
                <h1>How well are you being supported?</h1>
                {/* <label>Support?</label> */}
                {/* <input placeholder="#" min="0" max="5" type="number" onChange={this.handleChange} /> BASE MODE */}
                Not well at all
                <Radio checked={this.state.support === '0'} onChange={this.handleChange} value="0" name="support" />
                <Radio checked={this.state.support === '1'} onChange={this.handleChange} value="1" name="support" />
                <Radio checked={this.state.support === '2'} onChange={this.handleChange} value="2" name="support" />
                <Radio checked={this.state.support === '3'} onChange={this.handleChange} value="3" name="support" />
                <Radio checked={this.state.support === '4'} onChange={this.handleChange} value="4" name="support" />
                <Radio checked={this.state.support === '5'} onChange={this.handleChange} value="5" name="support" />
                Extremely well
                <br />
                <Button color="secondary" variant="contained" size="small" onClick={this.backClick}>Previous</Button>
                <Button color="primary" variant="contained" size="small" onClick={this.handleClick}>Next</Button>
            </>
        )
    }
}

export default Support;