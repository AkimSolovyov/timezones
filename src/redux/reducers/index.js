import { combineReducers } from 'redux';

// Local imports
import citiesReducer from './citiesReducer';

const rootReducer = combineReducers({
  app: citiesReducer,
});

export default rootReducer;
