import { GetterTree } from 'vuex';
import State from './state';

export default {
  todos: ({ itemsMap }) => Object.values(itemsMap).map(({ id }) => id),

  doneTodos: ({ itemsMap }) =>
    Object.values(itemsMap)
      .filter(({ done }) => done)
      .map(({ id }) => id),
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
} as GetterTree<State, any>;
