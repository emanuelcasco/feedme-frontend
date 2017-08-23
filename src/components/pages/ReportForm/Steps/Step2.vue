<template lang="pug">
.step2
  h3 {{ $t('step2.title') }}

  label Describa el error encontrado
  textarea(name="desc", 
        v-model="issue.desc")

  label Prioridad
  select(name="priority", v-model="issue.priority")
    option(value=1) BAJA
    option(value=2) MEDIA
    option(value=3) ALTA

  label Criticidad
  select(name="criticity", v-model="issue.criticity")
    option(value=1) BAJA
    option(value=2) MEDIA
    option(value=3) ALTA

  button(@click="addIssue") Agregar

  .issueList(v-if="report.issues.length > 0")
    h3 Issues cargados
    hr
    .issueDetail(v-for="i in report.issues")

      p {{ i.desc }}
      p 
        b Prioridad
        | {{ i.priority }}
      p 
        b Criticidad
        | {{ i.criticity }}
      ul
        a(href='#', @click="editIssue(i)") Editar
        a(href='#', @click="removeIssue(i)") Eliminar
      hr
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      report: 'report',
      issue: 'issue'
    })
  },
  mounted () {
    this.$bus.$on('validateStep2', this.validate)
  },
  methods: {
    validate () {
      if (this.report.issues.length > 0) {
        this.errors.items = []
      } else {
        this.errors.items.push({ msg: 'Complete the fields' })
      }
      this.$bus.$emit('errors-changed', this.errors)
    },
    addIssue () {
      this.$store.dispatch('addIssue', this.issue)
      this.$store.dispatch('clearIssue')
      this.validate()
    },
    editIssue (issue) {
      const index = this.report.issues.indexOf(issue)
      this.$store.dispatch('removeIssue', index)
      this.$store.dispatch('updateIssue', issue)
    },
    removeIssue (issue) {
      const index = this.report.issues.indexOf(issue)
      this.$store.dispatch('removeIssue', index)
    }
  }
}
</script>
