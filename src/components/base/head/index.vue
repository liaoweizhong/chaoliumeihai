<template>
    <div class='head'>
        <div class='top1'>
            <div class='top1_right'>
                请登录
            </div>
        </div>
        <!-- 网站标签 -->
        <div class='top2'>
            <div>
                <img class='shouye' :src='require("@/assets/images/head/head.png")' />
            </div>
            <div class='active'>最新</div>
            <div>美图</div>
            <div>音乐</div>
            <div>番剧</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .head {
        border-top: solid 1px #F88C00;
        border-bottom: solid 3px #F88C00;
    }
    .top1 {
        border-top: solid 1px #ffffff;
        display:flex;
        justify-content: flex-end;
        background: #ffffff;
    }
    .top1_right {
        
    }
    .top2 {
        display: flex;
        background: #000000;
        color: #8e8e8e;
        font-size: 12px;
    }
    .shouye {
        width: 28px;
    }
    .top2 > div {
        padding: 4px 14px;
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: 0.25s;
    }
    .top2 > div:hover,.top2 > div.active {
        background: #f88c00;
        color: #fff;
    }
</style>