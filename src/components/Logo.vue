<template>
  <span id="logo" class="padding-5">
     <img id="logo-img" src="../assets/cesi.png"/>
  </span>
</template>

<script>

export default {
  name: 'Logo'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#logo{
  background-color:white;
  text-align: center;
  line-height:150px;
  padding:10px;
  height: 150px;
}

#logo-img{
  vertical-align:middle;
  width: 80%;
  max-height: 140px;
  padding: 10px;
}
</style>
