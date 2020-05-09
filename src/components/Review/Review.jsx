import React, {Component} from 'react';

class Review extends Component {

    handleClick = () => {
        this.props.history.push('/Success');
    }

    render() {
        return (
            <>
                <h1>Review Your Feedback</h1>
                <h2>Results Here:</h2>
                <button onClick={this.handleClick}>Submit</button>
            </>
        )
    }

}

export default Review;