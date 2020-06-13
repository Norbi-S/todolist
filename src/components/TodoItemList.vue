<template>
  <v-container fluid>
    <v-row v-for="item in items" :key="item.id">
      <TodoItemCard :item="item" :done="doneItems.includes(item.id)"></TodoItemCard>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import TodoItemCard from "./TodoItemCard.vue";
import ITodoItem from "src/common/ITodoItem";

export default Vue.extend({
  props: {
    items: {
      type: Array as PropType<Array<ITodoItem>>
    },
    doneItems: {
      type: Array as PropType<Array<number>>
    }
  },
  components: { TodoItemCard }
});
</script>