<template lang="pug">
  v-app(toolbar footer fill-height)
    fm-header
    main.app-layout
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
  @import"./scss/all";
</style>
