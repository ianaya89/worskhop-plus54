<template>
  <div id="app">
    <p-header></p-header>

    <router-view></router-view>

    <p-footer></p-footer>
  </div>
</template>

<script>
import PHeader from './components/layout/Header.vue'
import PFooter from './components/layout/Footer.vue'

export default {
  name: 'app',

  components: { PHeader, PFooter }
}
</script>
