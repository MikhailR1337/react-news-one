import React, { Component } from 'react';
import ArticleList from './ArticleList';
import UserForm from './UserForm';
import Filters from './Filters/Filters'
import Counter from './Counter';

class App extends Component {
    render() {
        return(
            <div>
                <Counter />
                <Filters articles={[]}/>
                <UserForm />
                <ArticleList />
            </div>
        )
    }
}

export default App;