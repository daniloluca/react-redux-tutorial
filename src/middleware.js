import actions from './actions';
import { get } from './agent';

const middleware = store => next => action => {

    next(action);

    switch (action.type) {
        case 'GET_POSTS':
            get('5a0de191300000ee04433440').then(
                res => {
                    next(actions.receivePosts(res.data));
                },
                err => {
                    next(actions.receivePostsError(err));
                }
            );
            break;
        default:
            break;
    }
};

export default middleware;
