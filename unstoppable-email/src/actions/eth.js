import { SET_CONTRACT } from './index';

export function setContract(eth) {
    return dispatch => {
        dispatch({type: SET_CONTRACT, eth});
    }
}