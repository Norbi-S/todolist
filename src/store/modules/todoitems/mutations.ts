import { MutationTree } from 'vuex';
import State from './state';
import { ItemIDsPayload } from './common';

export default {
  setItemsDone(state, { itemIDs }: ItemIDsPayload) {
    const newItems = Object.values(state.itemsMap).map((item) => {
      if (itemIDs.includes(item.id)) {
        return {
          ...item,
          done: true,
        };
      }
      return item;
    });

    state.itemsMap = State.makeItemsMapFromItems(newItems);
  },

  setItemsNotDone(state, { itemIDs }: ItemIDsPayload) {
    const newItems = Object.values(state.itemsMap).map((item) => {
      if (itemIDs.includes(item.id)) {
        return {
          ...item,
          done: false,
        };
      }

      return item;
    });

    state.itemsMap = State.makeItemsMapFromItems(newItems);
  },
} as MutationTree<State>;
