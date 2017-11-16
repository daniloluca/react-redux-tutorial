import React from 'react';
import { Footer as MaterializeFooter } from 'react-materialize';

const footerStyle = {
    backgroundColor: '#24292e',
};

const Footer = () => (
    <MaterializeFooter copyrights="&copy 2015 Copyright Text"
    	moreLinks={
    		<a className="grey-text text-lighten-4 right">More Links</a>
    	}
    	links={
    		<ul>
    			<li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
    			<li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
    		</ul>
    	}
    	className='example'
        style={ footerStyle }
    >
		<h5 className="white-text">Footer Content</h5>
		<p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
    </MaterializeFooter>
);

export default Footer;
