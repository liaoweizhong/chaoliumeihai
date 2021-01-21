<template>
    <div>
         <Swiper ref="swiper" v-if="list.length > 0" :autoPlay='true' :showIndicator='true' interval="2500" duration="500">
            <Slide @click="clickMe" v-for="(tag,key) in list" :key="key">
                <img :src="tag.img" />
            </Slide>
       </Swiper>
       <!-- <div><button @click="preve">上一张</button></div>
       <div><button @click="next">下一张</button></div> -->
   </div>
</template>
 
<script>
    import { Swiper, Slide } from 'vue-swiper-component';
    export default {
        data() {
            return {
                list: [
                    { img: 'https://qiniu.epipe.cn/5456575529551388672?imageslim&imageView2/1/w/750/h/360' },
                    { img: 'https://qiniu.epipe.cn/5430983074181545984?imageslim&imageView2/1/w/750/h/360' },
                    { img: 'https://qiniu.epipe.cn/5464226412548325376?imageslim&imageView2/1/w/750/h/360' }
                ]
            }
        },
        components: {
                    Swiper,
                    Slide
                },
        methods: {
            clickMe (index){
                    console.log(index)
            },
            preve(){
                this.$refs.swiper.prevSlide();
            },
            next(){
                this.$refs.swiper.nextSlide();
            }
             
        }
    }
 
     
</script>
 
<style scoped>
  img {
      width: 100%;
      height: 200px;
  }
 
.button {
    margin-top: 30px;
    position: relative;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-left: 14px;
    padding-right: 14px;
    box-sizing: border-box;
    font-size: 18px;
    text-align: center;
    text-decoration: none;
    color: #ffffff;
    line-height: 2.33333333;
    border-radius: 5px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    overflow: hidden;
    border-width: 0;
    width: 50%;
    padding: 0 30px 0 30px;
    outline: 0;
    -webkit-appearance: none;
    background-color: #26a2ff;
}
 
.button:active {
    opacity: 0.5;
    color: #333;
}
 
.button2 {
    margin-top: 100px;
}
</style>