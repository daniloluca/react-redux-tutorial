export const getPostInfo = () => ({
	type: 'GET_POST_INFO',
});

export const receivePostInfo = postInfo => ({
	type: 'RECEIVE_POST_INFO',
	postInfo,
});

export const receivePostInfoError = err => ({
	type: 'RECEIVE_POST_INFO_ERROR',
	err,
});
