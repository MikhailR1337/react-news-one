import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';
import { deleteArticle } from '../AC';
import PropTypes from 'prop-types';
import ArticleCommentList from './ArticleCommentList';

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

  state = {
    updateIndex: 0,
    areCommentsOpen: false
}

  render() {
    const { article, isOpen, toggleAccordeon } = this.props;
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={toggleAccordeon}>
          {isOpen ? 'close': 'open'}
        </button>
        <button onClick={this.handleDelete}>Delete me</button>
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
        <button onClick={() => this.setState({updateIndex: this.state.updateIndex + 1 })}>update</button>
        <ArticleCommentList article={article} key={this.state.updateIndex} />
      </section>
    )
  }

  handleDelete = () => {
    const { deleteArticle, article } = this.props;
    deleteArticle(article.id);
  }
}

export default connect(null, { deleteArticle })(Article);