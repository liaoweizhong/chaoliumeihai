<template>
    <div class='main'>
        <div class='backgroundC'></div>
        <div class='bodyContent'>
            <comp-head></comp-head>
            <component :is='contentId'></component>
        </div>
    </div>
</template>

<script>
import compHead from '../head/index'
import compMain from '../main/index'
export default {
    components: {
        compHead,
        compMain
    },
    data (){
        return {
            contentId: "compMain"
        }
    }
}
</script>

<style>
    .main .backgroundC {
        background-image: url(https://ae01.alicdn.com/kf/HTB18ehESIfpK1RjSZFOq6y6nFXaf.jpg) !important;
        /* background-image: url(~@/assets/images/bg.jpg) !important; */
        position: fixed;
        background-repeat: no-repeat;
        top: 0;
        left: 0;
        z-index: 0;
        overflow: hidden;
        width: 100%;
        height: 100%;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        opacity: 0.85;
    }

    .main {
        max-width: 1000px;
        margin:auto;
        background: #ffffff59;
    }

    .bodyContent {
        position:relative;
    }
</style>