<template>
    <div class="fatalBox">
        <Head htitle="Current Stable Coins’ <br/>Fatal Problems"></Head>
        <p class="desc">Traditional stablecoin projects collect fiat currency as collateral and generate stablecoin through money<br/> covertion companies, which exsit moral and policy risks.</p>
        <div class="itemBox clearfix">
            <div class="height50"></div>
            <div class="left">
                <img src="../../images/fatal01.png"/>
                <h2>Regulatory Risk</h2>
                <p>Tether’s account for fiat currency can be frozen at any time under <br/>regulation.</p>
            </div>
            <div class="right">
                <h2>Moral Hazard</h2>
                <p>With a centralization system, Tether releases the USDT <br/>without any collateral .</p>
                <img src="../../images/fatal02.png"/>
            </div>
        </div>

        <!--scandals-->
        <div class="scanBox">
            <div class="title">
                <h2>USDT's Scandals</h2>
                <i class="line"></i>
            </div>
            <div class="scrollBox">
                <!-- swiper -->
                <swiper :options="swiperOption">
                    <swiper-slide>
                        <div class="content">
                            <!--<img src="logo"/>-->
                            <h3>'Devastating' Effects On The Market</h3>
                            <div class="fromBox">
                                <span class="date">Feb 3, 2018</span>
                                <span class="from">form : cnbc</span>
                            </div>
                            <div class="ctn">
                                "Tether printing moves the market appreciably; 48.8 percent of <br/>BTC's price rise in the period studied occurred in the two-hour <br/>periods following the arrival of 91 different tether grants to the <br/>Bitfinex wallet," 
                            </div>
                        </div>
                        <div class="content">
                            <h3>Bitfinex and Tether, which share a CEO, have<br/>
                                been accused of fraudulent behavior.
                            </h3>
                            <div class="fromBox">
                                <span class="date">Feb 3, 2018</span>
                                <span class="from">form : coindesk</span>
                            </div>
                            <div class="ctn">
                                “The ending of the audit has fueled criticisms of the cryptocurrency company and led to accusations that the <br/>$2.3 billion worth of USDT currently in circulation is not backed ...
                            </div>

                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="content">

                        </div>
                        <div class="content">

                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="content">

                        </div>
                        <div class="content">

                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="content">

                        </div>
                        <div class="content">

                        </div>
                    </swiper-slide>

                </swiper>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </div>
        </div>
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
    .fatalBox{
        background: #2e3137;
        .height50{
            height: 50px;
        }
        .desc{
            font-size: 16px;
            color: #fff;
            text-align: center;
            line-height: 22px;
            margin-top: 15px;
        }
        .itemBox{
            width: 960px;
            margin: 0 auto;
            div{
                h2{
                    font-size: 28px;
                    color: #fff;
                    font-weight: normal;
                    line-height: 30px;


                }
                p{
                    font-size: 16px;
                    color: #fff;
                    line-height: 26px;
                    margin-top: 12px;

                }
                img{

                }
            }
            .left{
                width: 494px;
                float: left;
                padding-left: 62px;
                img{
                    width: 338px;
                    height: auto;
                    margin-left: 18px;
                }
                h2{
                     margin-top: 60px;
                }
            }
            .right{
                width: 404px;
                float: left;
                img{
                    width: 344px;
                    height: auto;
                    margin-top: 106px;
                    margin-left: 14px;
                }
                h2{
                    margin-top: 104px;
                }

            }
        }
    }
    .scanBox{
        padding-bottom: 150px;
        .title{
            text-align: center;
        }
        h2{
            font-size: 28px;
            font-weight: normal;
            text-align: center;
        }
        .line{
            display: inline-block;
            width: 44px;
            height: 1px;
            background: #05e1e3;
            text-align: center;
            margin-top: 18px;
        }
        .scrollBox{

            width: 960px;
            height: 234px;
            margin: 0 auto;
            position: relative;
            margin-top: 40px;
            ;
            .swiper-container{
                height: 234px;

                .swiper-slide{
                    width: 960px;
                    .content{
                        width: 477px;
                        height: 234px;
                        border: 1px solid #444444;
                        box-sizing: border-box;
                        float: left;
                        padding-left: 14px;
                        h3{
                            font-weight: normal;
                            font-size: 22px;
                            line-height: 24px;
                        }
                        .fromBox{
                            margin-top: 6px;
                            .date{
                                font-size: 12px;
                                color:#fff;
                                display: inline-block;
                                margin-right: 16px;

                            }
                            .from{
                                font-size: 14px;
                                color:#fff;

                            }
                        }
                        .ctn{
                            margin-top: 8px;
                            font-size: 16px;
                            line-height: 22px;
                        }
                    }
                    .content:first-child{
                        margin-right: 6px;
                    }
                }
            }
            .swiper-button-prev{
                left: -87px;
            }
            .swiper-button-next{
                right: -87px;
            }
        }

    }
    @media screen and (max-width: 720px) {
        .fatalBox{

        }
    }
</style>
