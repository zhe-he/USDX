<template>
    <div class="phases" :class="'active'+cur">
        <div class="phases-top">
            <p>PHASES</p>
            <ul :class="'active'+cur">
                <li :class="cur==0?'active':''" @click="cur=0">11111111</li>
                <li :class="cur==1?'active':''" @click="cur=1">22222222</li>
                <li :class="cur==2?'active':''" @click="cur=2">33333333</li>
                <li :class="cur==0?'active':''" @click="cur=0">11111111</li>
                <li :class="cur==1?'active':''" @click="cur=1">22222222</li>
                <li :class="cur==2?'active':''" @click="cur=2">33333333</li>
            </ul>
        </div>
        <div class="phases-main">
            <div class="phases-l">
                <div v-show="cur==index" v-for="(item,index) in phases">
                    <h4 v-html="item.h4"></h4>
                    <p v-html="item.p"></p>
                </div>
            </div>
            <div class="phases-r">
                <div class="phases-tianping">
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
                </div>
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
        background: #181a1d url('../../images/phases/bg.png') no-repeat 0% bottom;
        background-size: 300%;

        &.active0{
            background-position: 0% bottom;
        }
        &.active1{
            background-position: 33.33% bottom;
        }
        &.active2{
            background-position: 66.66% bottom;
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
                @for $i from 1 to 7 {
                    &:nth-child(#{$i}){
                        transform: rotate(#{($i/1+1)*-60}deg);
                    }
                }
                &:active,&:hover,&.active{
                    opacity: 1;
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
        padding: 0 10% 10%;
    }
    .phases-l{
        flex: 1;
        padding: 0 10%;
        line-height: 1.5;
        display: flex;
        flex-direction: column;
        justify-content: center;
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
    }
</style>