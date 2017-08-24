<template lang="pug">
v-container
  label.label Describa el error encontrado
  v-layout(row)
    v-flex(xs12)
      v-text-field(
        name='desc', 
        label='Descripción', 
        v-model="issue.desc", 
        textarea
        v-validate="'required'",
        counter, max="250"
      )
      span.span.error-msg(v-show="errors.first('desc')") {{ errors.first('desc') }}
  v-layout(row)
    v-flex(xs12, sm6)
      label.label Prioridad
      v-select(
        label="Mínima",
        name="priority",
        segmented,
        v-bind:items="items"
        v-model="issue.priority"
      )
    v-flex(xs12, sm6)
      label.label Criticidad
      v-select(
        label="Mínima"
        name="criticity",
        segmented,
        v-bind:items="items",
        v-model="issue.criticity"
      )
        
  v-layout(row)
    v-flex(xs12).text-xs-center
      v-btn(secondary, round, small, class="white--text", @click="addIssue")
        | Agregar
  v-layout(row)
    v-container
      issue-list
  span.span.error-msg(v-show="errorMsg.length > 0", v-for="e in errorMsg") 
    | {{ e }}
  v-btn(primary, round, @click='next') Continue
  v-btn(round, outline, @click='back') Atras
</template>

<script>
import { mapGetters } from 'vuex'

import IssueList from './components/IssueList'

export default {
  components: { IssueList },
  data () {
    return {
      errorMsg: [],
      items: [
        { text: 'Minima', value: '1' },
        { text: 'Media', value: '2' },
        { text: 'Maxima', value: '3' }
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
    addIssue () {
      this.$validator.validateAll().then(res => {
        if (res) {
          this.$store.dispatch('addIssue', this.issue)
          this.$store.dispatch('clearIssue')
        }
      })
    },
    next () {
      if (this.report.issues.length > 0) {
        this.$bus.$emit('forward')
      } else {
        this.errorMsg = []
        this.$validator.validateAll()
        this.errorMsg.push('Por favor, ingrese por lo menos un error para poder continuar')
      }
    },
    back () {
      this.$bus.$emit('backward')
    }
  }
}
</script>
