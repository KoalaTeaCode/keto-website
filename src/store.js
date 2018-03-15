import Vuex from 'vuex';

import breakfast from './data/breakfast.json';
import lunch from './data/lunch.json';
import dinner from './data/dinner.json';
import sides from './data/sides.json';
import snacks from './data/snacks.json';

const slugify = require('slugify');


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
      findItem: () => (slug) => {
        function find(i) {
          return slugify(i.title.toLowerCase()) === slug;
        }

        let item = breakfast.find(find);
        if (item) return item;

        item = lunch.find(find);
        if (item) return item;

        item = dinner.find(find);
        if (item) return item;

        item = sides.find(find);
        if (item) return item;

        item = snacks.find(find);
        if (item) return item;

        return {};
      },
    },
  });

  return store;
}
