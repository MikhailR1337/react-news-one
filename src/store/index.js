import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import logger from '../middlewares/logger';
import randomid from '../middlewares/randomid';

const enhancer = applyMiddleware(randomid, logger);

const store = createStore(reducer, {}, enhancer);
// dev only
window.store = store;

export default store;