<template>
  <div>
    <p>itemID: {{ itemID }}</p>
    <p>store data: {{ countAlias }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  props: {
    itemID: {
      type: Number,
    },
  },
  computed: mapState({
    countAlias: "data",
  }),
});
</script>
