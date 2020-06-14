import ITodoItem from 'src/common/ITodoItem';

export default class State {
  items: Map<number, ITodoItem> = new Map([
    [1, { id: 1, content: 'First item', done: false }],
    [2, { id: 2, content: 'Second item', done: true }],
  ]);
}
