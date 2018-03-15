import { POPULATE_EMAILS } from '../actions';

const initialState = {
    emails: [],
}

export default (state = initialState, action = {}) => {
    switch(action.type){
        case POPULATE_EMAILS:
            return {
                ...state,
                emails: action.emails
            }
        default: return state;
    }
}