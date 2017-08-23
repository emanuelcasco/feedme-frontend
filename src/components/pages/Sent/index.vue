<template lang="pug">
.end
  h3 {{ $t('sent.thanks', { name: report.owner.name }) }}
  
  button(@click="clear") {{ $t('sent.finish') }}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      report: 'report'
    })
  },
  beforeMount () {
    if (this.report.owner.name === '') {
      this.$router.push('/')
    }
  },
  methods: {
    clear () {
      this.$store.dispatch('clearIssue')
      this.$store.dispatch('clearReport')
      this.$router.push('/')
    }
  }
}
</script>

