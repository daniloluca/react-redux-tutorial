import React from 'react';
import { Col } from 'react-materialize';
// import { Link } from 'react-router-dom';

const img = {
    width: '100%',
    height: '100%',
    boxShadow: '0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 3px 1px -2px rgba(0,0,0,.2)',
};

const cardContainer = {
    padding: '10px 10px 10px 10px',
};

const PostCard = ({ data }) => (
    <Col m={4} s={4} style={ cardContainer } >
        <a to={`/posts/${data.id}`} className='waves-effect waves-light'>
            <img alt='' style={ img } src={ data.img } />
        </a>
    </Col>
);

export default PostCard;
