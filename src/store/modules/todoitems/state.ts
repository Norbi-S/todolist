import ITodoItem from 'src/common/ITodoItem';

type ItemsMapType = { [key: number]: ITodoItem };

export default class State {
  itemsMap: ItemsMapType = {};

  constructor(items: Array<ITodoItem> = []) {
    this.itemsMap = State.makeItemsMapFromItems(items);
  }

  static makeItemsMapFromItems(items: Array<ITodoItem>): ItemsMapType {
    return Object.fromEntries(items.map((item) => [item.id, item]));
  }
}
