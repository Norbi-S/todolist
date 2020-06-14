import { ActionTree } from 'vuex';
import State from './state';
import { ItemIDsPayload } from './common';

export default {
  makeItemsDone({ commit }, payload: ItemIDsPayload) {
    commit('setItemsDone', payload);
  },

  makeItemsNotDone({ commit }, payload: ItemIDsPayload) {
    commit('setItemsNotDone', payload);
  },
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
} as ActionTree<State, any>;
