import React from 'react';
import { connect } from 'react-redux';
import { Label } from 'semantic-ui-react';
import { fetchPost } from '../actions/index';

const Preview = (props) => {
    // Duplicate function from post
    const convertTagsToLabels = () => {
        if (props.post.tags !== undefined) {
            const labels = props.post.tags.trim().split(',');
            return (
                <div>
                    {labels.map((item) => {
                        return (
                            <Label key={item} as="a" tag>
                                {item}
                            </Label>
                        );
                    })}
                </div>
            );
        } else {
            return <Label as="a" tag>loading</Label>;
        }
    };

    return (
        <div className="post-preview" onClick={() => props.fetchPost(props.post.id)} role="button" aria-label="Preview post" tabIndex={0}>

            <img src={props.post.coverUrl} alt={`${props.post.coverUrl}`} />

            <div className="preview-title">
                {props.post.title}
            </div>

            <div className="preview-tags">
                {/* {props.post.tags} */}
                {convertTagsToLabels()}
            </div>
        </div>
    );
};

export default connect(null, { fetchPost })(Preview);
