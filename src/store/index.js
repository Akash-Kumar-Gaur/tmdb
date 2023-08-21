import {applyMiddleware, createStore} from 'redux';
import movieReducer from './movieReducer';
import thunk from 'redux-thunk';
const configureStore = () => {
  return createStore(movieReducer, applyMiddleware(thunk));
};
export default configureStore;
