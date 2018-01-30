<template>
    <div class="phases">
        <div class="phases-top">
            <span @click="cur=0">left</span>
            <span @click="cur=1">center</span>
            <span @click="cur=2">right</span>
        </div>
        <div class="phases-main">
            <div class="phases-l"></div>
            <div class="phases-r">
                <div class="phases-tianping">
                    <img src="images/phases/tianping_base.png" alt="">
                </div>
                <div class="phases-tianping-main" :class="{'left':cur==0,'right':cur==2}">
                    <div class="phases-tianping-main-line">
                        <img src="images/phases/line.png" alt="">
                    </div>
                    <div class="phases-tianping-main-l">
                        <img src="images/phases/tianping_tuopan.png" alt="">
                    </div>
                    <div class="phases-tianping-main-r">
                        <img src="images/phases/tianping_tuopan.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        data() {
            return {
                cur: 1
            }
        },

    }
</script>

<style lang="scss">
    .phases{
        color: #fff;
        img{
            display: block;
            width: 100%;
        }
    }
    .phases-main{
        display: flex;
    }
    .phases-l{
        flex: 1;
    }
    .phases-r{
        position: relative;
        width: 30%;
        // width: 330px; 
    }
    .phases-tianping{
        width: 35%;
        margin: 0 auto;
    }
    .phases-tianping-main{
        position: absolute;
        top: 13.7%;
        left: 0;
        width: 100%;
        height: 100%;
        &.left{
            .phases-tianping-main-line{
                transform: rotate(-15deg);
            }
            .phases-tianping-main-l{
                margin-top: 8%;
            }
            .phases-tianping-main-r{
                margin-top: -8%;
            }
        }
        &.right{
            .phases-tianping-main-line{
                transform: rotate(15deg);
            }
            .phases-tianping-main-l{
                margin-top: -8%;
            }
            .phases-tianping-main-r{
                margin-top: 8%;
            }
        }
    }
    .phases-tianping-main-line{
        position: absolute;
        top: 3%;
        left: 20%;
        width: 60%;
        transform-origin: 50% 50%;
        transition: 0.7s ease-in-out;
        
    }
    .phases-tianping-main-l,
    .phases-tianping-main-r{
        position: absolute;
        left: 0;
        top: 0;
        width: 41.5%;
        transition: 0.7s ease-in-out;

    }
    .phases-tianping-main-r{
        left: auto;
        right: 0;
    }
</style>