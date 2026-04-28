import {legacy_createStore as createStore} from 'redux';
import mainReducer from './reducer';


const Store = createStore(mainReducer);

export default Store;