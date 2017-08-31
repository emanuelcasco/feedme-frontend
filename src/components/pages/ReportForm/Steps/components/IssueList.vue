<template lang="pug">
v-list(three-line)
  h5.text-xs-left
    | {{ $t('issueList.issues') }}
  v-expansion-panel.issueList__panel
    v-expansion-panel-content.issueList__li(v-for='issue, index  in report.issues', v-bind:key='index')
      div(slot='header') 
        v-icon(@click="editIssue(index, issue)").indigo--text edit
        v-icon(@click="removeIssue(index)").red--text delete
        b 
          | Nº {{ index + 1 }}: 
        | {{ issue.desc | elipsis }}
      v-card
        v-card-text.grey.lighten-3
          | {{ issue.desc }}
          div
            v-chip(outline)
              b 
                | {{ types[issue.type - 1] }}
            v-chip(outline)
              b
                | {{ $t('priority') }} {{ priorities[issue.priority - 1] }}
            v-chip(outline)
              b 
                | {{ $t('criticity') }} {{ criticities[issue.criticity - 1] }}
    p(v-if="report.issues.length === 0")
      | {{ $t('issueList.errorMsg') }}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      dialog: false,
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
    editIssue (index, issue) {
      this.$bus.$emit('changeStep', 2)
      this.$store.dispatch('removeIssue', index)
      this.$store.dispatch('updateIssue', issue)
    },
    removeIssue (index) {
      this.$store.dispatch('removeIssue', index)
      if (this.report.issues.length === 0) {
        this.$bus.$emit('changeStep', 2)
      }
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
