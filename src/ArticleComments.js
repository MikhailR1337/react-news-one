import React, { Component } from 'react';

export default function ArticleComments({ comment }) {
    return (
        <div>
            <h4>{`Comment by: ${comment.user}`}</h4>
            <section>{comment.text}</section>
        </div>
    )
}