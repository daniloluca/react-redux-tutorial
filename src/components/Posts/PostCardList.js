import React from 'react';
import PostCard from './PostCard';
import { Row } from 'react-materialize';

const listContainer = {
    'padding': '10px 30px',
};

const PostCardList = ({ posts }) => (
    <Row style={ listContainer }>
        {posts.map(post =>
            <PostCard key={ post.id } data={ post } />
        )}
    </Row>
);

export default PostCardList;
