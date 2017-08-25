<template lang="pug">
  v-app(toolbar footer fill-height)
    fm-header
    main
      v-container(fluid)
        router-view
    fm-footer
</template>

<script>
import FmHeader from '@/components/layout/Header'
import FmFooter from '@/components/layout/Footer'

export default {
  name: 'app',
  components: { FmHeader, FmFooter }
}
</script>

<style lang="scss">
$primary: red;

@import"~vuetify/dist/vuetify.min.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
