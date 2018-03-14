import { SET_ETH } from './index';

export function setEth(eth) {
    return dispatch => {
        dispatch({type: SET_ETH, eth});
    }
}