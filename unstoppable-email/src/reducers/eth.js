import { SET_ETH } from './../actions/';

const initialState = {
    eth: {}
}

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case SET_ETH:
            return {
                ...state,
                eth: action.eth
            }
        default: return state;
    }
}