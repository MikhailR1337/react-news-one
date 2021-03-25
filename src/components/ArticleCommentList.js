import React from 'react';
import PropTypes from 'prop-types';
import ArticleComment from './ArticleComment';
import toggleOpen from '../decorators/toggleOpen';
import CommentForm from './CommentForm/CommentForm'

function ArticleCommentList({ article, isOpen, toggleOpen }) {
    const text = isOpen ? 'hide comment': 'show comment';
    return (
        <div>
            <button onClick={toggleOpen}>{text}</button>
            {getBody({ article, isOpen })}
        </div>
    )
}

ArticleCommentList.protoTypes = {
    comment: PropTypes.array.isRequired,
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired,
}

function getBody({ article: { comments = [], id }, isOpen }) {
    if (!isOpen) return null;
    if (!comments.length) return (
        <div>
            <p>No comments yet!</p>
            <CommentForm articleid={id} />
        </div>
    ) 

    return (
        <div>
            <ul>
                {comments.map((id) => <li key={id}><ArticleComment id={id} /></li>)}
            </ul>
            <CommentForm articleid={id} />
        </div>
    )
}

export default toggleOpen(ArticleCommentList);