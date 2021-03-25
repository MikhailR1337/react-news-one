import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../AC';
import './style.css'

class CommentForm extends Component {
    static propTypes = {
        articleId: PropTypes.string.isRequired,
        addComment: PropTypes.func.isRequired
    };

    state = {
        user: '',
        text: ''
    }

    render() {
        const { user, text } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                user: <input className={this.getClass('user')}
                                value={user}
                                onChange={this.handleChange('user')} />
                comment: <input className={this.getClass('text')}
                                    value={text}
                                    onChange={this.handleChange('text')} />
                <input type='submit' value='submit' />
            </form>
        )
    }

    handleSubmit = ev => {
        ev.preventDefault()
        this.props.addComment(this.state)
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

export default connect(null, (dispatch, ownProps) => ({
    addComment: (comment) => dispatch(addComment(comment, ownProps.articleId))
}))(CommentForm)