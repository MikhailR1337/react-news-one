import React, { Component } from 'react';
import ArticleList from './ArticleList';
import UserForm from './UserForm';
import Select from 'react-select';

class App extends Component {
    render() {
        const { articles } = this.props;
        const options = articles.map((article) => ({
            label: article.title,
            value: article.id,
        }))
        return(
            <div>
                <UserForm />
                <Select options={options} isMulti />
                <ArticleList articles={articles} />
            </div>
        )
    }
}

export default App;