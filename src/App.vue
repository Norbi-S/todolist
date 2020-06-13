<template>
  <v-app>
    <v-app-bar app color="blue">
      <v-toolbar-title>TodoList</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <TodoItemList :items="items" :doneItems="doneItems"></TodoItemList>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import TodoItemList from "./components/TodoItemList.vue";
import ITodoItem from "./common/ITodoItem";

type State = {
  items: Array<ITodoItem>;
};

export default Vue.extend({
  components: {
    TodoItemList
  },
  data: function(): State {
    return {
      items: [
        { id: 1, content: "First item", done: false },
        { id: 2, content: "Second item", done: true }
      ]
    };
  },
  computed: {
    doneItems: function(): Array<number> {
      return this.items.filter(({ done }) => done).map(({ id }) => id);
    }
  }
});
</script>
