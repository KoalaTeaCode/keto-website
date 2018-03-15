import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import RecipeDetail from '@/components/RecipeDetail';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/recipes/:recipeId',
      name: 'RecipeDetail',
      component: RecipeDetail,
    },
    {
      path: '/breakfast',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/lunch',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/dinner',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/sides',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/snacks',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});
