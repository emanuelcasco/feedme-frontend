<template lang="pug">
.step3
  h3 Muchas gracias, confirma el reporte para finalizar
  .ownerDetail
    h4 Nombre: {{ report.owner.name }}
    span Mail: {{ report.owner.mail }}
  .issueList(v-if="report.issues.length > 0")
    h4 Issues cargados
    .issueDetail(v-for="i in report.issues")

      p {{ i.desc }}
      p 
        b Prioridad
        | {{ i.priority }}
      p 
        b Criticidad
        | {{ i.criticity }}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      report: 'report'
    })
  }
}
</script>
