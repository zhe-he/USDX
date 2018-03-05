<template>
    <div class="roadMapBox">
        <Head htitle="ROADMAP OF USDX"></Head>
        <div class="roadContent">
            <div class="clearfix">
            <swiper :options="swiperOption">
                    <swiper-slide>
                        <div class="top">
                            <div class="headBar roadTitle">
                                <div class="mt">
                                    <h3>2018</h3>
                                    <p>The Dark Knight Rises</p>
                                    <i class="line"></i>
                                </div>
                            </div>
                            <div class="content">
                                <p>Setting Up Foundation in</p>
                                <p>Singapore</p>
                                <p>ICO</p>
                                <p>Setting Up Community</p>
                            </div>
                            <div class="number">Q1</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="bottom">
                            <div class="headBar"></div>
                            <div class="number">Q2</div>
                            <div class="content">
                                <p>Launching D-wallet</p>
                                <p>Setting Up USDX Fund</p>
                                <p>Community expanding</p>
                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="top">
                            <div class="headBar"></div>
                            <div class="content">
                                <p>Building a Public Chain</p>
                                <p>Landing Korean Market&</p>
                                <p>the US Market</p>
                                <p>&nbsp;</p>
                            </div>
                            <div class="number pl78">Q3</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="bottom">
                            <div class="headBar"></div>
                            <div class="number pl101">Q4</div>
                            <div class="content pl30">
                                <p>Testing and Perfacting</p>
                                <p>on Public Chain</p>
                                <p>Setting Up Foundation</p>
                                <p>Branch in America</p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="top">
                            <div class="headBar roadTitle">
                                <div class="mt mt45">
                                    <h3>2019</h3>
                                    <p>Game of Stablecoin World</p>
                                    <i class="line"></i>
                                </div>
                            </div>
                            <div class="content pl45">
                                <p>Lanuching Public</p>
                                <p>Chain</p>
                                <p>USDY Generation</p>
                                <p>&nbsp;</p>
                            </div>
                            <div class="number pl96">Q1</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="bottom">
                            <div class="headBar"></div>
                            <div class="number pl118">Q2</div>
                            <div class="content ml20">
                                <p>Perfecting Price Stability</p>
                                <p>Mechanism</p>
                                <p>Building D-APPs</p>
                                <p>developer platform</p>
                            </div>
                        </div>
                    </swiper-slide>

                    <swiper-slide>
                        <div class="top">
                            <div class="headBar"></div>
                            <div class="content pl18">
                                <p>Expanding to Derivatives</p>
                                <p>Markets</p>
                                <p>Building Ecosystem</p>
                                <p>&nbsp;</p>
                            </div>
                            <div class="number pl116">Q3</div>
                        </div>
                    </swiper-slide>
                <div class="swiper-button-prev_road" slot="button-prev"></div>
                <div class="swiper-button-next_road" slot="button-next"></div>
            </swiper>

            </div>
        </div>










    </div>

</template>

<script type="text/javascript">
    import fatalData from '../data/home';
    import 'swiper/dist/css/swiper.css'

    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import Head from './head';

    export default {
        data() {
            return {
                swiperOption: {
                    navigation: {
                        nextEl: '.swiper-button-next_road',
                        prevEl: '.swiper-button-prev_road'
                    },
                    slidesPerView: 6,
                    spaceBetween: 0,
                    freeMode: true,
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
    .roadMapBox{
        width: 1280px;
        margin: 0 auto;
        overflow: hidden;
        padding-bottom: 80px;
        .roadTitle{
            .mt{
                float: left;
                margin-left: 12px;
                h3{
                    font-weight: normal;
                    font-size: 18px;
                    color: #05e1e3;
                    line-height: 22px;



                }
                p{
                    font-weight: normal;
                    font-size: 18px;
                    color: #05e1e3;
                    line-height: 22px;
                    white-space:nowrap;
                }
                i{
                    margin-top: 20px;
                    display: inline-block;
                    width: 40px;
                    height: 1px;
                    background: #05e1e3;

                }
            }
            .mt45{
                margin-left: 45px;
            }
        }
        .roadContent{

            width: 1290px;
            height: 372px;
            margin-top: 100px;
            .swiper-slide{
                background: url("../../images/road_map_bg.png");
                background-repeat: repeat-x;
                //
            }
            .swiper-slide:nth-child(1){
                background-position: -80px 108px;
            }
            .swiper-slide:nth-child(2){
                background-position: 140px 100px;

            }
            .swiper-slide:nth-child(3){
                background-position: 358px 108px;
            }
            .swiper-slide:nth-child(4){
                background-position: 579px 100px;

            }
            .swiper-slide:nth-child(5){
                background-position: 799px 108px;
            }
            .swiper-slide:nth-child(6){
                background-position: 1022px 100px;

            }
            .swiper-slide:nth-child(7){
                background-position: 1246px 108px;

            }
            ul{
                li{
                    float: left;
                    width: 198px;
                    text-align: left;
                    padding-left: 16px;

                }
            }
            .top{
                padding-left: 10px;
                /*height: 280px;*/
                height: 372px;

                .content{
                    padding-top: 57px;
                    padding-left: 12px;
                    p{
                        line-height: 22px;
                        font-size: 16px;
                    }
                }
                .number{
                    padding-left: 67px;
                    padding-top: 102px;
                    font-size: 16px;
                }
                .pl116{padding-left: 116px;}
                .pl96{
                    padding-left: 96px;
                }
                .pl78{
                    padding-left: 78px;
                }
                .pl45{
                    padding-left: 45px;
                }
                .ml20{
                    margin-left: 20px;
                }
                .pl20{
                    padding-left: 20px;
                }
                .pl18{
                    padding-left: 18px;
                }
                .headBar{
                    height: 92px;
                    width: 100%;
                }

            }
            .bottom{
                padding-left: 14px;
                /*height: 263px;*/
                height: 355px;
                .content{
                    padding-top: 100px;
                    padding-left: 26px;
                    p{
                        line-height: 22px;
                        font-size: 16px;
                    }
                }
                .number{
                    padding-left: 87px;
                    padding-top: 24px;
                }
                .pl101{
                    padding-left: 101px;
                }
                .pl118{
                    padding-left: 118px;
                }
                .pl30{
                    padding-left: 30px;
                }
                .headBar{
                    height: 92px;
                    width: 100%;
                }
            }
            .swiper-button-prev_road{
                background: url("../../images/left_icon.png") no-repeat;
                width: 69px;
                height: 69px;
                cursor: pointer;
                top:106px;
                position: absolute;
                z-index: 9999;
            }
            .swiper-button-next_road{
                background: url("../../images/right_icon.png") no-repeat;
                width: 69px;
                height: 69px;
                cursor: pointer;
                top:106px;
                position: absolute;
                z-index: 9999;
                right: 24px;
            }
        }

    }



    @media screen and (max-width: 720px) {
        .roadMapBox{

        }
    }
</style>
