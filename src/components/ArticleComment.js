import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { commentSelectorFactory } from '../selectors';

function ArticleComment({ comment }) {
    return (
        <div>
            <p>{comment.text}<b>{`Comment by: ${comment.user}`}</b></p>
        </div>
    )
}

ArticleComment.propTypes = {
    id: PropTypes.string.isRequired,
    // from coonect
    comment: PropTypes.shape({
        id: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
}

const mapStateToProps = () => {
    const commentSelector = commentSelectorFactory();

    return (state, ownProps) => {
        return {
            comment: commentSelector(state, ownProps)
        }
    }
}

export default connect(mapStateToProps)(ArticleComment);
