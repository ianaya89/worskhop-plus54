<template>
  <section>
    <h1>Home</h1>
    <p-source v-for="s in sources" :key="s.id" :source="s" @source-click="print">
    </p-source>
  </section>
</template>

<script>
  import api from '../services/api'
  import PSource from './Source.vue'

  export default {

    components: { PSource },

    data () {
      return {
        sources: []
      }
    },

    created () {
      this.getNews()
    },

    methods: {
      print(data) {
        console.log('Evento hijo....', data)
      },

      getNews () {
        api.getNews()
          .then((data) => {
            this.sources = [...this.sources, ...data.sources]
          })
      }
    }
  }
</script>
