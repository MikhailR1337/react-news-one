import React from 'react';
import PropTypes from 'prop-types';

function ArticleComment({ comment }) {
    return (
        <div>
            <p>{comment.text}<b>{`Comment by: ${comment.user}`}</b></p>
        </div>
    )
}

ArticleComment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
}

export default ArticleComment;
