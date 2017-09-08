<template>
  <section>
    <h1>About</h1>
  </section>
</template>

<script>
import api from '../services/api'

export default {
    data () {
      return {
        sources: api.sources
      }
    }
}
</script>
