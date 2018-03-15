import { POPULATE_EMAILS } from './index';

export function populateInbox(mail){
    return dispatch => {
        dispatch({type: POPULATE_EMAILS, mail});
    }
}