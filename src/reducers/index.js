import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ScoreReducer from './reducer_score';

const rootReducer = combineReducers({
  form: formReducer,
  scores: ScoreReducer
});

export default rootReducer;
