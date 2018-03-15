import { POPULATE_EMAILS } from './index';

export function populateInbox(emails){
    return dispatch => {
        dispatch({type: POPULATE_EMAILS, emails});
    }
}