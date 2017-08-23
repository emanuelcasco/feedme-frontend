<template lang="pug">
.step1
  h3 {{ $t('step1.title') }}

  label {{ $t('step1.name') }}
  input(name="name", 
        v-model="owner.name",
        type="text", 
        v-validate="'required'", 
        placeholder="Joe Doe")
  span(v-show="errors.first('name')" class="help is-danger") {{ errors.first('name') }}

  label {{ $t('step1.mail') }}
  input(name="mail", 
        v-model="owner.mail",
        type="email",
        v-validate="'required|email'", 
        placeholder="joe.doe@wolox.com.ar")
  span(v-show="errors.first('mail')" class="help is-danger") {{ errors.first('mail') }}

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
  mounted () {
    this.$bus.$on('validateStep1', this.validate)
    this.$bus.$on('commitStep1', this.commit)
  },
  methods: {
    validate () {
      this.$validator.validateAll()
      this.$bus.$emit('errors-changed', this.errors)
    },
    commit () {
      this.$store.dispatch('updateOwner', this.owner)
    }
  }
}
</script>
