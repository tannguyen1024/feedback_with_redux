import React, {Component} from 'react';
import { Button } from '@material-ui/core';

class Success extends Component {

    handleClick = () => {
        this.props.history.push('/');
    }

    render(){
        return(
            <>
            <h1>Thank You!</h1>
                <Button color="primary" variant="contained" size="large" onClick={this.handleClick}>Leave New Feedback</Button>
            </>
        )
    }

}

export default Success;