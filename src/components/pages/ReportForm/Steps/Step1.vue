<template lang="pug">
v-container(fluid).step1
  v-layout(row wrap)
    label.label {{ $t('step1.name') }}
  v-layout(row wrap)
    v-flex(xs12)
      v-text-field(
        name="name", 
        v-model="owner.name",
        type="text",
        v-validate="'required'", 
        placeholder="Joe Doe"
      )
      span.span.error-msg(v-show="errors.first('name')") {{ errors.first('name') }}
  v-layout(row wrap)
    label.label {{ $t('step1.mail') }}
  v-layout(row wrap)
    v-flex(xs12)
      v-text-field(
        name="mail", 
        v-model="owner.mail",
        type="email",
        v-validate="'required|email'", 
        placeholder="joe.doe@wolox.com.ar"
      )
    v-flex(xs12)
      span.span.error-msg(v-show="errors.first('mail')") {{ errors.first('mail') }}
  v-btn(primary, round, @click="nextStep") Continue
</template>

<script>
export default {
  data () {
    return {
      owner: {
        name: '',
        mail: ''
      }
    }
  },
  methods: {
    nextStep () {
      this.$validator.validateAll().then(ok => {
        if (ok) {
          this.$store.dispatch('updateOwner', this.owner)
          this.$bus.$emit('changeStep', 2)
        }
      })
    }
  }
}
</script>
