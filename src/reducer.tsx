import { combineReducers } from 'redux';
import home from './modules/Home/ducks/index.js';

export default combineReducers({
  Home: home,
});