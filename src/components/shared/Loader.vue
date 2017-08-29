<template lang="pug">
  v-container(fluid)
    v-layout
        .loader
</template>

<style lang="scss" scoped>

.loader {
  border-radius: 50%;
  border-top: 10px solid #00A1DF;
  border-right: 10px solid #EEEEEE;
  border-bottom: 10px solid #C4D600;
  border-left: 10px solid #EEEEEE;
  margin: auto;
  width: 100px;
  height: 100px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

</style>
