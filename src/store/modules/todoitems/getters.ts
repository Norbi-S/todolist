import { GetterTree } from 'vuex';
import State from './state';

export default {
  todos: ({ itemsMap }) => Object.values(itemsMap).map(({ id }) => id),

  isTodoDone: ({ itemsMap }) => (id: number) => itemsMap[id].done,

  getItem: ({ itemsMap }) => (id: number) => itemsMap[id],
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
} as GetterTree<State, any>;
