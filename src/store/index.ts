import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootReducer } from './reducers';

const composeEnhancers = composeWithDevTools({});

export const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunk)));
