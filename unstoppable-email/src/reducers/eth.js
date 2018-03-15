import { SET_CONTRACT } from './../actions/';

const initialState = {
    contract: {}
}

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case SET_CONTRACT:
            return {
                ...state,
                contract: action.contract
            }
        default: return state;
    }
}