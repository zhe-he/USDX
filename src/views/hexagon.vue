<template>
    <div class="hexagon-box">
        <i class="icon iconfont icon-adivsor"></i>
        <div class="hexagon-title">
            <!--<i class="icon iconfont icon-adivsor"></i>-->
            <span>ADVISORS</span>
            <div class="line"></div>
            <h4 v-html="hexagon[cur].title">{{hexagon[cur].title}}</h4>
            <p v-html="hexagon[cur].content"></p>
        </div>
        <ul class="hexagon">
            <li :class="cur==index?'active':''" @click="showItem(item,index)" @mouseover="showItem(item,index)" v-for="(item,index) in hexagon">
                <div v-if="item.img"><img :src="item.img" alt=""></div>
                <!-- <div v-else><i class="icon520 icon iconfont icon-hexagon"></i></div> -->
            </li>
        </ul>
    </div>
</template>

<script type="text/javascript">
    import hexagonData from '../data/hexagon';
    export default {
        data(){
            return {
                cur: 6,
                hexagon: hexagonData.data
            }
        },
        methods: {
            showItem(item,index) {
                if (item.title) {
                    this.cur = index;
                }
            }
        }
    }
</script>


<style lang="scss">
    .hexagon-box{
        position: relative;
        width: 960px;
        margin: 0 auto;
        .icon-adivsor{
            float:left;
            color: #fff;
            font-weight: normal;
            position: absolute;
            left: -180px;
            font-size: 100px;
            opacity: .01;
            font-weight: 400;
            top:60px;

        }
    }
    .icon520{
        font-size: 520%;
        line-height: 1;
        top: 0;
        left: 0;
    }
    .hexagon-box{
        display: flex;
        > ul{
            flex: 1;
            
        }
    }
    .hexagon-title{
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #fff;
        //padding: 0 50px;
        width: 490px;
        padding-right: 52px;
        span{
            font-size: 50px;
            font-weight: 600;
        }
        h3{
            margin-top: -30%;
            font-size: 32px;
        }
        h4{
            font-size: 28px;
            font-weight: normal;
            margin-bottom: 14px;
        }
        p{
            height: 54px;
            font-size: 16px;
            text-align: justify;
            color: #999999;
            line-height: 22px;
        }
        .line{
            height: 2px;
            width: 64px;
            background-color: #267474;
            margin: 30px 0;
            margin-top: 24px;
        }
    }

    .hexagon{
        overflow:hidden;
        //padding-right: 5%;
        padding-right: 14px;
        li{
            position:relative;
            width: 23%;
            padding-bottom: 27%;

            float:left;
            overflow:hidden;
            visibility:hidden;
            transform: rotate(-60deg) skewY(30deg) scale(1,1);
            opacity: 0.4;
            transition: 0.6s;
            cursor: pointer;
            
            &:nth-child(4n+2),&:nth-child(4n+3){

            }


            &:nth-child(8n),&:nth-child(8n+5), &:nth-child(8n+6), &:nth-child(8n+7) {
                margin-top: -7%;
                margin-bottom: -7%;
                transform: translateX(50%) rotate(-60deg) skewY(30deg);

                &::last-child{
                    margin-bottom: 0%;
                }
            }
            *{
                position:absolute;
                visibility:visible;
            }
            > div{
                width:100%;
                height:100%;
                text-align:center;
                color: #fff;
                overflow: hidden;
                transform: skewY(-30deg) rotate(60deg);
                -webkit-backface-visibility:hidden;
            }
            img{
                left:-100%; 
                right:-100%;
                width: auto; 
                height:100%;
                margin:0 auto;  
            }
            &:hover,&.active{
                opacity: 1;
            }
        }
    }

    @media screen and (max-width: 720px) {
        .hexagon-box{
            box-sizing: border-box;
            padding: 0 10px;
            .hexagon-title{
                padding: 0 24px;
                width: 312px;
            }
        }
        .hexagon{
            padding-right: 14px;
        }
        .hexagon-title{
            span{
                font-size: 24px;

            }
        }

    }


</style>