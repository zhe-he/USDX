<template>
    <div class="fatalBox">
        <Head htitle="Current Stablecoin Projects’ Fatal Problems"  lineHeight="2"></Head>
        <p class="desc">Traditional Stablecoin projects collect fiat currency as collateral and generate Stablecoin through money<br/> covertion companies, which can pose a risk to policies and cause moral problems.</p>
        <div class="itemBox clearfix">
            <div class="height50"></div>
            <div class="left">
                <img src="../../images/fatal01.png"/>
                <h2>Regulatory Risk</h2>
                <p class="mobileShow">Tether’s account for fiat <br/>currency can be frozen at any <br/>time under regulation.</p>
                <p class="mobileHide">Tether’s account for fiat currency can be frozen at any time under <br/>regulation.</p>
            </div>
            <div class="right">
                <h2>Moral Hazard</h2>
                <p>Take Tether as an example, with a centralized system, Tether releases USDT without any collateral.</p>
                <img src="../../images/fatal02.png"/>
            </div>
        </div>

        <!--scandals-->
        <div class="scanBox">
            <div class="title">
                <h2>USDT'S SCANDALS</h2>
                <i class="line"></i>
            </div>
            <div class="scrollBox mobileHide">
                <!-- swiper -->
                <swiper :options="swiperOption">
                    <swiper-slide>
                        <a class="linkBox mr6" href="https://www.cnbc.com/2018/02/02/tether-what-you-need-to-know-about-the-cryptocurrency-worrying-markets.html" target="_blank">
                            <div class="content">
                                <img class="logo" src="../../images/logo/cnbc.png"/>
                                <h3>'Devastating' Effects On The Market</h3>
                                <div class="fromBox">
                                    <span class="date">Feb 3, 2018</span>
                                </div>
                                <div class="ctn">
                                    "Tether printing moves the market appreciably; 48.8 percent of <br/>BTC's price rise in the period studied occurred in the two-hour <br/>periods following the arrival of 91 different tether grants to the <br/>Bitfinex wallet," 
                                </div>
                            </div>
                        </a>

                        <a class="linkBox" href="https://www.marketwatch.com/story/why-bitfinex-tether-are-raising-nagging-questions-in-the-cryptocurrency-market-2018-01-30" target="_blank">
                            <div class="content">
                                <img src="../../images/logo/mw_logo.png" class="logo"/>
                                <h3>Friedman LLP didn’t respond to calls or emails<br/>for comment.</h3>
                                <div class="fromBox">
                                    <span class="date">Jan 31, 2018</span>
                                </div>
                                <div class="ctn">
                                    “The ending of the audit has fueled criticisms of the cryptocurrency company and led to accusations that the $2.3 billion worth of USDT currently in circulation is not backed ...
                                </div>
                            </div>
                        </a>


                    </swiper-slide>

                    <swiper-slide>
                        <a class="linkBox mr6" href="https://www.coindesk.com/report-cftc-sends-subpoenas-bitfinex-tether/" target="_blank">
                            <div class="content">
                                <img class="logo" src="../../images/logo/codedesk.png"/>
                                <h3>CFTC Sends Subpoenas to Bitfinex, Tether</h3>
                                <div class="fromBox">
                                    <span class="date">Jan 30, 2018</span>
                                </div>
                                <div class="ctn">
                                    “The news comes days after CoinDesk reported that Tether's relationship with auditing firm Friedman LLC had "dissolved," though it still remains unclear which party moved to curtail the work. ”
                                </div>
                            </div>
                        </a>

                        <a class="linkBox" href="https://news.bitcoin.com/report-claims-48-8-btcs-price-rises-last-9-months-occurred-within-2-hours-91-usdt-issuances/" target="_blank">
                            <div class="content">
                                <img class="logo" src="../../images/logo/bitcoin_logo.png"/>
                                <h3>Report Finds Correlation Between USDT<br/>Issuances and BTC Price Moves</h3>
                                <div class="fromBox">
                                    <span class="date">Jan 28, 2018</span>
                                </div>
                                <div class="ctn">
                                    “The Tether Report, a pseudonymously authored analysis examining the speculative assertion that bitcoin price volatility is highly correlated to the issuance of new USDT, has claimed ...
                                </div>
                            </div>
                        </a>
                    </swiper-slide>

                    <swiper-slide>
                        <a class="linkBox" href="http://www.businessinsider.com/cryptocurrency-exchange-bitfinex-reportedly-subpoenaed-by-cftc-2018-1" target="_blank">
                            <div class="content">
                                <img class="logo" src="../../images/logo/business_logo.png"/>
                                <h3>Bitfinex and Tether, which share a CEO, have<br/>
                                    been accused of fraudulent behavior.</h3>
                                <div class="fromBox">
                                    <span class="date">Jan 30, 2018</span>
                                </div>
                                <div class="ctn">
                                    “The ending of the audit has fueled criticisms of the cryptocurrency company and led to accusations that the $2.3 billion worth of USDT currently in circulation is not backed ...
                                </div>
                            </div>
                        </a>
                    </swiper-slide>
                </swiper>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </div>
            <div class="mobileShow">
                <fatalMobileSwiper></fatalMobileSwiper>
            </div>

        </div>

    </div>

</template>

<script type="text/javascript">
    import fatalData from '../data/home';
    import 'swiper/dist/css/swiper.css'

    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import Head from './head';
    import fatalMobileSwiper from './fatalMobileSwiper';

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
            swiperSlide,
            fatalMobileSwiper
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
        margin-top: 30px;
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
                    .linkBox{
                        width: 477px;
                        height: 234px;
                        border: 1px solid #444444;
                        box-sizing: border-box;
                        float: left;
                        padding-left: 14px;
                        cursor: pointer;
                        color: #fff;
                    }
                    .linkBox:hover{
                        border-color: #05e1e3;
                    }
                    .mr6{
                        margin-right: 6px;
                    }
                    .content{

                        h3{
                            font-weight: normal;
                            font-size: 22px;
                            line-height: 22px;
                            margin-top: 12px;
                        }
                        .fromBox{
                            margin-top: 6px;
                            .date{
                                font-size: 12px;
                                color:#fff;
                                display: inline-block;
                                margin-right: 16px;
                                padding-left: 20px;
                                background: url("../../images/time_icon.png") no-repeat;

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
                        .logo{
                            height: 28px;
                            width: auto;
                            margin-top: 18px;

                        }
                    }
                    .content:first-child{
                        margin-right: 6px;
                    }

                }
            }
            .swiper-button-prev{
                left: -87px;
                background: url("../../images/left_icon.png") no-repeat;
                width: 69px;
                height: 69px;
                cursor: pointer;
            }
            .swiper-button-next{
                right: -87px;
                background: url("../../images/right_icon.png") no-repeat;
                width: 69px;
                height: 69px;
                cursor: pointer;
            }
        }

    }
    @media screen and (max-width: 720px) {
        .fatalBox{
            .desc{
                width: 294px;
                text-align: center;
                font-size: 10px;
                margin: 0 auto;
                margin-top: 10px;
                line-height: 14px;
                br{
                    display: none;
                }
            }
            .itemBox{
                width: 352px;
                margin: 0 auto;
                div{
                    h2{
                        font-size: 13px;
                        line-height: 22px;


                    }
                    p{
                        font-size: 10px;
                        line-height: 13px;
                        margin-top: 3px;
                        br{
                            display: none;
                        }

                    }
                    .mobileShow{
                        br{
                            display: block;
                        }
                    }
                    img{

                    }
                }
                .left{
                    width: 180px;
                    padding-left: 0px;
                    img{
                        width: 172px;
                        margin-left: 10px;
                    }
                    h2{
                        margin-top: 42px;
                        margin-left: 10px;

                    }
                    p{
                        margin-left: 10px;
                    }
                }
                .right{
                    width: 172px;
                    img{
                        width: 160px;
                        margin-left: -5px;
                        margin-top: 50px;
                    }
                    h2{
                        margin-top: 76px;
                        margin-left: 20px;

                    }
                    p{
                        margin-left: 20px;
                    }

                }
            }
        }

        .scanBox{
            margin-top: 40px;
            padding-bottom: 0px;
            .title{
            }
            h2{
                font-size: 16px;
            }
            .line{
                width: 26px;
                height: 1px;
                margin-top: 10px;
            }
            .scrollBox{
                width: 280px;
                margin-top: 24px;

                .swiper-container{

                    .swiper-slide{
                        .linkBox{
                            width: 280px;
                            height: 140px;
                            box-sizing: border-box;
                            float: left;
                            padding-left: 16px;
                            cursor: pointer;
                            color: #fff;
                            overflow: hidden;
                        }
                        .linkBox:hover{
                            border-color: #444444;
                        }
                        .content{
                            h3{
                                font-size: 13px;
                                line-height: 16px;
                                margin-top: 6px;
                                br{
                                    display: none;

                                }
                            }
                            .fromBox{
                                margin-top: 0px;
                                .date{
                                    font-size: 8px;
                                    background-size: 9px auto;
                                    margin-right: 8px;
                                    padding-left: 14px;
                                }
                                .from{
                                    font-size: 9px;

                                }
                            }
                            .ctn{
                                font-size: 10px;
                                line-height: 13px;
                                margin-top: 4px;
                                height: 40px;
                                overflow: hidden;
                                br{
                                    display: none;
                                }
                            }

                            .logo{
                                height: 14px;
                                width: auto;
                                margin-top: 14px;

                            }

                            h2{

                            }
                        }
                        .content:first-child{
                        }
                    }
                }
                .swiper-button-prev_fm{
                    background: url("../../images/left_icon.png") no-repeat;
                    width: 36px;
                    height: 36px;
                    background-size: 36px auto;
                    left: -42px;
                    top:50px;
                    position: absolute;
                }
                .swiper-button-next_fm{
                    background: url("../../images/right_icon.png") no-repeat;
                    width: 36px;
                    height: 36px;
                    background-size: 36px auto;
                    right: -42px;
                    top:50px;
                    position: absolute;
                }
            }

        }
    }
</style>
