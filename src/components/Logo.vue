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
  line-height:208px;
  padding:10px;
  height: 210px;
}

#logo-img{
  vertical-align:middle;
  width: 80%;
  max-height: 188px;
  padding: 10px;
}
</style>
