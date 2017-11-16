import React from 'react';
import { Parallax } from 'react-materialize';

const PostInfo = ({ data }) => (
    <div>
        <Parallax imageSrc={ data.firstImg } />
        <div className="section white">
        	<div className="row container">
        		<h2 className="header">{ data.title }</h2>
        		<p className="grey-text text-darken-3 lighten-3">{ data.description }</p>
        	</div>
        </div>
    	<Parallax imageSrc={ data.secondImg }/>
    </div>
);

export default PostInfo;
