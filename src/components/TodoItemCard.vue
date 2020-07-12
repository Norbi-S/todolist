<template>
  <v-card ripple>
    <v-card-title>
      <v-checkbox :input-value="item.done" @click.stop="onDoneStatusChange">
        <template v-slot:label>
          <div :class="{'text-decoration-line-through': item.done}">{{ item.content }}</div>
        </template>
      </v-checkbox>
    </v-card-title>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    itemId: {
      type: Number,
    },
  },
  computed: {
    item() {
      return this.$store.getters.getItem(this.$props.itemId);
    },
  },
  methods: {
    onDoneStatusChange() {
      const isDone = this.$store.getters.isTodoDone(this.$props.itemId);
      const action = isDone ? 'makeItemsNotDone' : 'makeItemsDone';

      this.$store.dispatch(action, { itemIDs: [this.$props.itemId] });
    },
  },
});
</script>
