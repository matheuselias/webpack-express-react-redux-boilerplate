import { combineReducers } from 'redux';
import MessageReducer from './message_reducer';

const rootReducer = combineReducers({
  fetchMessage: MessageReducer
});

export default rootReducer;
