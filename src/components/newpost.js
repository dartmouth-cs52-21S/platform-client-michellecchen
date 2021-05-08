import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

import { createPost } from '../actions/index';

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            coverUrl: '',
            tags: '',
        };
    }

    editTitle = (e) => {
        this.setState({
            title: e.target.value,
        });
    }

    editContent = (e) => {
        this.setState({
            content: e.target.value,
        });
    }

    editCoverUrl = (e) => {
        this.setState({
            coverUrl: e.target.value,
        });
    }

    editTags = (e) => {
        this.setState({
            tags: e.target.value,
        });
    }

    createPost = () => {
        const post = {
            title: this.state.title,
            content: this.state.content,
            coverUrl: this.state.coverUrl,
            tags: this.state.tags,
        };

        // Code from instructions: "Add a parameter to any actionCreator that
        // needs to call history like so...""
        this.props.createPost(post, this.props.history);
    }

    renderCover = () => {
        if (this.state.coverUrl !== undefined && this.state.coverUrl !== '') {
            return (
                <div>
                    <img id="newpost-cover" src={this.state.coverUrl} alt={`${this.state.coverUrl}`} />
                </div>
            );
        } else {
            return (
                <div />
            );
        }
    }

    renderButtons = () => {
        return (
            <div id="newpost-options">
                <NavLink to="/">
                    <Button icon labelPosition="left">
                        <Icon name="trash" />
                        Discard
                    </Button>
                </NavLink>
                <Button icon labelPosition="left" onClick={this.createPost}>
                    <Icon name="check square" />
                    Post
                </Button>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div id="back-button">
                    <NavLink to="/">
                        <i className="fas fa-arrow-circle-left" />
                    </NavLink>
                </div>

                <div id="post-new">

                    <h1>Create A New Post</h1>

                    <h3>Title</h3>
                    <input
                        type="text"
                        onChange={this.editTitle}
                        value={this.state.title}
                        placeholder="Enter your title here..."
                    />

                    <h3>Tags</h3>
                    <input
                        type="text"
                        onChange={this.editTags}
                        value={this.state.tags}
                        placeholder="enter, your, tags, like, this"
                    />

                    <h3>Cover Image URL</h3>
                    <input
                        type="text"
                        onChange={this.editCoverUrl}
                        value={this.state.coverUrl}
                        placeholder="Enter a link to your cover image here..."
                    />

                    {this.renderCover()}

                    <h3>Content</h3>
                    <textarea
                        type="text"
                        onChange={this.editContent}
                        value={this.state.content}
                        placeholder="Enter your content here..."
                    />
                </div>
                {this.renderButtons()}
            </div>
        );
    }
}

export default connect(null, { createPost })(NewPost);
