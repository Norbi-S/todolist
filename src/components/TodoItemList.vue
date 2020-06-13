<template>
  <v-container fluid>
    <TodoItemCard :itemID="1"></TodoItemCard>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import TodoItemCard from "./TodoItemCard.vue";

export default Vue.extend({
  components: { TodoItemCard },
});
</script>
