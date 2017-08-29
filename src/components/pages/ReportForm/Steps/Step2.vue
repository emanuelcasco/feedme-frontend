<template lang="pug">
v-container
  v-layout(row)
    v-flex(xs12)
      label.label
        | {{ $t('step2.descLabel') }}
      v-text-field(
        name='desc', 
        v-model="issue.desc", 
        textarea
        v-validate="'required|min:30|max:500'",
        counter, max="500"
      )
      span.span.error-msg(v-show="errors.first('desc')") 
        | {{ errors.first('desc') }}
  v-layout(row)
    v-flex(xs12)
      label.label
        | {{ $t('type') }}
      v-select(
        label="$t('types.error')"
        name="type",
        segmented,
        v-bind:items="types"
        v-model="issue.type"
      )
  v-layout(row)
    v-flex(xs12, sm6)
      label.label
        | {{ $t('priority') }}
      v-select(
        label="$t('level.minimum')"
        name="priority",
        segmented,
        v-bind:items="priorities"
        v-model="issue.priority"
      )
    v-flex(xs12, sm6)
      label.label
        | {{ $t('criticity') }}
      v-select(
        label="$t('level.minimum')"
        name="criticity",
        segmented,
        v-bind:items="criticities",
        v-model="issue.criticity"
      )
  v-layout(row)
    v-flex(xs12).text-xs-center
      v-btn(secondary, round, small, class="white--text", @click="addIssue")
        | {{ $t('buttons.add') }}
  v-layout(row)
    v-container
      issue-list
  span.span.error-msg(v-if="errorMsg") 
    | {{ errorMsg }}
  v-layout(row)
    v-container
      v-btn(primary, round, @click='nextStep')
        | {{ $t('buttons.next') }}
      v-btn(round, outline, @click='backStep')
        | {{ $t('buttons.back') }}
</template>

<script>
import { mapGetters } from 'vuex'

import IssueList from './components/IssueList'

export default {
  components: { IssueList },
  data () {
    return {
      errorMsg: null,
      priorities: [
        { text: this.$t('level.low'), value: '1' },
        { text: this.$t('level.medium'), value: '2' },
        { text: this.$t('level.high'), value: '3' }
      ],
      criticities: [
        { text: this.$t('level.minimum'), value: '1' },
        { text: this.$t('level.medium'), value: '2' },
        { text: this.$t('level.maximum'), value: '3' }
      ],
      types: [
        { text: this.$t('types.error'), value: '1' },
        { text: this.$t('types.upgrade'), value: '2' }
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
        this.errorMsg = this.$t('step2.errorMsg')
      }
    },
    backStep () {
      this.$bus.$emit('changeStep', 1)
    }
  }
}
</script>
