<template>
  <div class='wrap'>
    <section>
      <h1>{{item.title}}</h1>
      <p>{{item.recipe.summary}}</p>
      <img :src='item.postImage' />
    </section>

    <section>
      <h3>The Preparation</h3>
      <ul>
        <li v-for='ingredient in item.recipe.ingredients'>{{ingredient}}</li>
      </ul>
    </section>

    <section>
      <h3>The Execution</h3>
      <ul>
        <li v-for='ingredient in item.recipe.instructions'>{{ingredient}}</li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
  .wrap {
    margin-top: 1em;
  }

  section {
    max-width: 600px;
    margin: 0 auto;
    background: #fff;
    padding: 1em;
    margin-bottom: 1em;
  }

  img {
    max-width: 100%;
  }

  ul {
    text-align: left;
  }
</style>

<script>
export default {
  name: 'RecipeDetail',
  mounted () {
    window.scrollTo(0, 0);
  },
  metaInfo () {

    return {
      title: `Keto ${this.item.title}`,
      meta: [
        { vmid: 'description', name: 'description', content: this.item.summary }
      ]
    };
  },
  computed: {
    item () {
      if (this.$store.state.selectedItem.title) return this.$store.state.selectedItem;

      const foundItem = this.$store.getters.findItem(this.$route.params.recipeId);
      if (foundItem.title) return foundItem;

      return {};
    },
  },
}
</script>
