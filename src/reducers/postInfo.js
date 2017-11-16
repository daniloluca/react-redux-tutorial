const postInfo = (state = {}, action) => {
    switch (action.type) {
        case 'RECEIVE_POST_INFO':
            return {...action.postInfo};
        case 'RECEIVE_POST_INFO_ERROR':
            return {};
        default:
            return state;
    }
};

export default postInfo;
