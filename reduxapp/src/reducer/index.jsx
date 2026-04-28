import {combineReducers} from 'redux';
import {addOrRemoveproduct} from './reducers';

const mainReducer = combineReducers({addOrRemoveproduct});

export default mainReducer;