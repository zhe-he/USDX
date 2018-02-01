<template>
    <div id="home" class="homeBox">
        <div class="topNav">
            <i class="icon iconfont icon-USDX-logo"></i>
            <div @click="navTab" class="navBar"></div>
            <ul class="clearfix mobileHide">
                <li v-for="(item,index) in nav"><a href="javascript:;" :class="{'active':curpage==index}" @click="to(item,index)" class="anchor-hd">{{item.content}}</a></li>
            </ul>
            <div class="navtab-box" :class="showNav?'active':''">
                <div class="navtab" :class="showNav?'active':''">
                    <div v-for="(item,index) in nav"><a href="javascript:;" :class="{'active':curpage==index}" @click="to2(item,index)" class="anchor-hd">{{item.content}}</a></div>
                </div>
            </div>
            
        </div>
        <div ref="nav-home" class="indexSection clearfix">
            <div class="height110 height_mobile_40"></div>
            <div class="indexBox">
                <div class="indexContent">
                    <h2><i class="icon iconfont icon-USDX"></i></h2>
                    <p>The Protocol for Decentralized<br/>
                        Stablecoin Central Bank<br/>
                        in the Community</p>
                    <a class="whitePaper" href="whitepaper/USDX Whitepaper 3.1.pdf" target="_blank">Whitepaper  Download</a>
                </div>

            </div>
        </div>
        <div ref="nav-about">
            <aboutusdx></aboutusdx>
        </div>
        <div ref="nav-phases">
            <phases></phases>
        </div>    

        <!--TEAM-->
        <div ref="nav-team" class="teamBox clearfix">
            <div class="teamHeader">
                <img src="images/team_header_bg.jpg"/>
            </div>
            <div class="height80 height_mobile_70"></div>
            <h2 class="title">
                <i class="line_icon left_line"></i>
                <i class="icon iconfont icon-team1"></i>
                <i class="line_icon right_line"></i>
            </h2>
            <div class="teamBg mobileHide">
                <i class="icon iconfont icon-team1"></i>
            </div>
            <div class="height100 height_mobile_120"></div>
                <div class="teamMember">
                    <!--team one-->
                    <div class="itemOne clearfix">
                        <div class="intro">
                            <h2>
                                <i class="icon iconfont icon-one big_number_font"></i>
                                &nbsp;<span class="small">/ </span><i class="small_number_font icon iconfont icon-four"></i>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span class="title">Richard Tiutiun</span></h2>
                            <p>Fanatical genius of blockchain technology and hacker born in Ukraine Designed and developed XOR project and stablecoin lab after drop out from UC Berkley, and focus on the research of next generation of currency.
                            </p>
                        </div>
                        <div class="teamPic">
                            <img src="images/team_one.png"/>
                        </div>
                        <span class="bigCapitial"></span>
                    </div>
                    <div class="height56 height_moblie_10"></div>
                    <!--team two-->
                    <div class="itemTwo clearfix">
                        <div class="intro ">
                            <h2>
                                <i class="icon iconfont icon-two big_number_font"></i>
                                &nbsp;<span class="small">/ </span><i class="small_number_font icon iconfont icon-four"></i>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span class="title">Lucas Porco</span></h2>
                            <p>Experienced lawyer focus on the compliance of blockchain and cryptocurrency Ph.D candidate of Law at University of Toronto Top-level participation in the design of legal frameworks for several cryptocurrencies</p>
                        </div>
                        <div class="teamPic">
                            <img src="images/team_two.png"/>
                        </div>
                        <span class="bigCapitial"></span>
                    </div>
                    <!--<div class="height_mobile_20"></div>-->
                    <!--team three-->
                    <div class="itemThree clearfix">
                        <div class="intro">
                            <h2>
                                <i class="icon iconfont icon-three big_number_font"></i>
                                &nbsp;<span class="small">/ </span><i class="small_number_font icon iconfont icon-four"></i>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span class="title">Michael Gord</span></h2>
                           <p>Professional blockchain consultant expert and product strategy expert In charge of strategic planning, business expansion and cooperation with regulators, banks and other institutions and departments of USDX project.</p>
                        </div>
                        <div class="teamPic">
                            <img src="images/team_three.png"/>
                        </div>
                        <span class="bigCapitial"></span>
                    </div>
                   <!--<div class="height60 height_mobile_120"></div>-->
                   <!--team four-->
                   <div class="itemFour clearfix">
                        <div class="intro">
                            <h2>
                                <!--<span class="big">04</span>&nbsp;/&nbsp;<span class="small">04</span>-->
                                <i class="icon iconfont icon-four big_number_font"></i>
                                &nbsp;<span class="small">/ </span><i class="small_number_font icon iconfont icon-four"></i>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span class="title">Ada Tie</span></h2>
                           <p>Graduated from University of Toronto and London School of Economics Not only a financial practitioner but also a brand expert Has rich brand and marketing experience in art curatorial, luxury marketing and private banking, and applies it to the field of cryptocurrency.</p>
                        </div>
                        <div class="teamPic">
                            <img src="images/team_four.png"/>
                        </div>
                        <span class="bigCapitial"></span>
                    </div>
                </div>
        </div>
        
        <div ref="nav-advisors" class="hexagon-box">
            <div class="advisorBox mobileHide">
                <i class="icon iconfont icon-adivsor"></i>
            </div>
            <hexagon></hexagon>
        </div>
        
        <div ref="nav-parteners">
            <parteners></parteners>
        </div>

        <footer class="footerBox">
            <div class="wrapper clearfix">
                <p class="bottomLogo"><!--<img src="images/bottom_logo.png">-->
                    <i class="icon iconfont icon-USDX-logo"></i>
                </p>
                <div class="clearfix linkBox">
                    <a href="https://twitter.com/NewMoneyUSDX"  class="icon icon_facebook"><i class="icon iconfont icon-twitter"></i></a>
                    <a href="https://www.facebook.com/NewMoneyUSDX" target="_blank" class="icon icon_f"><i class="icon iconfont icon-facebook"></i></a>
                    <a href="javascript:;" target="_blank" class="icon icon_msg"><i class="icon iconfont icon-mailbox"></i></a>
                    <a href="javascript:;" target="_blank" class="icon icon_m"><i class="icon iconfont icon-medium"></i></a>
                    <a href="https://github.com/USDXProject" target="_blank" class="icon icon_github"><i class="icon iconfont icon-github"></i></a>
                    <a href="javascript:;" target="_blank" class="icon icon_reddit"><i class="icon iconfont icon-reddit"></i></a>
                    <a href="https://t.me/NewMoneyUSDX" target="_blank" class="icon icon_medium"><i class="icon iconfont icon-emi"></i></a>
                </div>
                <p class="copyRight">©️USDX 2017.All Rights Reserved.</p>
            </div>
        </footer>
    </div>
</template>

<script type="text/javascript">
    import Hexagon from './hexagon';
    import Phases from './phases';
    import Parteners from './parteners';
    import Aboutusdx from './Aboutusdx';
    import homeData from '../data/home';
    import { scrollMove } from '../modules/method'

    export default {
        name:'home',
        data() {
            return {
                curpage: 0,
                nav: homeData.nav,
                showNav: false
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.scroll();
            })
        },
        methods:{
            to2(item,index) {
                this.showNav = false;
                this.to(item,index);
            },
            navTab() {
                this.showNav = !this.showNav;
            },
            to(item,index){
                var T = this.$refs[item.ref].getBoundingClientRect().y;
                var t = document.documentElement.scrollTop||document.body.scrollTop;
                this.curpage = index;
                scrollMove({y:t+T})
            },
            scroll() {
                var arr = ['nav-home','nav-about','nav-phases','nav-team','nav-advisors','nav-parteners'];
                window.addEventListener('scroll', () => {
                    for (var i = 0; i < arr.length; i++) {
                        var rect = this.$refs[arr[i]].getBoundingClientRect();
                        if (rect.y>=0 && rect.y+rect.height>=0) {
                            this.curpage = i;
                            return ;
                        }
                    }
                    this.curpage = arr.length - 1;

                }, false);
            }
        },
        components: {
            Hexagon,
            Phases,
            Parteners,
            Aboutusdx
        }
    }
</script>

<style lang="scss">
    .hexagon-box{
        padding-top: 20px;
        width: 80%;
        margin: 0 auto;
    }
</style>