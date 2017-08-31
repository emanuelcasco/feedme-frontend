<template lang="pug">
  v-toolbar.header
    router-link(:to="{ path: '/' }")
      img.header__logo(src="../../assets/logo.svg")
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
