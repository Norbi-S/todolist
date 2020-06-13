<template>
  <div>
    <p>item: {{ item }}</p>
    <p>done: {{ done }}</p>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import ITodoItem from "src/common/ITodoItem";

export default Vue.extend({
  props: {
    item: {
      type: Object as PropType<ITodoItem>
    },
    done: {
      type: Boolean
    }
  }
});
</script>