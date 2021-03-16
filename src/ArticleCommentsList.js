import React from 'react';
import ArticleComments from './ArticleComments';

export default function ArticleCommentsList({ comments }) {
    if (comments === undefined) {
        return null;
    }
    const ArticleCommentsItem = comments.map((comment) => <section key={comment.id}><ArticleComments comment={comment} /></section>)
    return (
        <div>
            {ArticleCommentsItem}
        </div>
    )
}