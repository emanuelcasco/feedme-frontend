<template lang="pug">
  v-toolbar
    img(src="../../assets/logo.svg", width="150")
    v-spacer
    v-toolbar-items.hidden-xs
      v-btn(disabled flat) 
        | {{ project ? project.name : '' }}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      project: 'project'
    })
  }
}
</script>


<style lang="scss" scoped>
.toolbar {
  background-color: #fafafa;
  border-bottom: solid 1px #BBB;
}
</style>

