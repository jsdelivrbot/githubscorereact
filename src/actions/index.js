import axios from 'axios';

const ROOT_URL = `https://api.github.com/users/`;

export const GET_SCORE = 'get_score';
export const FAILED_GET_SCORE = 'failed_get_score';

export function getScore(user) {
    const url = `${ROOT_URL}${user.user}`;
    const request = axios.get(url);
    
    return (dispatch) => {
        request
            .then(({data}) => dispatch({type: GET_SCORE, payload: data}))
            .catch(() => dispatch({type: FAILED_GET_SCORE, payload: "error"}));
    }
}