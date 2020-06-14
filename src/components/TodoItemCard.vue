<template>
  <div>
    <p>itemID: {{ itemId }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    itemId: {
      type: Number,
    },
  },
});
</script>
