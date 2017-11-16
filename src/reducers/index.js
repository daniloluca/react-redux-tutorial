import { combineReducers } from 'redux';
import posts from './posts';
import postInfo from './postInfo';

const app = combineReducers({
	posts,
    postInfo,
});

export default app;
