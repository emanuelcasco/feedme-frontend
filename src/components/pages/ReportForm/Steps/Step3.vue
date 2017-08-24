<template lang="pug">
.step3
  .ownerDetail
    h4 Nombre: {{ report.owner.name }}
    span Mail: {{ report.owner.mail }}
  issue-list
</template>

<script>
import { mapGetters } from 'vuex'

import IssueList from './components/IssueList'

export default {
  components: { IssueList },
  computed: {
    ...mapGetters({
      report: 'report'
    })
  }
}
</script>
