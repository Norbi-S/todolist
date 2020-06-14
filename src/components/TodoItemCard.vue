<template>
  <v-card>
    <v-list flat>
      <v-list-item-group
        :value="isDone | booleanToListItemValue"
        @change="onDoneStatusChange"
      >
        <v-list-item :ripple="false">
          <template v-slot:default="props">
            <v-list-item-action>
              <v-checkbox v-model="props.active" color="primary"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              {{ item.content }}
            </v-list-item-content>
          </template>
        </v-list-item>
      </v-list-item-group>
    </v-list>
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
    isDone() {
      return this.$store.getters.isTodoDone(this.$props.itemId);
    },
  },
  methods: {
    onDoneStatusChange() {
      const isDone = this.$store.getters.isTodoDone(this.$props.itemId);
      const action = isDone ? 'makeItemsNotDone' : 'makeItemsDone';

      this.$store.dispatch(action, { itemIDs: [this.$props.itemId] });
    },
  },
  filters: {
    booleanToListItemValue(val: boolean): number | undefined {
      return val ? 0 : undefined;
    },
  },
});
</script>
