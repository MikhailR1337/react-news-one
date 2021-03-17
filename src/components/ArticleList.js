import React, { Component } from 'react';
import Article from './Article';

class ArticleList extends Component {
    state = {
        openArticleId: null,
    }

    render() {
        const { articles } = this.props;
        const { openArticleId } = this.state;
        const articleElement = articles.map((article) => (
            <li key={article.id}>
                <Article
                article={article}
                isOpen={article.id === openArticleId}
                toggleOpen={this.toggleOpenArticle(article.id)}
                />
            </li>
            ))
        return (
            <ul>
                {articleElement}
            </ul>
        )
    }

    toggleOpenArticle = (openArticleId) => () => {
        this.setState({ openArticleId });
    }
    
}

export default ArticleList;