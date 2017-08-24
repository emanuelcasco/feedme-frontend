<template lang="pug">
  v-toolbar
    v-toolbar-title FEEDME
    v-spacer
    v-toolbar-items(class="hidden-sm-and-down")
      v-btn(disabled flat) {{ project ? project.name : '' }}
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
  background: none;
  border-bottom: solid 1px #BBB;
  box-shadow: none;
}
</style>

