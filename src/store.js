import Vuex from 'vuex';

const slugify = require('slugify');

import breakfast from './data/breakfast';
import lunch from './data/lunch';
import dinner from './data/dinner';
import sides from './data/sides';
import snacks from './data/snacks';

export function getStore() { // eslint-disable-line
  const store = new Vuex.Store({
    state: {
      selectedItem: {},
    },
    mutations: {
      selectItem(state, payload) {
        state.selectedItem = payload.item;
      },
    },
    getters: {
      findItem: state => (slug) => {
        let item = breakfast.find(item => slugify(item.title.toLowerCase()) === slug);
        if (item) return item;

        item = lunch.find(item => slugify(item.title.toLowerCase()) === slug);
        if (item) return item;

        item = dinner.find(item => slugify(item.title.toLowerCase()) === slug);
        if (item) return item;

        item = sides.find(item => slugify(item.title.toLowerCase()) === slug);
        if (item) return item;

        item = snacks.find(item => slugify(item.title.toLowerCase()) === slug);
        if (item) return item;

        return {};
      }
    },
  });

  return store;
}
