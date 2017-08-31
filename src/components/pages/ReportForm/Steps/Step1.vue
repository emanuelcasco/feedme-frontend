<template lang="pug">
v-container(fluid)
  v-layout(row wrap)
    label.step__label 
      | {{ $t('step1.name') }}
  v-layout(row wrap)
    v-flex(xs12)
      v-text-field(
        name="name", 
        v-model="owner.name",
        type="text",
        v-validate="'required'", 
        :placeholder="$t('step1.holderName')"
      )
      span.step__errorMsg(v-show="errors.first('name')") 
        | {{ errors.first('name') }}
  v-layout(row wrap)
    label.step__label 
      | {{ $t('step1.mail') }}
  v-layout(row wrap)
    v-flex(xs12)
      v-text-field(
        name="mail", 
        v-model="owner.mail",
        type="email",
        v-validate="'required|email'", 
        :placeholder="$t('step1.holderMail')"
      )
    v-flex(xs12)
      span.step__errorMsg(v-show="errors.first('mail') && showError") 
        | {{ errors.first('mail') }} 
  v-btn(primary, round, @click="nextStep") 
    | {{ $t('buttons.next') }}
</template>

<script>
export default {
  data () {
    return {
      owner: {
        name: '',
        mail: ''
      },
      showError: false
    }
  },
  methods: {
    nextStep () {
      this.$validator.validateAll().then(ok => {
        this.showError = false
        if (ok) {
          this.$store.dispatch('updateOwner', this.owner)
          this.$bus.$emit('changeStep', 2)
        } else {
          this.showError = true
        }
      })
    }
  }
}
</script>
