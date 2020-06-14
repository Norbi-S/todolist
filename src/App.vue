<template>
  <v-app>
    <v-app-bar app color="blue">
      <v-toolbar-title class="white--text">TodoList</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <TodoItemList></TodoItemList>
        <AddItemDialog></AddItemDialog>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoItemList from './components/TodoItemList.vue';
import AddItemDialog from './components/AddItemDialog.vue';
import ITodoItem from './common/ITodoItem';

type State = {
  items: Array<ITodoItem>;
};

export default Vue.extend({
  components: {
    TodoItemList,
    AddItemDialog,
  },
});
</script>
