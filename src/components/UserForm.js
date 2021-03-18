import React, { Component } from 'react';

class UserForm extends Component {
    state = {
        username: '',
    }

    render() {
        const { username } = this.state;
        return (
            <div>
                Name: <input type='text' value={username} onChange={this.handleUsernameChange} />
            </div>
        )
    }

    handleUsernameChange = (e) => {
        if (e.target.value.length > 10) return;
        this.setState({ username: e.target.value })
    }
}

export default UserForm;