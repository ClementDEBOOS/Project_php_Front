<template>
  <span id="logo">
     <img id="logo-img" src="../assets/logo_cesi.jpg"/>
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
  max-height: 150px;
}

#logo-img{
  vertical-align:middle;
  width: 80%;
  max-height: 140px;
  padding: 10px;
}

@media only screen and (max-width: 959px){
  #logo{
    line-height: none;
    max-height: 100%;
  }

  #logo-img{
    vertical-align:middle;
    width: 100px;
    padding: 10px;
  }
}
</style>
