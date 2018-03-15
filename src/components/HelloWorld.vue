<template>
  <div class="hello">
    <section class='title'>
      <h1>{{title}}</h1>
    </section>

    <section class='recipes'>
      <div class='recipe' v-for='recipe in recipes' v-if='recipe.postImage' @click='select(recipe)'>
        <img :src='recipe.postImage' />
        <div>
          <strong>{{recipe.title}}</strong>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const slugify = require('slugify')

import breakfast from '../data/breakfast';
import lunch from '../data/lunch';
import dinner from '../data/dinner';
import sides from '../data/sides';
import snacks from '../data/snacks';

export default {
  name: 'HelloWorld',
  data() {
    return {};
  },
  computed: {
    recipes () {
      if (this.$route.path === '/breakfast') {
        return breakfast;
      }

      if (this.$route.path === '/lunch') {
        return lunch;
      }

      if (this.$route.path === '/dinner') {
        return dinner;
      }

      if (this.$route.path === '/sides') {
        return sides;
      }

      if (this.$route.path === '/snacks') {
        return snacks;
      }

      return breakfast;
    },
    title () {
      if (this.$route.path === '/breakfast') {
        return 'Breakfast';
      }

      if (this.$route.path === '/lunch') {
        return 'Lunch';
      }

      if (this.$route.path === '/dinner') {
        return 'Dinner';
      }

      if (this.$route.path === '/sides') {
        return 'Side Item';
      }

      if (this.$route.path === '/snacks') {
        return 'Snacks';
      }

      return 'Breakfast';
    },
  },
  methods: {
    select(item) {
      this.$store.commit('selectItem', {item});
      this.$router.push({name: 'RecipeDetail', params: {recipeId: slugify(item.title.toLowerCase())}});
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }

  .hello {
     background: #f4f4f4;
  }

  .title {
    color: #C9F3FF;
    background: #4DBAF6;
    font-size: 32px;
    padding: 1em;
    margin-top: .5em;
    margin-bottom: 1.5em;
  }

  h1 {
    margin: 0;
  }

  .recipes {
    display: flex;
    flex-wrap: wrap;
    max-width: 960px;
    margin: 0 auto;
    text-align: left;
  }

  .recipe {
    flex-grow: 1;
    margin-bottom: 2em;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.07);
    padding: .5em;
    padding-top: 1.2em;
    margin-right: .75em;
    text-align: center;
    max-width: 290px;
  }

  .recipe:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  .recipe strong {
    font-size: 16px;
  }

  .recipe img {
    width: 280px;
    border-radius: 4px;
    margin: 0 auto;
    display: block;
    margin-bottom: .5em;
  }
</style>
