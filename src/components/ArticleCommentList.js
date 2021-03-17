import React from 'react';
import ArticleComment from './ArticleComment';
import toggleOpen from '../decorators/toggleOpen';

function ArticleCommentList({ comments = [], isOpen, toggleOpen }) {
    const text = isOpen ? 'hide comment': 'show comment';
    return (
        <div>
            <button onClick={toggleOpen}>{text}</button>
            {getBody({ isOpen, comments })}
        </div>
    )
}

function getBody({ isOpen, comments }) {
    if (!isOpen) return null;
    if (!comments.length) return <p>No comments yet!</p>

    return (
        <ul>
            {comments.map((comment) => <li key={comment.id}><ArticleComment comment={comment} /></li>)}
        </ul>
    )
}

export default toggleOpen(ArticleCommentList);