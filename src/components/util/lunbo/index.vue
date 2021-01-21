<template>
    <div>
        <div v-for='(it ,i) in imgs' :key='i'>
            <img :src='it.path' />
            <div>
                {{it.title}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imgs: {
            type: Array,
            default: []
        }
    },
    data (){
        return {
            
        }
    }
}
</script>

<style>

</style>