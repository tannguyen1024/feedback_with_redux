import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

class Review extends Component {

        backClick = () => {
        this.props.history.push('/Comments'); /* This allows user to return to previous page */
    }

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
                <Button color="secondary" variant="contained" size="small" onClick={this.backClick}>Previous</Button>
                <Button color="primary" variant="contained" size="small" onClick={this.handleClick}>Submit</Button>
            </>
        )
    }

}

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(Review);