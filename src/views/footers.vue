<template>
    <div>
        <!--toast-->
        <div class="toastBox" :class="{'active':showToast}">
            <div class="title">{{title}}</div>
            <div class="message">{{message}}</div>
        </div>

        <div class="footerBox">
            <footer class="footerBox">
                <div class="wrapper clearfix">
                    <p class="bottomLogo">
                        <i class="icon iconfont icon-USDX-logo"></i>
                    </p>
                </div>
                <div class="subscribeSection">
                    <input type="text" v-model="email" class="inputBox" placeholder="Please enter your email address here"/>
                    <button class="subBtn" @click="submitEmail()">Subscribe</button>
                </div>
                <div style="clear:both;"></div>
                <div class="clearfix linkBox">
                    <!---->
                    <a href="mailto:contact@usdx.money" target="_blank"  class="icon iconfont icon-youxiang"></a>
                    <a href="https://twitter.com/NewMoneyUSDX" target="_blank"  class="icon iconfont icon-twitter"></a>
                    <a href="https://www.facebook.com/NewMoneyUSDX" target="_blank" class="icon iconfont icon-facebook"></a>
                    <!--<a href="javascript:;" target="_blank" class="icon icon_msg"><i class="icon iconfont icon-mailbox"></i></a>
                    <a href="javascript:;" target="_blank" class="icon icon_m"><i class="icon iconfont icon-medium"></i></a>-->
                    <a href="https://github.com/USDXProject" target="_blank" class="icon iconfont icon-github"></a>
                    <!--<a href="javascript:;" target="_blank" class="icon icon_reddit"><i class="icon iconfont icon-reddit"></i></a>-->
                    <a href="https://t.me/NewMoneyUSDX" target="_blank" class="icon iconfont icon-emi"></a>
                </div>
                <div style="clear:both;"></div>

                <p class="copyRight">©️USDX 2018.All Rights Reserved.</p>
            </footer>
        </div>
    </div>

</template>

<script type="text/javascript">
    import axios from 'axios'
    // api https://github.com/axios/axios

    var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式
    export default {
        data(){
            return {
                email:'',
                title:'',
                message:'',
                showToast: false
            }
        },
        methods: {
            submitEmail(){
                if(!reg.test(this.email)){
                    this.showDialog('Fail','Please input the correct email !');
                    return;
                }
                this.showDialog('Success','welcome to join us !');

                // 服务器需设置返回头部，允许跨域 header("Access-control-Allow-Origin:*");


                // axios.post('http://m.huchill.com/usdx/api/joinUs',{
                //    email: this.meail
                // })
               /* axios.get('http://m.huchill.com/usdx/api/joinUs',{
                    params: {
                        email: this.meail
                    }
                }).then(res => {
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                })*/



            },
            showDialog(title,message){
                this.title = title;
                this.message = message;
                this.showToast = true;
                setTimeout(() => {
                    this.showToast = false;
                }, 3000);
            }
        }
    }
</script>


<style lang="scss">
    .toastBox{
        opacity: 0;
        position: fixed;
        top:90px;
        right: 10px;
        width: 200px;
        height: 48px;
        border: 1px solid #84edca;
        padding-left: 16px;
        background-color: #1c1f29;
        z-index: 999;
        padding-top: 8px;
        .title{
            color: #6fe9bd;
            font-weight: bold;
            font-size: 16px;
            text-align: left;
        }
        .message{
            margin-top: 4px;
            font-size: 12px;
            color: #fff;
            text-align: left;

        }

        &.active{
            z-index: 10;
            opacity: 1;
            animation: fadeInRight 0.6s 0s both;
        }

    }
    .footerBox{
        background: #292b31;
        width: 100%;
        padding-top: 34px;
        .bottomLogo{
            text-align: center;
            .icon-USDX-logo{
                font-size: 45px;
                color: #fff;
                text-align: center;
            }
        }
        .linkBox{
            text-align: center;
            margin: 0 auto;
            margin-top: 25px;
            width: 330px;
            height: 48px;
            display: block;
            overflow: hidden;
            .iconfont{
                font-size: 18px;
                color: #fff;
            }
            a{
                width: 66px;
                height: 44px;
                line-height: 44px;
                text-align: center;
                display: block;
                float: left;
                i{
                    text-align: center;
                }
            }
            a:hover{
                color:#06dde0;
            }
            a:last-child{
                margin-right: 0px;
            }
        }
        .copyRight{
            color:#cccccc;
            font-size: 14px;
            line-height: 15px;
            text-align: center;
            margin-top: 32px;
            padding-bottom: 60px;
        }
        .subscribeSection{
            width: 584px;
            margin: 0 auto;
            height: 48px;
            margin-top: 52px;
            .inputBox{
                margin: 0;
                padding: 0;
                border: none;
                float: left;
                width: 418px;
                height: 48px;
                line-height: 48px;
                padding-left: 20px;
                background: #54555a;
                font-size: 14px;
                color: #cccccc;
            }
            .subBtn{
                width: 138px;
                float: right;
                height: 48px;
                line-height: 48px;
                text-align: center;
                color: #ffffff;
                border: none;
                font-size: 18px;
                background: url("../../images/submit_bg.png");
                background-repeat: no-repeat;
                background-size: 138px 48px;
            }
        }
    }

    /*720*/
    @media screen and (max-width: 720px) {
        .footerBox{
            height: 234px;
            .bottomLogo{
                img{
                    height: 56px;
                    width: 186px;
                }
                .icon-USDX-logo{
                    font-size: 50px;
                    margin-top: 8px;
                }
            }
            .linkBox{
                width: 248px;
                margin-top: 10px;
                a{
                    width: 60px;
                    .iconfont{
                        font-size: 20px;
                        margin: 0 10px;

                    }
                }
                a:last-child{margin-right: 0px;}
            }
            .copyRight{
                font-size: 13px;
                margin-top: 20px;
                background-color: #292b31;
            }
            .subscribeSection{
                width: auto;
                padding-left: 24px;
                padding-right: 24px;
                position: relative;
                .inputBox{
                    height: 24px;
                    line-height: 24px;
                    width: 100%;
                    display: block;
                    box-sizing: border-box;
                    font-size: 12px;
                    padding-left: 8px;

                }
                .subBtn{
                    width: 80px;
                    height: 24px;
                    line-height: 24px;
                    text-align: center;
                    font-size: 12px;
                    position: absolute;
                    top:0;
                    right: 24px;
                    border-left:6px solid #292b31;

                }
            }
        }

    }
    
@keyframes fadeInRight{
    0%{opacity:0;
    transform:translateX(100%)}
    100%{opacity:1;
    transform:translateX(0)}
}
</style>