import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
  repositoriesStates: repositoriesReducer,
});

export default reducers;
