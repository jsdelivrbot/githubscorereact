import { GET_SCORE, FAILED_GET_SCORE } from '../actions';

export default function(state={}, action) {
    switch (action.type) {
        case GET_SCORE:
            const { followers, public_repos }= action.payload.data;
            const score = followers + public_repos;
            return { ['score']: score };

        case FAILED_GET_SCORE:
            return { ['score']: action.payload };

        default:
            return state;
    }
}