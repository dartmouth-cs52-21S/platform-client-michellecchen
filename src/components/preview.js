import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

const Preview = (props) => {
    return (
        <div className="post-preview" onClick={() => props.fetchPost(props.post.id)} role="button" aria-label="Preview post" tabIndex={0}>

            <img src={props.post.coverUrl} alt={`${props.post.coverUrl}`} />

            <div className="preview-title">
                {props.post.title}
            </div>

            <div className="preview-tags">
                {props.post.tags}
            </div>
        </div>
    );
};

export default connect(null, { fetchPost })(Preview);
