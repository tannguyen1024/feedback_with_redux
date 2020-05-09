import React, {Component} from 'react';

class Support extends Component {

    handleClick = () => {
        this.props.history.push('/Comments');
    }

    render() {
        return (
            <>
                <h1>How well are you being supported?</h1>
                <label>Support?</label>
                <br />
                <input type="number" />
                <br />
                <button onClick={this.handleClick}>Next</button>
            </>
        )
    }

}

export default Support;