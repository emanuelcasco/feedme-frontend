<template lang="pug">
.issueList
  v-list(two-line)
    h5.text-xs-left
      | {{ $t('issueList.issues') }}
    v-list-tile(v-for='issue, index  in report.issues', v-bind:key='index ')
      v-list-tile-content
        v-list-tile-title 
          b
            | Nº {{ index + 1 }}
        v-list-tile-sub-title.grey--text.text--darken-4
          | <b>{{ $t('type') }}: </b> {{ types[issue.type - 1] }}
          | <b>{{ $t('priority') }}: </b> {{ priorities[issue.priority - 1] }}
          | <b>{{ $t('criticity') }}: </b> {{ criticities[issue.criticity - 1] }} 
        v-list-tile-sub-title {{ issue.desc | elipsis }}
      v-list-tile-action
        v-icon(@click="editIssue(issue)").blue--text.text--lighten-1 edit
        v-icon(@click="removeIssue(issue)").red--text.text--lighten-1 delete
      v-divider(v-if='index  + 1 < report.issues.length')
    p(v-if="report.issues.length === 0")
      | {{ $t('issueList.errorMsg') }}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      priorities: [
        this.$t('level.low'),
        this.$t('level.medium'),
        this.$t('level.high')
      ],
      criticities: [
        this.$t('level.minimum'),
        this.$t('level.medium'),
        this.$t('level.maximum')
      ],
      types: [
        this.$t('types.error'),
        this.$t('types.upgrade')
      ]
    }
  },
  computed: {
    ...mapGetters({
      report: 'report',
      issue: 'issue'
    })
  },
  methods: {
    editIssue (issue) {
      const index = this.report.issues.indexOf(issue)
      this.$bus.$emit('changeStep', 2)
      this.$store.dispatch('removeIssue', index)
      this.$store.dispatch('updateIssue', issue)
    },
    removeIssue (issue) {
      const index = this.report.issues.indexOf(issue)
      this.$store.dispatch('removeIssue', index)
    }
  },
  filters: {
    elipsis (value) {
      if (value.length >= 50) {
        return `${value.slice(0, 50)}...`
      } else {
        return value
      }
    }
  }
}
</script>
