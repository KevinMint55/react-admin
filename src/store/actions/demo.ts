import { DEMO_FIELD_1, DEMO_FIELD_2, DEMO_FIELD_3 } from 'constant';

export const DemoAtions = {
  actionA: () => ({
    type: DEMO_FIELD_1,
    payload: 'A',
  }),
  actionB: () => ({
    type: DEMO_FIELD_2,
    payload: 2,
  }),
  actionC: () => ({
    type: DEMO_FIELD_3,
    payload: true,
  }),
};
