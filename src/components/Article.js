import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import ArticleCommentList from './ArticleCommentList';
import { CSSTransition } from 'react-transition-group';

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
    }).isRequired,
    isOpen: PropTypes.bool,
    toggleAccordeon: PropTypes.func
  }

  render() {
    const { article, isOpen, toggleAccordeon } = this.props;
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={toggleAccordeon}>
          {isOpen ? 'close': 'open'}
        </button>
        {this.getBody()}
      </div>
    );
  }

  getBody() {
    const { article, isOpen } = this.props;
    if (!isOpen) return null;
    return (
      <section>
        {article.text}
        <ArticleCommentList comments={article.comments} />
      </section>
    )
  }
}

export default Article;