<template>
  <div id="planning" class="planning">
    <div class="content">
      <img src="static/img/planning.PNG" />
    </div>
    <div class="footer">
      <evenements></evenements>
      <logo></logo>
    </div>
  </div>
</template>

<script>
import Evenements from '@/components/Evenements'
import Logo from '@/components/Logo'

export default {
  name: 'Planning',
  components: {
    'evenements': Evenements,
    'logo': Logo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.planning{
  height: 930px;
  text-align: center;
}
.content{
  width:100%;
  height: 100%;
  background: #fff;
}
</style>
