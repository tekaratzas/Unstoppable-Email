import { SET_CONTRACT } from './../actions/';

const initialState = {
    eth: {}
}

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case SET_CONTRACT:
            return {
                ...state,
                eth: action.eth
            }
        default: return state;
    }
}