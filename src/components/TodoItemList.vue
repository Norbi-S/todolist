<template>
  <v-container fluid>
    <v-row v-for="todo in todos" :key="todo">
      <v-container fluid="">
        <TodoItemCard :item-id="todo"></TodoItemCard>
      </v-container>
    </v-row>
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
