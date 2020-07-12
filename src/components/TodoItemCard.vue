<template>
  <v-card ripple>
    <v-container fluid>
      <v-row justify="space-between">
        <v-col cols="auto">
          <v-checkbox class="pa-0 ma-0" :input-value="item.done" @click.stop="onDoneStatusChange">
            <template v-slot:label>
              <v-card-title
                :class="[{'text-decoration-line-through': item.done}, 'pa-0']"
              >{{ item.content }}</v-card-title>
            </template>
          </v-checkbox>
        </v-col>
        <v-col cols="auto">
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-trash-can</v-icon>
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
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
