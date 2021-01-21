<template>
    <div>
        <!-- 输入框 -->
        <div class='inputBox'>
            <!-- 头像 -->
            <div class='flexSh'>
                <img class='inputBoxIcon' :src='require("@/assets/logo.png")' />
            </div>
            <!-- 输入框 -->
            <div style='width:100%;'>
                <textarea class='infoText'></textarea>
            </div>
            <!-- 发表评论 -->
            <div class='flexSh'>
                <div class='btnFaB'>发表评论</div>
            </div>
        </div>
        <!-- 评论列表 -->
        <div class='conmentList'>
            <div class='conmentBox'>
                <!-- 头像 -->
                <div class='conmentIcon'>
                    <img class='inputBoxIcon' :src='require("@/assets/logo.png")' />
                </div>
                <!-- 右边 -->
                <div class='conmentRight'>
                    <div class='conmentName'>
                        <span>原封可耐樱</span>
                    </div>
                    <div class='conmentText'>
                        <span>无职转生，我想这蓝毛女主（洛克希）将会是新的「差不多得了」P图素材[doge]</span>
                    </div>
                    <!-- 数据 -->
                    <div class='conmentDate'>
                        <span>2021-01-11</span>
                        <span>13:38:20</span>
                        <span>回复</span>
                    </div>
                    <!-- 回复列表 -->
                    <div class='conmentReplyList'>
                        <div class='conmentReply'>
                            <div class='conmentReplyHead'>
                                <img class='inputBoxIconSmall' :src='require("@/assets/logo.png")' />
                            </div>
                            <div class='conmentReplyBody'>
                                <div class='conmentReplyBodyText'>
                                    <span class=''>星落の露妮</span>
                                    <span class=''>看到那里我感觉很不爽，真的心疼男主老妈，他老爸的那些那些表现在我看来就是个渣男</span>
                                </div>
                                <div class='conmentReplyBodyDate'>
                                    <span>2021-01-11</span>
                                    <span>14:22:31</span>
                                    <span>回复</span>
                                </div>
                            </div>
                        </div>
                    </div>
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

    .conmentDate {
        display: flex;
    }
    .conmentDate > span {
        padding: 3px;
    }

    .inputBox {
        display: flex;
        border-bottom: solid 2px #3d5c77;
        border-bottom: solid 2px #3d5c77;
        margin-bottom: 15px;
    }
    .inputBoxIcon {
        width: 75px;
        height: 75px;
        border-radius: 50%;
        border: solid 3px #dea7ce;
        background: #f7f7f7;
        flex-shrink: 0;
    }
    .inputBoxIconSmall {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        border: solid 1px #dea7ce;
        padding: 2px;
    }
    .infoText {
        width: calc(100% - 50px);
        height: calc(100% - 40px);
        padding: 15px;
        margin-left: 10px;
        margin-top: 0px;
        border-radius: 4px;
        resize: none;
    }
    .btnFaB {
        padding: 15px;
        background: #3d5c77;
        border-radius: 4px;
        height: 45px;
        border: solid 1px #ffffff;
        color: #ffffff;
        font-size: 12px;
        line-height: 45px;
        cursor: pointer;
        transition: background 0.25s;
    }
    .btnFaB:hover {
        background: #0089ff;
    }
    .flexSh {
        flex-shrink: 0;
    }
    .conmentBox {
        display: flex;
    }
    .conmentReply {
        display: flex;
    }
    .conmentRight {
        margin-left: 10px;
    }

</style>