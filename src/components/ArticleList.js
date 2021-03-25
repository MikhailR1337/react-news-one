import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import accordionDecorator from '../decorators/accordionDecorator';
import { connect } from 'react-redux';
import { filtratedArticlesSelector } from '../selectors';

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        toggleAccordeon: PropTypes.func.isRequired,
        openItemId: PropTypes.string
    }

    render() {
        const { articles, toggleAccordeon, openItemId } = this.props;
        const articleElement = articles.map((article) => (
            <li key={article.id}>
                <Article
                article={article}
                isOpen={article.id === openItemId}
                toggleAccordeon={toggleAccordeon(article.id)}
                />
            </li>
            ))
        return (
            <ul>
                {articleElement}
            </ul>
        )
    }
    
}

export default connect((state) => {
    return {
        articles: filtratedArticlesSelector(state),
    }
})(accordionDecorator(ArticleList));