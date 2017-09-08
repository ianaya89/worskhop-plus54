<template>
  <div>
    <p>Name: <span> {{ source.name }}</span></p>
    <p>Country: <span> {{ source.country }}</span></p>

    <button type="button" @click="emitEvent">Click</button>

    <div>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    source: {
      type: Object,
      default: () => {
        return { name: 'NA', country: 'NA'}
      }
    }
  },

  created () {
    console.log(this.$route.params)
    getNewsById(this.$route.params)
  },

  methods: {
    emitEvent() {
      this.$emit('source-click', {
        data: this.source.name
      })
    }
  }
}
</script>
