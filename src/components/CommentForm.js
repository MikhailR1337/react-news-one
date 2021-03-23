import React, { Component } from 'react';
import '../styles/style.css'

class CommentForm extends Component {
    state = {
        userValid: true,
        commentValid: true,
        user: '',
        text: '',
    }

    render() {
        const { user, text, userValid, commentValid } = this.state;
        return (
            <div>
                <p>Add Comment</p>
                user: <input className={userValid ? 'validator-off': 'validator-on'}
                type='text'
                value={user}
                onChange={this.handleUserChange} />
                text: <textarea className={commentValid ? 'comment-area-off': 'comment-area-on'}
                type='text'
                value={text}
                onChange={this.handleTextChange} />
            </div>
        )
    }

    handleUserChange = (e) => {
        if (e.target.value.length < 5 || e.target.value.length > 15) {
            this.setState({ userValid: false });
        } else {
            this.setState({ userValid: true });
        }
        this.setState({ user: e.target.value });
    }

    handleTextChange = (e) => {
        if (e.target.value.length < 20 || e.target.value.length > 50) {
            this.setState({ commentValid: false });
        } else {
            this.setState({ commentValid: true });
        }
        this.setState({ text: e.target.value });
    }
}

export default CommentForm;