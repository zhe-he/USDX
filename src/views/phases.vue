<template>
    <div class="phases" :class="'active'+cur">
        <div class="phases-top">
            <p><i class="icon iconfont icon-PHASES"></i></p>
            <ul :class="'active'+cur">
                <li :class="cur==0?'active':''" @click="cur=0">Phase 1<br/>Genesis Phase</li>
                <li :class="cur==1?'active':''" @click="cur=1">Phase 2<br/>Stable Phase</li>
                <li :class="cur==2?'active':''" @click="cur=2">Transition<br/>Pegging Day</li>
                <li :class="cur==0?'active':''" @click="cur=0">Phase 1<br/>Genesis Phase</li>
                <li :class="cur==1?'active':''" @click="cur=1">Phase 2<br/>Stable Phase</li>
                <li :class="cur==2?'active':''" @click="cur=2">Transition<br/>Pegging Day</li>
            </ul>
        </div>
        <div class="phases-main">
            <div class="phases-l">
                <div v-show="cur==index" v-for="(item,index) in phases">
                    <h4 class="h4Titlte" v-html="item.h4"></h4>
                    <p class="phaseContent" v-html="item.p"></p>
                    <!--<i class="phases-font icon iconfont"
                        :class="{'icon-one_big':cur==0,'icon-two_big':cur==1,'icon-three_big':cur==2}"></i>-->
                </div>
            </div>
            <div class="phases-r">
                <transition name="fade">
                    <div v-show="cur==0" class="phase-line">
                        <img src="images/phases/line1.png" alt="">
                    </div>
                </transition>
                <transition name="fade">
                    <div v-show="cur==1" class="phase-line">
                        <img src="images/phases/line2.png" alt="">
                    </div>
                </transition>
                <transition name="fade">
                    <div v-show="cur==2" class="phase-line">
                        <img src="images/phases/line3.png" alt="">
                    </div>
                </transition>
                <img style="opacity:0" src="images/phases/line3.png" alt="">
                <!-- <div class="phases-tianping">
                    <img src="images/phases/tianping_base.png" alt="">
                </div>
                <div class="phases-tianping-main">
                    <div class="phases-tianping-main-line">
                        <img src="images/phases/line.png" alt="">
                    </div>
                    <div class="phases-tianping-main-l">
                        <img src="images/phases/tianping_tuopan.png" alt="">
                        <span v-show="cur!=1">
                            <img src="images/phases/1-5.png" alt="">
                        </span>
                        <i v-show="cur==1">
                            <img src="images/phases/1-5.png" alt="">
                            <img src="images/phases/1-5.png" alt="">
                            <img src="images/phases/1-5.png" alt="">
                        </i>
                    </div>
                    <div class="phases-tianping-main-r">
                        <img src="images/phases/tianping_tuopan.png" alt="">
                        <span v-show="cur!=1">
                            <img src="images/phases/1-6.png" alt="">
                        </span>
                        <i v-show="cur==1">
                            <img src="images/phases/1-6.png" alt="">
                            <img src="images/phases/1-6.png" alt="">
                            <img src="images/phases/1-6.png" alt="">
                        </i>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import phasesData from '../data/home';

    export default {
        data() {
            return {
                cur: 0,
                phases: phasesData.phases
            }
        },

    }
</script>

<style lang="scss">
    .phases{
        overflow: hidden;
        img{
            display: block;
            width: 100%;
        }
        transition: 0.6s;
        background: #181a1d url('../../images/phases/bg.png') no-repeat 0% 90%;
        background-size: 300%;

        &.active0{
            background-position-x: 0%;
        }
        &.active1{
            background-position-x: 33.33%;
        }
        &.active2{
            background-position-x: 66.66%;
        }
    }
    .phases-top{
        
        > ul{
            position: relative;
            margin: -270px auto 0;
            width: 300px;
            height: 300px;
            border: 1px solid #fff;
            border-radius: 50%;
            transform-origin: center center;
            transition: 0.6s;
            
            &.active0{
                transform: rotate(120deg);
            }
            &.active1{
                transform: rotate(180deg);
            }
            &.active2{
                transform: rotate(240deg);
            }

            li{
                position: absolute;
                top: 300px;
                left: 0;
                width: 100%;
                transform-origin: 150px -150px;
                text-align: center;
                cursor: pointer;
                opacity: 0.6;
                line-height: 1.2;
                font-size: 16px;
                @for $i from 1 to 7 {
                    &:nth-child(#{$i}){
                        transform: rotate(#{($i/1+1)*-60}deg);
                    }
                }
                &:active,&:hover,&.active{
                    opacity: 1;
                    text-decoration: underline;
                    &:before{
                        background-color: #04e0e0;
                    }
                }
                &:before{
                    content: "";
                    position: absolute;
                    top: -15px;
                    left: 50%;
                    width: 6px;
                    height: 6px;
                    background-color: #fff;
                    border-radius: 50%;
                }
            }
        }
        > p{
            text-align: center;
            font-size: 40px;
            line-height: 2;
        }
    }

    .phases-main{
        display: flex;
        align-item: center;
        justify-content: center;
        padding: 15% 10% 20%;
    }
    .phases-l{
        position: relative;
        flex: 1;
        padding: 0 10%;
        line-height: 1.5;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .phases-font{
            position: absolute;
            left: 15%;
            bottom: 0;
            font-size: 200px;
            font-weight: normal;
            line-height: 1;
            opacity: 0.1;
        }
        .icon-one{font-size: 190px;}
        .icon-two_big{font-size: 230px;}
        .icon-two_three{font-size: 230px;}
    }
    
    .phases-r{
        position: relative;
        width: 30%;
        // width: 330px; 
    }
    .phase-line{
        position: absolute;
        top: 0;
        left: 0;
    }

    .fade-enter-active,.fade-leave-active{
        transition: opacity 0.6s ease-out;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .h4Titlte{font-size: 34px;font-weight: normal;}
    .phaseContent{font-size:16px; line-height: 22px;}
    /*
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
    }
    .phases-tianping-main-line{
        position: absolute;
        top: 3%;
        left: 20%;
        width: 60%;
        transform-origin: 50% 50%;
        animation: tianping1 3s linear infinite;
        
    }
    .phases-tianping-main-l,
    .phases-tianping-main-r{
        position: absolute;
        left: 0;
        top: 0;
        width: 41.5%;
        span{
            position: absolute;
            width: 40%;
            bottom: 6%;
            left: 30%;
        }
        i{
            position: absolute;
            width: 40%;
            bottom: 6%;
            left: 30%;
            img{
                float: left;
                width: 50%;
                &:nth-child(1){
                    margin-left: 25%;
                }
            }
        }
    }
    .phases-tianping-main-l{
        animation: tianping2 3s linear infinite;
    }
    .phases-tianping-main-r{
        left: auto;
        right: 0;
        animation: tianping3 3s linear infinite;
    }
    .icon-PHASES{font-size: 30px;}
    .h4Titlte{font-size: 33px;font-weight: normal;}
    .phaseContent{font-size: 14px;
        color: #fff;
        line-height: 20px;
        margin-top: 16px;
        width: 390px;
    }
    @keyframes tianping1{
        0%{
            transform: rotate(0deg);
        }
        25%{
            transform: rotate(-10deg);
        }
        50%{
            transform: rotate(0deg);
        }
        75%{
            transform: rotate(10deg);
        }
        100%{
            transform: rotate(0deg);
        }
    }
    @keyframes tianping2{
        0%{
            margin-top: 0%;
        }
        25%{
            margin-top: 4%;
        }
        50%{
            margin-top: 0%;
        }
        75%{
            margin-top: -4%;
        }
        100%{
            margin-top: 0%;
        }
    }
    @keyframes tianping3{
        0%{
            margin-top: 0%;
        }
        25%{
            margin-top: -4%;
        }
        50%{
            margin-top: 0%;
        }
        75%{
            margin-top: 4%;
        }
        100%{
            margin-top: 0%;
        }
    }*/
</style>