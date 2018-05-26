import { combineReducers, createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import game from './game/Reducer';

const rootReducer = combineReducers({
  game
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
