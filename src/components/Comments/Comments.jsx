import React, {Component} from 'react';

class Comments extends Component {

    handleClick = () => {
        this.props.history.push('/Review');
    }

    render() {
        return (
            <>
                <h1>Any comments you want to leave?</h1>
                <label>Comments?</label>
                <br />
                <input type="text" />
                <br />
                <button onClick={this.handleClick}>Next</button>
            </>
        )
    }

}

export default Comments;