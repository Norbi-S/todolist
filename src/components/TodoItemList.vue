<template>
  <v-container fluid>
    <TodoItemCard
      v-for="todo in todos"
      :key="todo"
      :item-id="todo"
    ></TodoItemCard>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoItemCard from './TodoItemCard.vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  components: { TodoItemCard },
  computed: {
    ...mapGetters(['todos']),
  },
});
</script>
