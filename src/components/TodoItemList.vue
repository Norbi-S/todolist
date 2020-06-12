<template>
  <v-container fluid>
    <p>items: {{ items }}</p>
    <p>doneItems: {{ doneItems }}</p>
  </v-container>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import ITodoItem from "src/common/ITodoItem";

export default Vue.extend({
  props: {
    items: {
      type: Object as PropType<Array<ITodoItem>>
    },
    doneItems: {
      type: Object as PropType<Array<number>>
    }
  }
});
</script>