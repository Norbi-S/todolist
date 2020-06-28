import { MutationTree } from 'vuex';
import State from './state';
import { ItemIDsPayload, NewItemPayload } from './common';
import ITodoItem from '@/common/ITodoItem';

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

  addItem(state, { content }: NewItemPayload) {
    let maxID = 0;
    for (const item of Object.values(state.itemsMap)) {
      if (item.id > maxID) {
        maxID = item.id;
      }
    }

    const newItem: ITodoItem = {
      id: maxID + 1,
      content: content,
      done: false,
    };

    const newItems = [...Object.values(state.itemsMap), newItem];

    state.itemsMap = State.makeItemsMapFromItems(newItems);
  },
} as MutationTree<State>;
