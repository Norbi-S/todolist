import State from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
  state: () => new State(),
  mutations,
  getters,
  actions,
};
