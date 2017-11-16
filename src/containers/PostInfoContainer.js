import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import PostInfo from '../components/Posts/PostInfo';

class PostInfoContainer extends Component {
    componentDidMount() {
        this.props.getPostInfo();
    }

    render() {
        return <PostInfo data={ this.props.postInfo } />;
    }
}

const mapStateToProps = state => ({
    postInfo: state.postInfo,
});

const mapDispatchToProps = dispatch => ({
    getPostInfo: () => dispatch(actions.getPostInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostInfoContainer);
