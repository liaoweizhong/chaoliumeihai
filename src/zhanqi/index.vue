<template>
  <div>
      <!-- 资源加载load -->
      <load-resources></load-resources>
  </div>
</template>

<script>
import loadResources from './plugin/loadResources'
import data from './json/data'
export default {
    name : "zq",
    components :{
        loadResources
    },
    data (){
        return {
            data : data
        }
    }
}
</script>

<style>

</style>