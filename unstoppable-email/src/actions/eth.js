import { SET_CONTRACT } from './index';

export function setContract(contract) {
    return dispatch => {
        dispatch({type: SET_CONTRACT, contract});
    }
}