<template lang="pug">
  .issue
    .container(v-if="project")
      h2 {{ $t('title', { project: project.name }) }}

      form-wizard(@on-complete='onComplete', 
                  color='#00A1DF',
                  title="", subtitle="",
                  :back-button-text="$t('buttons.back')",
                  :next-button-text="$t('buttons.next')",
                  :finish-button-text="$t('buttons.finish')")

        tab-content(:title="$t('step1.title')", :before-change="validateStep1")
          step1

        tab-content(:title="$t('step2.title')", :before-change="validateStep2")
          step2

        tab-content(:title="$t('step3.title')")
          step3

    loader(v-else)
</template>

<script>
import { mapGetters } from 'vuex'

import reportService from '@/api/report'

import Step1 from './Steps/Step1'
import Step2 from './Steps/Step2'
import Step3 from './Steps/Step3'

export default {
  props: ['hash'],
  computed: {
    ...mapGetters({
      project: 'project',
      report: 'report'
    })
  },
  created () {
    this.$store.dispatch('findProyect', this.hash)
  },
  mounted () {
    this.$bus.$on('errors-changed', (newErrors) => {
      this.errorList = newErrors.items
    })
  },
  components: {
    Step1,
    Step2,
    Step3
  },
  methods: {
    validateStep1 () {
      this.$bus.$emit('validateStep1')
      if (this.errorList.length === 0) {
        this.$bus.$emit('commitStep1')
        return true
      } else {
        return false
      }
    },
    validateStep2 () {
      return (this.report.issues.length > 0)
    },
    onComplete () {
      reportService.create(this.report)
        .then(response => {
          console.log(response)
          this.$router.push('/sent')
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },
  watch: {
    project () {
      const locale = this.project.locale
      this.$validator.setLocale(locale)
      this.$i18n.locale = locale
    }
  }
}
</script>
