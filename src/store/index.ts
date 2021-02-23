import { createStore } from 'redux';

export interface ActionType {
  type: string;
}

function counter(state = 0, action: ActionType) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counter);
store.subscribe(() => console.log(store.getState()));

export default store;
