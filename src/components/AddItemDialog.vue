<template>
  <v-dialog v-model="shown" fullscreen hide-overlay transition="dialog-bottom-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-btn fixed bottom right fab color="primary" v-bind="attrs" v-on="on">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-toolbar color="primary">
        <v-btn icon color="white" @click="onClose()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title class="white--text">Add Todo Item</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn text @click="onSave()" color="white" :disabled="!valid">Save</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-card-text>
        <v-container fluid>
          <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="onSave">
            <v-row>
              <v-container fluid>
                <v-text-field label="Title" single-line :rules="titleRules" v-model="title"></v-text-field>
              </v-container>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';

interface FormRef {
  reset: () => void;
  validate: () => boolean;
}

function isFormRef(obj: unknown): obj is FormRef {
  return (
    typeof obj === 'object' &&
    obj != null &&
    'validate' in obj &&
    'reset' in obj
  );
}

export default Vue.extend({
  data: function () {
    return {
      shown: false,
      valid: false,
      titleRules: [
        (v: string | undefined) =>
          (v != null && v.length > 0) || 'Title is required',
      ],
      title: '',
    };
  },
  methods: {
    onClose() {
      const formRef = this.$refs.form;
      if (!isFormRef(formRef)) {
        return;
      }

      formRef.reset();
      this.shown = false;
    },
    onSave() {
      const formRef = this.$refs.form;
      if (!isFormRef(formRef)) {
        return;
      }

      if (formRef.validate()) {
        this.$store.dispatch('addItem', { content: this.title });
        this.onClose();
      }
    },
  },
});
</script>
