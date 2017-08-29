<template lang="pug">
.step3.reportDetail
  v-container
    h4 
      | {{ report.owner.name }}
    span 
      | {{ report.owner.mail }}
  v-layout(row)
    v-container
      issue-list.issueList
  v-layout(row)
    v-container
      span.span.error-msg(v-if="errorMsg") 
        | {{ errorMsg }}
  v-btn(primary, round, @click="onComplete")
    | {{ $t('buttons.finish') }}
  v-btn(round, @click='backStep')
    | {{ $t('buttons.back') }}
</template>

<script>
import reportService from '@/api/report'

import { mapGetters } from 'vuex'

import IssueList from './components/IssueList'

export default {
  data () {
    return {
      errorMsg: null
    }
  },
  components: { IssueList },
  computed: {
    ...mapGetters({
      report: 'report'
    })
  },
  methods: {
    onComplete () {
      reportService.createReport(this.report)
        .then(response => {
          this.$router.push('/sent')
        })
        .catch(() => {
          this.errorMsg = this.$t('step3.errorMsg')
        })
    },
    backStep () {
      this.$bus.$emit('changeStep', 2)
    }
  }
}
</script>
