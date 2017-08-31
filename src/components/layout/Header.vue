<template lang="pug">
  v-toolbar.header
    router-link(:to="{ path: '/' }")
      img(src="../../assets/logo.svg", width="150")
    v-spacer
    v-toolbar-items.hidden-xs
      v-btn.header__project(disabled flat) 
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
