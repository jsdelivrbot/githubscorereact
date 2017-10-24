import axios from 'axios';

const ROOT_URL = `https://api.github.com/users/`;

export const GET_SCORE = 'get_score';

export function getScore(user) {
    const url = `${ROOT_URL}${user.user}`;
    const request = axios.get(url);
    
    return {
        type: GET_SCORE,
        payload: request
    };
}