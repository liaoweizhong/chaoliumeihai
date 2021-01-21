<template>
    <div>
        <!-- 第一栏 轮播公告 -->
        <comp-lunbo :imgs='paths'></comp-lunbo>
    </div>
</template>

<script>
import compLunbo from '../../util/lunbo/index'
export default {
    components: {
        compLunbo
    },
    data (){
        return {
            paths: [{
                path: require("@/assets/")
            }]
        }
    }
}
</script>

<style>

</style>