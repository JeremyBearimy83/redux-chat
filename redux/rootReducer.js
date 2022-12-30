import { combineReducers } from 'redux';
import commonReducer from './common/commonReducer';

const rootReducer = combineReducers({ commonReducer });

export default rootReducer;
