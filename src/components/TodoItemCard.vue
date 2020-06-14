<template>
  <div>
    <p>itemID: {{ itemID }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    itemID: {
      type: Number,
    },
  },
});
</script>
