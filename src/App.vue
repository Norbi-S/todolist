<template>
  <v-app>
    <v-app-bar app color="blue">
      <v-toolbar-title>TodoList</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <TodoItemList></TodoItemList>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoItemList from './components/TodoItemList.vue';
import ITodoItem from './common/ITodoItem';

type State = {
  items: Array<ITodoItem>;
};

export default Vue.extend({
  components: {
    TodoItemList,
  },
});
</script>
