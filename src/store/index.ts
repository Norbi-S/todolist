import Vue from 'vue';
import Vuex from 'vuex';
import todoItemsModule from './modules/todoitems';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { todoItems: todoItemsModule },
});
