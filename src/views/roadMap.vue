<template>
    <div class="roadMapBox">
        <Head htitle="ROADMAP OF USDX"></Head>
        <div class="roadTitle clearfix">
            <div class="mt">
                <h3>2018</h3>
                <p>The Dark Knight Rises</p>
                <i class="line"></i>
            </div>
            <div class="mt">
                <h3>2019</h3>
                <p>Game of Stablecoin World</p>
                <i class="line"></i>
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
    .roadMapBox{
        width: 1280px;
        margin: 0 auto;
        .roadTitle{
            .mt{
                float: left;
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

                }
                i{
                    margin-top: 20px;
                    display: inline-block;
                    width: 40px;
                    height: 1px;
                    background: #05e1e3;

                }
            }
            .mt:nth-child(2){
                float: right;
            }
        }

    }


    @media screen and (max-width: 720px) {
        .roadMapBox{

        }
    }
</style>
