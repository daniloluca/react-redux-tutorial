const posts = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_POSTS':
            return [...action.posts];
        case 'RECEIVE_POSTS_ERROR':
            return [];
        default:
            return state;
    }
};

export default posts;
