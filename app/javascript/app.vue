<template>
  <div id="app">
    <p>{{ count }}</p>
    <button @click="addCount">+</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  methods: mapActions(['addCount']),
  computed: mapState(['count'])
}

</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
