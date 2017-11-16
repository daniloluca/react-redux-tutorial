export const getPosts = () => ({
	type: 'GET_POSTS',
});

export const receivePosts = posts => ({
	type: 'RECEIVE_POSTS',
	posts,
});

export const receivePostsError = err => ({
	type: 'RECEIVE_POSTS_ERROR',
	err,
});
