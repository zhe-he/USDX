<template>
    <div class="floatingBox mobileHide" v-show="!this.hideStatus">
        <ul class="social-buttons">
            <li class="social-buttons-item">
                <a href="mailto:contact@usdx.money" target="_blank">
                    <i class="icon iconfont icon-youxiang"></i>
                </a>
            </li>
            <li class="social-buttons-item">
                <a href="https://twitter.com/NewMoneyUSDX" target="_blank">
                    <i class="icon iconfont icon-twitter"></i>
                </a>
            </li>
            <li class="social-buttons-item">
                <a href="https://www.facebook.com/NewMoneyUSDX" target="_blank">
                    <i class="icon iconfont icon-facebook"></i>
                </a>
            </li>
            <li class="social-buttons-item">
                <a href="https://github.com/USDXProject" target="_blank">
                    <i class="icon iconfont icon-github"></i>
                </a>
            </li>
            <li class="social-buttons-item">
                <a href="https://t.me/NewMoneyUSDX" class="fa-telegram" target="_blank">
                    <i class="icon iconfont icon-emi"></i>
                </a>
            </li>
        </ul>
    </div>

</template>

<script type="text/javascript">
    export default {
        data(){
            return {
                windowHeight:0,
                hideStatus:false,

            }
        },
        methods: {
            handleScroll () {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                if(this.windowHeight>200 && (this.windowHeight - scrollTop <-200)){
                    this.hideStatus = true;
                }else{
                    this.hideStatus = false;
                }
            },

        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll)
            var height =document.getElementById("home").clientHeight;
            if(height && height>200){
                this.windowHeight = height;
            }



        }
    }
</script>


<style lang="scss">

    .floatingBox{
        position: fixed;
        bottom: 30px;
        right: 20px;
        z-index: 1000;
        .social-buttons{
            .social-buttons-item{
                display: inline-block;
                vertical-align: middle;
                list-style: none;
                margin: 0;
                cursor: pointer;
                a{
                    width: 32px;
                    margin: 0 5px;
                    height: 32px;
                    display: block;
                    text-decoration: none;
                    border-radius: 100%;
                    background-color: rgba(217, 241, 253,0.2);
                    color: #fff;
                    font-size: 16px;
                    position: relative;

                    i{
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        -webkit-transform: translateX(-50%) translateY(-50%);
                        transform: translateX(-50%) translateY(-50%);
                    }
                    .icon-emi{
                        color: #fff;
                        font-size: 32px;
                        padding-right:6px;
                    }
                }
                a:hover{
                    i{
                        color:#06dde0;
                    }
                }
                .fa-telegram{
                    width: 64px;
                    height: 64px;
                    background-color: #2da6d9;
                }
                .fa-telegram:hover{
                    i{
                        color:#fff;
                    }
                }
            }

        }

    }

    /*720*/
    @media screen and (max-width: 720px) {


    }

</style>