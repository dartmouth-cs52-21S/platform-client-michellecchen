import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Label } from 'semantic-ui-react';

import { fetchPost, updatePost, deletePost } from '../actions';

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            tags: '',
            coverUrl: '',
            content: '',
            editing: false,
        };
    }

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.postID);
    }

    pushChanges = () => {
        this.setState({ editing: false });
            const updatedPost = {
                title: this.state.title,
                tags: this.state.tags,
                coverUrl: this.state.coverUrl,
                content: this.state.content,
                id: this.props.thisPost.id,
            };

        this.props.updatePost(updatedPost, () => this.setState({ editing: false }));
    }

    // MANAGE TITLE

    displayTitle = () => {
        if (!this.state.editing) {
            return (
                <div className="post-title">
                    {this.props.thisPost.title}
                </div>
            );
        } else {
            return (
                <input
                    className="input-title"
                    onChange={this.editTitle}
                    value={this.state.title}
                />
            );
        }
    }

    editTitle = (e) => {
        this.setState({
            title: e.target.value,
        });
    }

    // MANAGE CONTENT

    displayContent = () => {
        if (!this.state.editing) {
            return (
                <div className="post-content">
                    {this.props.thisPost.content}
                </div>
            );
        } else {
            return (
                <textarea
                    className="input-content"
                    onChange={this.editContent}
                    value={this.state.content}
                />
            );
        }
    }

    editContent = (e) => {
        this.setState({
            content: e.target.value,
        });
    }

    // MANAGE COVER

    displayCover = () => {
        if (!this.state.editing) {
            return (
                <img className="cover-photo" src={this.props.thisPost.coverUrl} alt={`${this.props.thisPost.coverUrl}`} />
            );
        } else {
            return (
                <div>
                    <img className="cover-photo" src={this.props.thisPost.coverUrl} alt={`${this.props.thisPost.coverUrl}`} />
                    <br />
                    <input
                        className="input-coverURL"
                        onChange={this.editCoverUrl}
                        value={this.state.coverUrl}
                    />
                </div>
            );
        }
    }

    editCoverUrl = (e) => {
        this.setState({
            coverUrl: e.target.value,
        });
    }

    // MANAGE TAGS

    displayTags = () => {
        if (!this.state.editing) {
            return (
                <div className="post-tags">
                    {this.convertTagsToLabels()}
                </div>
            );
        } else {
            return (
                <input
                    className="input-tags"
                    onChange={this.editTags}
                    value={this.state.tags}
                />
            );
        }
    }

    // Helper function for rendering the tags with Semantic-UI.
    convertTagsToLabels = () => {
        if (this.props.thisPost.tags !== undefined) {
            const labels = this.props.thisPost.tags.trim().split(',');
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
    }

    editTags = (e) => {
        this.setState({
            tags: e.target.value,
        });
    }

    // Essentially the same effect as back-arrowing - let the user return to the front page.
    discardPost = (e) => {
        e.preventDefault();
        this.props.deletePost(this.props.thisPost.id, this.props.history);
    }

    // Allow the user to edit text fields.
    openEditMode = () => {
        this.setState({
            title: this.props.thisPost.title,
            tags: this.props.thisPost.tags,
            coverUrl: this.props.thisPost.coverUrl,
            content: this.props.thisPost.content,
            editing: true,
        });
    }

    // Render function for one button.
    // If the user is currently editing their post, then a save button will be displayed.
    // If the user is not currently editing their post, then an edit button will be displayed.
    displayButton = () => {
        if (this.state.editing) {
            return (
                <i className="fas fa-check-square fa-lg" role="button" aria-label="Save edits" tabIndex={0} onClick={this.pushChanges} />
            );
        } else {
            return (
                <i className="fas fa-edit fa-lg" role="button" aria-label="Make edits" tabIndex={0} onClick={this.openEditMode} />
            );
        }
    }

    render() {
        return (
            <div>
                <div id="post-topbar">
                    <NavLink to="/">
                        <i className="fas fa-arrow-circle-left fa-lg" />
                    </NavLink>
                    {this.displayButton()}
                    <i role="button" aria-label="Delete post" tabIndex={0} className="fas fa-trash-alt fa-lg" onClick={this.discardPost} />
                </div>

                <div id="post-container">
                    <div id="post">
                        {this.displayTitle()}
                        {this.displayTags()}
                        {this.displayCover()}
                        {this.displayContent()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => {
    return {
        thisPost: reduxState.posts.current,
    };
};

export default connect(mapStateToProps, { fetchPost, updatePost, deletePost })(Post);
