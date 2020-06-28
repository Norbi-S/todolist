import { ActionTree } from 'vuex';
import State from './state';
import { ItemIDsPayload, NewItemPayload } from './common';

export default {
  makeItemsDone({ commit }, payload: ItemIDsPayload) {
    commit('setItemsDone', payload);
  },

  makeItemsNotDone({ commit }, payload: ItemIDsPayload) {
    commit('setItemsNotDone', payload);
  },

  addItem({ commit }, payload: NewItemPayload) {
    commit('addItem', payload);
  },
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
} as ActionTree<State, any>;
