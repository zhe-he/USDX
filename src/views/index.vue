<template>
    <div ref="nav-home" id="indexSection" class="indexSection clearfix">
            <div class="indexBox">
                <div class="indexContent">
                    <h2><i class="icon iconfont icon-USDX"></i></h2>
                    <p>The Ultimate Stage of Stablecoin</p>
                    <div class="feature"><span>Stable</span><i class="point"></i><span>Secure</span><i class="point"></i><span>Scalable</span></div>
                    <div class="whitePaper">
                        <a href="whitepaper/USDX Whitepaper.pdf" target="_blank">Whitepaper</a>
                        <a href="whitepaper/USDX Deck.pdf" target="_blank" class="deck">Deck</a>
                    </div>
                </div>

                <div class="indexBox-line">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>

</template>

<script type="text/javascript">

    export default {
        data() {
            return {
                winHeight:600,
            }
        },

        mounted() {
            let winHeight = document.documentElement.clientHeight;
            console.info(winHeight);
            if(winHeight <650){
                winHeight = 650;
            }

            this.setWindowHeight(winHeight);
        },
        methods: {
            setWindowHeight(winHeight){
                this.$nextTick(function () {
                    document.getElementById("indexSection").style.height = winHeight+"px";
                });
            }

        },
        components:{
        }
    }
</script>


<style lang="scss">
    .indexSection{
        width: 100%;
        background-color: #2c2f35;
        box-sizing: border-box;
        padding-top: 150px;
        .indexBox{
            width:960px;
            height:468px;
            margin: 0 auto;
            background-image: url("../../images/index_top.png");
            background-repeat: no-repeat;
            background-position: 0px top;
            background-size: 628px auto;
            .indexContent{
                margin-left: 465px;
                padding-top: 70px;
                padding-left: 45px;
                background: url("../../images/big_line.png") no-repeat left 70px;
                .icon-USDX{
                    font-size: 60px;
                }
                .feature{
                    font-size: 24px;
                    color: #fff;
                    display: inline-block;
                    margin-top: 10px;
                    .point{
                        display: inline-block;
                        width: 4px;
                        height: 4px;
                        border-radius: 4px;
                        background: #05e1e3;
                        margin-left: 10px;
                        margin-right: 10px;
                        vertical-align: middle;
                    }
                }
                .whitePaper{
                    display: block;
                    height: 42px;
                    text-align: center;
                    line-height: 42px;
                    margin-top: 20px;
                    position: relative;

                    a{
                        color: #fff;
                        width: 100%;
                        height: 100%;
                        display: block;
                        text-align: center;
                        font-size: 14px;
                        width: 110px;
                        height: 40px;
                        line-height: 42px;
                        border: 1px solid #05e1e3;
                        border-radius: 4px;
                        float: left;
                        box-sizing: border-box;
                    }
                    .deck{
                        margin-left: 11px;
                    }
                    a:hover{
                        border-radius: 2px;
                        background-color: rgb(31, 241, 251);

                    }
                }
            }
            h2{
                margin-top: -5px;
            }
            p{
                font-size: 30px;
                line-height: 36px;
                color: #fff;
                margin-top: 22px;
            }
        }

    }

    @media screen and (max-width: 1280px) {
        .indexSection{
            padding-top: 100px;
        }
    }

    @media screen and (max-width: 720px) {
        .indexSection{
            height: auto;
            padding-bottom: 80px;
            padding-top: 100px;
            .indexBox{
                width: 100%;
                height: 468px;
                background-repeat: no-repeat;
                background-size: 342px auto;
                background-position: 52px top;

                .indexContent{
                    padding: 0px;
                    padding-top: 302px;
                    padding-left: 54px;
                    margin-left: 0px;
                    background-position: 20px 300px;
                    background-size: 4px 160px;
                    h2{
                        font-size: 52px;
                        .icon-USDX{
                            font-size: 50px;
                        }
                    }
                    .feature{
                        font-size: 14px;
                    }




                    .whitePaper{
                        a{
                            font-size: 9px;
                            border-radius: 2px;
                            width: 65px;
                            height: 25px;
                            line-height: 25px;
                            text-align: center;
                        }


                    }
                }
                p{font-size: 18px;line-height: 21px;}

                .indexBox-line div{
                    left: 70%;
                    width: 40px;
                    &:nth-child(1){
                        top: 8%;
                    }
                    &:nth-child(2){
                        top: 25%;
                    }
                    &:nth-child(3){
                        top: 51%;
                    }
                }
            }

        }
    }
</style>
