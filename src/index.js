import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore from './configureStore';

const store = configureStore();

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
    <Root store={ store } />,
    document.getElementById('root')
);
