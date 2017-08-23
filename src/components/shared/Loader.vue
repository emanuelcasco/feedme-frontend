<template lang="pug">
  .loader
</template>

<style lang="scss" scoped>

.loader {
  border-radius: 50%;
  border-top: 10px solid #00A1DF;
  border-right: 10px solid #EEEEEE;
  border-bottom: 10px solid #C4D600;
  border-left: 10px solid #EEEEEE;
  width: 50px;
  height: 50px;
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

</style>
