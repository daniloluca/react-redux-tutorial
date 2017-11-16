import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostCardList from '../components/Posts/PostCardList';
import actions from '../actions';

class PostCardListContainer extends Component {
    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        return <PostCardList posts={ this.props.posts } />;
    }
}

const mapStateToProps = state => ({
    posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(actions.getPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCardListContainer);
