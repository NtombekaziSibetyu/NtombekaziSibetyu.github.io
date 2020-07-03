import { SEND_EMAIL} from '../types';

export default (state, action) => {
    switch(action.type) {
        case SEND_EMAIL:
            return state;
        default:
            return state;
    }
};