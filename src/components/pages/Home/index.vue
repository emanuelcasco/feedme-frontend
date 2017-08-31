<template lang="pug">
v-container(fluid)
  v-layout
    v-flex(xs8 offset-xs2)
      h1 
        | Bienvenido a FeedMe
      h3 
        | Ahora podes brindarnos feedback de manera rápida y sencilla.
      h6 
        | No necesitas iniciar sesión, ingresa a la URL que se fue administrada y comenza a disfrutar de la experiencia FeedMe.
      h6 
        | O ingresa el código de la URL aca para ser redirigido.
  v-layout
    v-flex(xs8 offset-xs2)
      v-text-field.text-xs-center(
        name="code", 
        v-model="code",
        type="text",
        v-validate="'required'"
      )
      span.step__errorMsg(v-if="errorMsg") 
        | {{ errorMsg.items[0].msg }}
      div
        v-btn(principal dark, @click="searchByCode") 
          | Buscar
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      code: '',
      errorMsg: null
    }
  },
  methods: {
    searchByCode () {
      this.$validator.validateAll().then(res => {
        this.errorMsg = this.errors
        if (res) {
          this.$router.push(`/report/${this.code}`)
        }
      })
    }
  }
}
</script>
