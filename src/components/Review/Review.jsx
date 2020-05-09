import React, {Component} from 'react';
import { connect } from 'react-redux';

class Review extends Component {

    handleClick = () => {
        this.props.dispatch({ type: 'Submit' });
        this.props.history.push('/Success');
    }

    render() {
        return (
            <>
                <h1>Review Your Feedback</h1>
                <p>Feelings: <span>{this.props.reduxState.feeling}</span></p>
                <p>Understanding: <span>{this.props.reduxState.understanding}</span></p>
                <p>Support: <span>{this.props.reduxState.support}</span></p>
                <p>Comments: <span>{this.props.reduxState.comments}</span></p>
                <button onClick={this.handleClick}>Submit</button>
            </>
        )
    }

}

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(Review);