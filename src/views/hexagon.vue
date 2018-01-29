<template>
    <div class="hexagon-box">
        <div class="hexagon-title">
            <h3>ADVISORS</h3>
            <h4>xxx xxx xx</h4>
            <p>介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍</p>
        </div>
        <ul class="hexagon">
            <li class="pusher"></li>
            <li class="pusher"></li>
            <li>
                <div><img src="images/touxiang.jpg" alt=""></div>
            </li>
            <li>
                <div><img src="images/touxiang.jpg" alt=""></div>
            </li>
            <li class="pusher"></li>
            <li>
                <div><img src="images/touxiang.jpg" alt=""></div>
            </li>
            <li>
                <div><img src="images/touxiang.jpg" alt=""></div>
            </li>
            <li class="pusher"></li>
            <li>
                <div><img src="images/touxiang.jpg" alt=""></div>
            </li>
            <li>
                <div><img src="images/touxiang.jpg" alt=""></div>
            </li>
            <li>
                <div><img src="images/touxiang.jpg" alt=""></div>
            </li>
            <li>
                <div><img src="images/touxiang.jpg" alt=""></div>
            </li>
            <li>
                <div><img src="images/touxiang.jpg" alt=""></div>
            </li>
            <li>
                <div><img src="images/touxiang.jpg" alt=""></div>
            </li>
            <li class="pusher"></li>
            <li class="pusher"></li>
            <li class="pusher"></li>
        </ul>
    </div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {}
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
        align-items: center;
        justify-content: center;
        color: #fff;
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
            transform: rotate(-60deg) skewY(30deg);
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
        }
    }

</style>