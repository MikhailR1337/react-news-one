import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import ArticleCommentList from './ArticleCommentList';

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
    }).isRequired,
  }

  componentWillReceiveProps(nextProps) {
    // console.log('updaiting', this.props.isOpen, nextProps.isOpen)
  }

  componentWillMount() {
    // console.log('mounting')
  }

  render() {
    const { article, isOpen, toggleOpen } = this.props;
    return (
      <div ref={this.setDivRef}>
        <h3>{article.title}</h3>
        <button onClick={toggleOpen}>
          {isOpen ? 'close': 'open'}
        </button>
        {this.getBody()}
      </div>
    );
  }

  setDivRef = (ref) => {
    this.container = ref;
    // console.log(this.container);
  };

  componentDidMount() {
    // console.log('mounted')
  }

  getBody() {
    const { article, isOpen } = this.props;
    if (!isOpen) return null;
    return (
      <section>
        {article.text}
        <ArticleCommentList comments={article.comments} ref={this.setCommentRef} />
      </section>
    )
  }

  setCommentRef = (ref) => {
    console.log(findDOMNode(ref));
  }

}

export default Article;