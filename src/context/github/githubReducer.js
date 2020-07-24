import {
    SEARCH_USER,
    SET_LOADING,
    CLEAR_USER,
    GET_USER,
    SET_ALERT,
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
            case SEARCH_USER:
                return {
                    ...state,
                    users: action.payload,
                        loading: false
                }
                case CLEAR_USER:
                    return {
                        ...state,
                        users: [],
                            loading: false
                    }
                    case GET_USER:
                        return {
                            ...state,
                            user: action.payload,
                                loading: false
                        }
                        default: {
                            return state;
                        }
    }
}