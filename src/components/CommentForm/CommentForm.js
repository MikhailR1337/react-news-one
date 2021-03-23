import React, { Component } from 'react';
import './style.css'

class CommentForm extends Component {
    state = {
        user: '',
        text: '',
    }

    render() {
        const { user, text } = this.state;
        return (
            <form onSumbit={this.handleSubmit}>
                user: <input className={this.getClass('user')}
                                type='text'
                                value={user}
                                onChange={this.handleChange('user')} />
                comment: <input className={this.getClass('text')}
                                    type='text'
                                    value={text}
                                    onChange={this.handleChange('text')} />
                <input type='submit' value='submit' />
            </form>
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            user: '',
            text: ''
        })
    }

    getClass = (type) => this.state[type].length && this.state[type].length < limits[type].min
        ? 'validator-on': ''

    handleChange = (type) => (e) => {
        const { value } = e.target;
        if (value.length > limits[type].max) return
        this.setState({ [type]: value });
    }
}

const limits = {
    user: {
        max: 15,
        min: 5,
    },
    text: {
        max: 50,
        min: 20,
    },
}

export default CommentForm;