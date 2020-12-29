<template>
  <div id="app">
    <header-row @ham="ham" />
    <router-view />
    <footer-row />
  </div>
</template>

<script>
import HeaderRow from './components/HeaderRow';
import FooterRow from './components/FooterRow';

export default {
  name: 'App',
  components: {
    HeaderRow,
    FooterRow,
  },
  methods: {
    ham(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-weight: inherit;
  font-style: inherit;
  font-size: 100%;
  font-family: inherit;
  vertical-align: baseline;
  text-decoration: none;
  font-family: 'Josefin Sans', sans-serif;
}

a {
  color: #fff !important;
  &:hover {
    text-decoration: none !important;
  }
}
</style>
