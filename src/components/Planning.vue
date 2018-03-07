<template>
  <div class="padding-5">
    <div id="planning">
      <div class="planning-content">
        <img src="static/img/planning.PNG" />
      </div>
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

<style scoped>
  #planning{
    max-height: 910px;
    height:910px;
  }

  .planning-content{
    text-align: center;
    height: 100%;
    background: white;
  }

  .planning-content img{
    height:100%;
  }
</style>
