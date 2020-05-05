import { createStore, combineReducers } from 'redux';
import mealsReducer from './src/ducks/meals';

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

export default store;
