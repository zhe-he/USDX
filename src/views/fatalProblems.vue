<template>
    <div class="fatalBox">
        <Head title="Current Stable Coins’ <br/>Fatal Problems"></Head>
        <p class="desc">Traditional stablecoin projects collect fiat currency as collateral and generate stablecoin through money<br/> covertion companies, which exsit moral and policy risks.</p>
        <div class="itemBox">
            <div class="left">
                <img src="../../images/fatal01.png"/>
                <h2>Regulatory Risk</h2>
                <p>Tether’s account for fiat currency can be frozen at any time under regulation.</p>
            </div>
            <div class="right">
                <h2>Moral Hazard</h2>
                <p>With a centralization system, Tether releases the USDT without any collateral .</p>
                <img src="../../images/fatal02.png"/>
            </div>

        </div>
    </div>

</template>

<script type="text/javascript">
    import fatalData from '../data/home';
    import Head from './head';

    export default {
        data() {
            return {
            }
        },

        mounted() {
        },
        methods: {

        },
        components:{
            Head
        }
    }
</script>

<style lang="scss">
    .fatalBox{
        background: #2e3137;
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

                }
                p{

                }
                img{

                }
            }
            .left{
                width: 554px;
                float: left;
            }
            .right{
                width: 406px;
                float: left;

            }
        }
    }

    @media screen and (max-width: 720px) {
        .fatalBox{

        }
    }
</style>
