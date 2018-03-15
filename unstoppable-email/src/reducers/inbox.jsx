import { POPULATE_EMAILS } from '../actions';

const initialState = {
    mail: [],
}

export default (state = initialState, action = {}) => {
    switch(action.type){
        case POPULATE_EMAILS:
            return {
                ...state,
                mail: action.mail
            }
        default: return state;
    }
}