<template>
    <div class="hexagon-box">
        <div class="hexagon-title">
            <h3>ADVISORS</h3>
            <div class="line"></div>
            <h4>{{hexagon[cur].title}}</h4>
            <p v-html="hexagon[cur].content"></p>
        </div>
        <ul class="hexagon">
            <li :class="cur==index?'active':''" @click="showItem(item,index)" @mouseover="showItem(item,index)" v-for="(item,index) in hexagon">
                <div v-if="item.img"><img :src="item.img" alt=""></div>
            </li>
        </ul>
    </div>
</template>

<script type="text/javascript">
    import hexagonData from '../data/hexagon';
    export default {
        data(){
            return {
                cur: 2,
                hexagon: hexagonData.data
            }
        },
        methods: {
            showItem(item,index) {
                if (item.img) {
                    this.cur = index;
                }
            }
        }
    }
</script>


<style lang="scss">
    .hexagon-box{
        display: flex;
        > ul, > div{
            flex: 1;
            
        }
    }
    .hexagon-title{
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #fff;
        padding: 0 50px;
        h3{
            margin-top: -30%;
            font-size: 32px;
        }
        h4{
            font-size: 20px;
            margin-bottom: 14px;
        }
        p{
            font-size: 12px;
            text-align: justify;
            color: #999999;
        }
        .line{
            height: 2px;
            width: 64px;
            background-color: #267474;
            margin: 30px 0;
        }
    }

    .hexagon{
        overflow:hidden;
        li{
            position:relative;
            width:27.85714285714286%;
            padding-bottom: 32.16760145166612%;
            float:left;
            overflow:hidden;
            visibility:hidden;
            transform: rotate(-60deg) skewY(30deg) scale(1,1);
            opacity: 0.4;
            transition: 0.6s;
            cursor: pointer;
            &:nth-child(3n+2){
                margin:0 1%;
            }
            &:nth-child(6n+4){
                margin-left:0.5%;
            }
            &:nth-child(6n+4), &:nth-child(6n+5), &:nth-child(6n+6) {
                margin-top: -6.9285714285%;
                margin-bottom: -6.9285714285%;
                transform: translateX(50%) rotate(-60deg) skewY(30deg);

                &::last-child{
                    margin-bottom:0%;
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
                color:#fff;
                overflow:hidden;
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

</style>