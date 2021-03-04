import { combineReducers } from 'redux';
import { DemoReducer, DemoState } from './demo';

export interface StoreState {
  demo: DemoState;
}

export const RootReducer = combineReducers<StoreState>({
  demo: DemoReducer,
});
