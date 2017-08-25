<template lang="pug">
.step3.reportDetail
  v-container
    h4 
      | {{ report.owner.name }}
    span 
      | {{ report.owner.mail }}
  issue-list

  v-btn(primary, round, @click="onComplete")
    | Finalizar
  v-btn(round, @click='backStep')
    | Atras
</template>

<script>
import reportService from '@/api/report'

import { mapGetters } from 'vuex'

import IssueList from './components/IssueList'

export default {
  components: { IssueList },
  computed: {
    ...mapGetters({
      report: 'report'
    })
  },
  methods: {
    onComplete () {
      reportService.create(this.report)
        .then(response => {
          this.$router.push('/sent')
        })
    },
    backStep () {
      this.$bus.$emit('changeStep', 2)
    }
  }
}
</script>
