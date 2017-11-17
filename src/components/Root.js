import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, HashRouter, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import PostCardListContainer from '../containers/PostCardListContainer';
// import PostInfoContainer from '../containers/PostInfoContainer';

const Root = ({ store }) => (
    <Provider store={store}>
    	<HashRouter>
	    	<div>
                <Header />

		        <Switch>
		        	<Redirect exact from='/' to='/posts' />
		        	<Route exact path='/posts' component={ PostCardListContainer } />
		        </Switch>

                <Footer />
		    </div>
		</HashRouter>
  	</Provider>
);

export default Root;
