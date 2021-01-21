<template>
    <div class='listBox'>
        <div class='smallBoxName'>
            <span>ACG资源</span>
            <div class="stripe-line"></div>
        </div>
        <div class='smallBox'>
            <!-- 左侧的封面 -->
            <div class='smallBoxImg'>
                <img :src='require("@/assets/images/bg.jpg")' />
            </div>
            <!-- 右侧介绍位置 -->
            <div class='samllBoxRight'>
                <div class='samllBoxInfo'>
                    <span>【P站美图】我绝对是最最可爱的哟！《偶像大师 灰姑娘女孩》舆水幸子生日壁纸特辑</span>
                </div>
                <div class='time'>
                    <div><i class='el-icon-watch'></i> 2020年11月26日</div>
                </div>
            </div>
        </div>
        <div class='smallBox'>
            <!-- 左侧的封面 -->
            <div class='smallBoxImg'>
                <img :src='require("@/assets/images/bg.jpg")' />
            </div>
            <!-- 右侧介绍位置 -->
            <div class='samllBoxRight'>
                <div class='samllBoxInfo'>
                    <span>【P站美图】我绝对是最最可爱的哟！《偶像大师 灰姑娘女孩》舆水幸子生日壁纸特辑</span>
                </div>
                <div class='time'>
                    <div><i class='el-icon-watch'></i> 2020年11月26日</div>
                </div>
            </div>
        </div>
        <div class='smallBox'>
            <!-- 左侧的封面 -->
            <div class='smallBoxImg'>
                <img :src='require("@/assets/images/bg.jpg")' />
            </div>
            <!-- 右侧介绍位置 -->
            <div class='samllBoxRight'>
                <div class='samllBoxInfo'>
                    <span>【P站美图】我绝对是最最可爱的哟！《偶像大师 灰姑娘女孩》舆水幸子生日壁纸特辑</span>
                </div>
                <div class='time'>
                    <div><i class='el-icon-watch'></i> 2020年11月26日</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .listBox {
        background: #ffffff;
        border-radius: 4px;
        box-shadow: 0 0 3px #0000007a;
        padding: 12px;
        margin-bottom: 15px;
        border-bottom: solid 4px #f88c00;
    }
    .smallBoxImg {
        width:100px;
        height: 70px;
        border-radius: 4px;
        flex-shrink: 0;
    }

    .smallBoxImg img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
    }

    .smallBox {
        display: flex;
        border-bottom: solid 1px #eeeeee;
        padding: 10px 0;
    }

    .samllBoxInfo {
        height: 54px;
        font-size: 12px;
        line-height: 18px;
    }

    .samllBoxRight {
        font-size: 12px;
        padding: 0 12px;
    }

</style>