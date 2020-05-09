import React, {Component} from 'react';
import { Button, Radio } from '@material-ui/core';

class Feeling extends Component {
    state = { feeling: '' }

    componentDidMount = () => {
        // console.log(`(Feelings.jsx) this.props.dispatch is:`, this.props.dispatch)
    }

    handleChange = (event) => {
        console.log(`Feelings is set to:`, event.target.value)
        this.setState({ feeling: event.target.value })
    }

    handleClick = () => {
        if (this.state.feeling < 0 || this.state.feeling > 5 || this.state.feeling === '') {
            alert(`Please enter a value between 0-5`);
            return;
        }
        else {
            this.props.dispatch({ type: 'Feeling', payload: this.state });
            this.props.history.push('/Understanding');
        }
    }

    render() {
        /* console.log(this.state.feeling) */

        return (
            <>
                <h1>How are you feeling today?</h1>
                {/* <label>Feeling?</label> */}
                {/* <input placeholder="#" min="0" max="5" type="number" onChange={this.handleChange} /> BASE MODE */}
                Not well at all
                <Radio checked={this.state.feeling === '0'} onChange={this.handleChange} value="0" name="feeling" />
                <Radio checked={this.state.feeling === '1'} onChange={this.handleChange} value="1" name="feeling" />
                <Radio checked={this.state.feeling === '2'} onChange={this.handleChange} value="2" name="feeling" />
                <Radio checked={this.state.feeling === '3'} onChange={this.handleChange} value="3" name="feeling" />
                <Radio checked={this.state.feeling === '4'} onChange={this.handleChange} value="4" name="feeling" />
                <Radio checked={this.state.feeling === '5'} onChange={this.handleChange} value="5" name="feeling" />
                Extremely well
                <br />
                <Button color="primary" variant="contained" size="small" onClick={this.handleClick}>Next</Button>
            </>
        )
    }

}

export default Feeling;

{/* <input value="Pickup" type="radio" name="method" onChange={(event) => this.handleChangeFor(event, 'type')} /><label htmlFor="Pickup">Pickup</label><br />
    <input value="Delivery" type="radio" name="method" onChange={(event) => this.handleChangeFor(event, 'type')} /><label htmlFor="Delivery">Delivery</label><br /> */}