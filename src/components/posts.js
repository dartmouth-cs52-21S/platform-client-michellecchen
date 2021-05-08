import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchPosts } from '../actions/index';
import Preview from './preview';

class Posts extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        if (this.props.posts !== undefined) {
            const posts = this.props.posts.map((post) => {
                return (
                    <NavLink className=".post-preview" to={`/posts/${post.id}`} key={post.id}>
                        <Preview key={post.id} post={post} />
                    </NavLink>
                );
            });

            return (
                <div>
                    <h1 id="site-title">Posts</h1>
                    <div id="posts">
                        {posts}
                    </div>
                </div>
            );
        } else {
            return <div>Loading...</div>;
        }
    }
}

const mapStateToProps = (reduxState) => ({
    posts: reduxState.posts.all,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
