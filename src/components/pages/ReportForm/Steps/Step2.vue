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
  span.span.error-msg(v-if="errorMsg") 
    | {{ errorMsg }}
  v-btn(primary, round, @click='nextStep') Continue
  v-btn(round, outline, @click='backStep') Atras
</template>

<script>
import { mapGetters } from 'vuex'

import IssueList from './components/IssueList'

export default {
  components: { IssueList },
  data () {
    return {
      errorMsg: null,
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
      this.errorMsg = null
      this.$validator.validateAll().then(res => {
        if (res) {
          this.$store.dispatch('addIssue', this.issue)
          this.$store.dispatch('clearIssue')
        }
      })
    },
    nextStep () {
      this.errorMsg = null
      if (this.report.issues.length > 0) {
        this.$bus.$emit('changeStep', 3)
      } else {
        this.errorMsg = 'Por favor, ingrese por lo menos un error para poder continuar'
      }
    },
    backStep () {
      this.$bus.$emit('changeStep', 1)
    }
  }
}
</script>
