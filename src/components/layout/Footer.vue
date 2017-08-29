<template lang="pug">
  v-footer.text-xs-center
    v-spacer
      | © {{ new Date().getFullYear() }} - Made with 
      b.red--text ❤ 
      | by 
      a(href="https://www.wolox.com.ar/")
        | WOLOX
</template>

<style lang="scss" scoped>
.footer {
  background-color: #363636;
  color: whitesmoke;
  a {
    color: whitesmoke;
    text-decoration: none;
  }
}
</style>

