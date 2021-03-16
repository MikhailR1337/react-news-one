import React, { Component } from 'react';
import ArticleCommentsList from './ArticleCommentsList';

export default class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isOpenComment: false,
    }
  }

  render() {
    const {article} = this.props;
    const { isOpen, isOpenComment } = this.state;
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={this.toggleOpen}>
          {isOpen ? 'close': 'open'}
        </button>
        {this.getBody()}
        {this.getButton()}
        {isOpen && isOpenComment && <ArticleCommentsList comments={article.comments} />}
      </div>
    );
  }

  toggleOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen })
  }

  toggleOpenComment = () => {
    const { isOpenComment } = this.state;
    this.setState({ isOpenComment: !isOpenComment })
  }

  getButton = () => {
    const { isOpen, isOpenComment } = this.state;
    return isOpen ? <button onClick={this.toggleOpenComment}>{isOpenComment ? 'close comments': 'open comment'}</button>: null
  }

  getBody = () => {
    const { isOpen } = this.state; 
    const {article} = this.props;
    return (
      isOpen ? <section>{article.text}</section> : null
    )
  }
}
