<template lang="pug">
v-list(two-line='')
  h5.text-xs-left
    | Incidencias
  v-list-tile(v-for='issue, index  in report.issues', v-bind:key='index ')
    v-list-tile-content
      v-list-tile-title Issue Nº {{ index + 1 }}
      v-list-tile-sub-title.grey--text.text--darken-4
        | <b>Prioridad:</b> {{ issue.priority  | stringify}}
        | <b>Criticidad:</b> {{ issue.criticity | stringify }} 
      v-list-tile-sub-title {{ issue.desc | elipsis }}
    v-list-tile-action
      v-icon(@click="editIssue(issue)").blue--text.text--lighten-1 edit
      v-icon(@click="removeIssue(issue)").red--text.text--lighten-1 delete
    v-divider(v-if='index  + 1 < report.issues.length')
  p(v-if="report.issues.length === 0")
    | No hay incidencias cargadas
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      headers: [
        { text: 'Descripción', value: 'desc' },
        { text: 'Prioridad', value: 'priority' },
        { text: 'Criticidad', value: 'criticity' }
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
      this.$bus.$emit('backward')
      this.$store.dispatch('removeIssue', index)
      this.$store.dispatch('updateIssue', issue)
    },
    removeIssue (issue) {
      const index = this.report.issues.indexOf(issue)
      this.$store.dispatch('removeIssue', index)
    }
  },
  filters: {
    stringify (value) {
      switch (value) {
        case '1':
          return 'Mínima'
        case '2':
          return 'Media'
        case '3':
          return 'Máxima'
        default:
          return '#Error'
      }
    },
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

