<template>
  <div id="app">
    <!-- <div class='site-name'>
      <img src='./assets/logo.png' />
      <span>Logo</span>
    </div> -->

    <nav>
      <ul>
        <li v-for='route in routes'>
          <a :href='`${route.path}`'>
            <img :src="route.img">
            <span>{{route.name}}</span>
          </a>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
const milk = require('./assets/milk.svg');
const sandwich = require('./assets/sandwich.svg');
const tray = require('./assets/tray.svg');
const popcorn = require('./assets/popcorn.svg');
const rice = require('./assets/rice.svg');

export default {
  name: 'App',
  data () {
    return {
      routes: [
        {
          name: 'Breakfast',
          path: '/breakfast',
          img: milk,
        },
        {
          name: 'Lunch',
          path: '/lunch',
          img: sandwich,
        },
        {
          name: 'Dinner',
          path: '/dinner',
          img: tray,
        },
        {
          name: 'Snacks',
          path: '/snacks',
          img: popcorn,
        },
        {
          name: 'Side Item',
          path: '/sides',
          img: rice,
        },
      ],
    };
  },
};
</script>

<style>
  body {
    margin: 0;
    background: #f4f4f4;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    background: #fff;
  }
</style>

<style scoped>
  .site-name {
    margin-top: 1em;
    margin-bottom: 2em;
    font-size: 26px;
  }

  img {
    width: 30px;
  }

  ul {
    margin-top: 0;
    list-style-type: none;
  }

  li {
    display: inline-block;
    padding: 1em;
    font-size: 20px;
    font-weight: bold;
  }

  li:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  li a {
    color: #2c3e50;
    text-decoration: none;
  }

  span {
    margin-left: 1em;
  }

  img, span {
    vertical-align: middle;
  }
</style>
