<template>
    <div class="introBox">
        <Head htitle="USDX：The New Era of Stable Coin"></Head>
        <div class="navBtnBox">
            <ul>
                <li>Innovative De-Commerce</li>
                <li class="active">Bottom-Up Revolution</li>
                <li>Extreme Stabilization</li>
            </ul>
        </div>
        <div class="introCtn clearfix" style="display: none">
            <div class="leftImg">
                <img src="../../images/s01.png"/>
            </div>
            <div class="rightCtn">
                <div class="sectionCtn">
                    <h3>Kill the Centralized Mechanism</h3>
                    <p>1. Tether can release the USDT without any collateral and perform as a centralized <br/>entity.
                    </p>
                    <p>2. With USDX’s absolute decentralized system, we build a healthy and organic <br/>decommerce ecosystem.

                    </p>
                </div>
                <div class="sectionCtn">
                    <h3>No Collateral No Fraud and No Risk</h3>
                    <p>1. Fiat currency as collateral have to be placed in one bank account and the bank <br/>account can be frozen at any time  for fraud.
                    </p>
                    <p>2. Cryptocurrency as collateral is extremely volatile, and can easily destroy the <br/>market before the stablecoin is widely used .
                    </p>
                </div>




            </div>

        </div>
        <div class="introCtn clearfix" style="display: none;">
            <div class="leftImg">

            </div>
            <div class="rightCtn">
                <div class="sectionCtn">
                    <h3>Phase 1: Revolution Accessible to Everyone</h3>
                    <p>During Phase 1, tokens will be produced based on Ethereum ERC 20, called USDX. <br/>Every individual can join USDX’s ecosystem to contribute in this stablecoin <br/>revolution.
                    </p>
                </div>
                <div class="sectionCtn">
                    <h3>Phase 2: Independent Public Chain Ensures The <br/>Revolution</h3>
                    <p>During Phase 2, an independent public chain will be created, called USDY. Previous <br/>Holders with USDX will be awarded  USDY equal to their USDX and enjoy the <br/>ultimate stabilization reached by its self-balancing mechanism.
                    </p>

                </div>

            </div>

        </div>

        <div class="introCtn clearfix">
            <div class="leftImg">

            </div>
            <div class="rightCtn">
                <div class="sectionCtn">
                    <h3>Intelligent Algorithmic Monetary Control</h3>
                    <p>Based on historical dataset to implement algorithmic control.</p>
                    <p>1. Adjust Total Quantity Of Money In The Economy (M)</p>
                    <p>2. Adjust The Velocity Of Money (V)</p>
                    <p>With E represents the exchange rate of USDY to USD, if E is greater than 1, we need <br/>to increase M or increase V, so that E goes down to 1; if E is less than 1, we need to <br/>decrease M or decrease V, so that E goes up to 1.</p>
                </div>
                <div class="sectionCtn">
                    <h3>Diversified Mechanisms Adjusting M & V</h3>
                    <p>Public chain maintains diversified mechanisms.</p>
                    <p>1.Variable Block Reward</p>
                    <p>2.Mining Lock</p>
                    <p>3.Variable Transaction Fee</p>
                </div>

            </div>

        </div>
        <swiper :options="swiperOption">
            <swiper-slide>

                <div class="content">

                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="content">
                </div>

            </swiper-slide>
            <swiper-slide>
                <div class="content">
                </div>

            </swiper-slide>
        </swiper>



    </div>

</template>

<script type="text/javascript">
    import fatalData from '../data/home';
    // require styles
    import 'swiper/dist/css/swiper.css'

    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import Head from './head';

    export default {
        data() {
            return {
                swiperOption: {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        },

        mounted() {
        },
        methods: {

        },
        components:{
            Head,
            swiper,
            swiperSlide
        }
    }
</script>


<style lang="scss">
    .introBox{
        .navBtnBox{
            ul{
                width: 816px;
                margin: 0 auto;
                margin-top: 40px;
                li{
                    width: 260px;
                    box-sizing: border-box;
                    height: 46px;
                    line-height: 46px;
                    font-size: 20px;
                    color: #fff;
                    border-radius: 4px;
                    border:1px solid #3c4048;
                    text-align: center;
                    float: left;
                    margin-right: 18px;
                }
                li:nth-last-child(1){
                    margin-right: 0px;
                }
                .active{
                    border-radius: 4px;
                    background-color: rgb(60, 64, 72);
                    box-shadow: 0px 10px 24px 0px rgba(1, 1, 1, 0.6);
                    border:none;

                }
            }

        }

        .introCtn{
            width:1280px;
            margin:  0 auto;
            .leftImg{
                width: 665px;
                float:left;
                min-height: 100px;
                img{
                    width: 454px;
                    height: auto;
                    display: block;
                    margin-left: 140px;
                    padding-top: 75px;
                }
            }
            .rightCtn{
                margin-top: 70px;
                float:left;
                .sectionCtn{
                    h3{
                        font-weight: normal;
                        font-size: 27px;
                        margin-bottom: 20px;
                    }
                    p{
                        font-size: 16px;
                        line-height: 22px;
                        margin-top: 10px;
                    }
                }
                .sectionCtn:nth-child(2){
                    margin-top: 20px;
                }
            }
        }

    }


    @media screen and (max-width: 720px) {
        .introBox{

        }
    }
</style>
