import State from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const initialState = [
  {
    id: 1,
    content: 'First item',
    done: false,
  },
  {
    id: 2,
    content: 'Second item',
    done: true,
  },
];

export default {
  state: () => new State(initialState),
  mutations,
  getters,
  actions,
};
