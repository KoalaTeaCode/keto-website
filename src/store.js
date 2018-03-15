import Vuex from 'vuex';

export function getStore() {
  const store = new Vuex.Store({
    state: {
      selectedItem: {},
    },
    mutations: {
      selectItem(state, payload) {
        state.selectedItem = payload.item;
      },
    },
  });

  return store;
}
