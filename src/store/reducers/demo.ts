import { combineReducers } from 'redux';
import { DEMO_FIELD_1, DEMO_FIELD_2, DEMO_FIELD_3 } from 'constant';

export interface DemoState {
  demoA: string;
  demoB: number;
  demoC: boolean;
}

export const DemoReducer = combineReducers<DemoState>({
  demoA: (state = '', { payload, type }) => {
    if (type === DEMO_FIELD_1) return payload;
    return state;
  },
  demoB: (state = 0, { payload, type }) => {
    if (type === DEMO_FIELD_2) return payload;
    return state;
  },
  demoC: (state = false, { payload, type }) => {
    if (type === DEMO_FIELD_3) return payload;
    return state;
  },
});
