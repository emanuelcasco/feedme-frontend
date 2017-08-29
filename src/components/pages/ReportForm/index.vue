<template lang="pug">
  .issue
    loader(v-if="!project")
    v-stepper(v-model='step', vertical, v-else)
      v-container(fluid)
        h2
          | {{ $t('welcome') }}
        h3 
          | {{ $t('title', { project: project.name }) }}
        v-stepper-step(step='1', v-bind:complete='step > 1')
          | {{ $t('step1.title') }}
          small 
            | {{ $t('step1.subtitle') }}
        v-stepper-content(step='1')
          step1
        v-stepper-step(step='2', v-bind:complete='step > 2') 
          | {{ $t('step2.title') }}
          small 
            | {{ $t('step2.subtitle') }}
        v-stepper-content(step='2')
          step2
        v-stepper-step(step='3', v-bind:complete='step > 3') 
          | {{ $t('step3.title') }}
          small 
            | {{ $t('step3.subtitle') }}
        v-stepper-content(step='3')
          step3
</template>

<script>
import { mapGetters } from 'vuex'

import Step1 from './Steps/Step1'
import Step2 from './Steps/Step2'
import Step3 from './Steps/Step3'

export default {
  data () {
    return {
      step: 0
    }
  },
  props: ['hash'],
  computed: {
    ...mapGetters({
      project: 'project',
      projectNotFound: 'projectNotFound'
    })
  },
  created () {
    this.$store.dispatch('findProyect', this.hash)
  },
  mounted () {
    this.$bus.$on('changeStep', this.changeStep)
  },
  components: {
    Step1,
    Step2,
    Step3
  },
  methods: {
    changeStep (step) {
      this.step = step
    }
  },
  watch: {
    project () {
      const locale = this.project.locale
      this.$validator.setLocale(locale)
      this.$i18n.locale = locale
    },
    projectNotFound () {
      if (this.projectNotFound) this.$router.push(`/notFound`)
    }
  }
}
</script>

<style lang="scss">

.label {
  font-weight: bold;
}

.span {
  margin-top: -25px;
  margin-bottom: 20px;
  display: block;
}

.error-msg {
  color: red;
  font-style: italic;
}

@media (max-width: 900px) {
  .issue{
    margin-left: 5%;
    margin-right: 5%;
  }
}
@media (min-width: 900px) {
  .issue {
    margin-left: 15%;
    margin-right: 15%;
  }
}

</style>
