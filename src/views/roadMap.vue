<template>
    <div class="oiku">
        <Head htitle="Roadmap of USDX"></Head>
        <div class="roadTitle">
            <h3 class="left">
                <p>2018<br/>Roadmap of USDX</p>
                <i class="line"></i>
                </h3>
            <h3 class="right">
                <p>2019<br/>Game of Stablecoin World</p>
                <i class="line"></i>
            </h3>
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
