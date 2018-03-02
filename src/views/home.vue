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
        <!--<div ref="nav-home" class="indexSection clearfix">
            &lt;!&ndash;<div class="height110 height_mobile_40"></div>&ndash;&gt;
            <div class="indexBox">
                <div class="indexContent">
                    <h2><i class="icon iconfont icon-USDX"></i></h2>
                    <p>The Protocol for Decentralized<br/>Stablecoin</p>
                    <div class="whitePaper">
                        &lt;!&ndash;<span class="bg"></span>&ndash;&gt;
                        <a href="whitepaper/USDX Whitepaper.pdf" target="_blank">WHITE PAPER</a>
                        <a href="whitepaper/USDX Deck.pdf" target="_blank" class="deck">DECK</a>
                    </div>
                    &lt;!&ndash;<a class="commmuity" target="_blank" href="https://t.me/NewMoneyUSDX">Join our commmuity</a>&ndash;&gt;
                    &lt;!&ndash;<a class="whitePaper deck" href="deck/" target="_blank">Deck</a>&ndash;&gt;
                </div>

                <div class="indexBox-line">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>-->
        <div style="height: 100px;"></div>
        <div ref="nav-about">
            <FatalProblems></FatalProblems>
        </div>


        <telegramDialog></telegramDialog>
    </div>
</template>

<script type="text/javascript">
    import FatalProblems from './fatalProblems';
    import Support from './support';
    import Hexagon from './hexagon';
    import Phases from './phases';
    import Parteners from './parteners';
    import Aboutusdx from './Aboutusdx';
    import homeData from '../data/home';
    import footers from './footers';
    import telegramDialog from './telegramDialog';
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
                this.resize();
            })
        },
        methods:{
            resize() {
                this.setScreen();
                window.addEventListener('resize',this.setScreen);
            },
            setScreen() {
                var w = window.innerWidth;
                this.$refs["nav-home"].style.width = w + 'px';
                this.$refs["nav-home"].style.height = window.screen.height +'px';
                if (w > 720) {
                     this.$refs["screen"].style.height = window.screen.height +'px';
                } else {
                    this.$refs["screen"].style.height = 'auto';
                }
            },
            to2(item,index) {
                this.showNav = false;
                this.to(item,index);
            },
            navTab() {
                this.showNav = !this.showNav;
            },
            to(item,index){
                var T = this.$refs[item.ref].getBoundingClientRect().top;
                var t = document.documentElement.scrollTop||document.body.scrollTop;
                this.curpage = index;
                scrollMove({y:t+T})
            },
            scroll() {
                var arr = ['nav-home','nav-about','nav-phases','nav-team','nav-supports','nav-advisors','nav-parteners'];
                window.addEventListener('scroll', () => {
                    for (var i = 0; i < arr.length; i++) {
                        var rect = this.$refs[arr[i]].getBoundingClientRect();
                        if (rect.top>=0 && rect.top+rect.height>=0) {
                            this.curpage = i;
                            return ;
                        }
                    }
                    this.curpage = arr.length - 1;

                }, false);
            }
        },
        components: {
            FatalProblems,
            Support,
            Hexagon,
            Phases,
            Parteners,
            Aboutusdx,
            footers,
            telegramDialog
        }
    }
</script>

<style lang="scss">
    .indexBox{
        position: relative;
        z-index: 10;

        .indexBox-line div{
            position: absolute;
            left: 45%;
            width: 60px;
            height: 2px;
            background: linear-gradient(left, rgba(255,182,193, 1), rgba(255,182,193, 0));
            animation: tlf 3s ease infinite;
            opacity: 0;
            &:nth-child(1){
                top: 15%;
            }
            &:nth-child(2){
                top: 44%;
                animation-delay: 1s;
            }
            &:nth-child(3){
                top: 90%;
                animation-delay: 2s;
            }
        }
    }
    .hexagon-warp{
        padding-top: 30px;
        width: 80%;
        margin: 0 auto;
        box-sizing: border-box;
    }

    @keyframes tlf{
        0%{
            opacity: 0.1;
            transform: translate3d(0,0,0);
        }
        50%{
            opacity: 1;
            transform: translate3d(-350%,0,0);
        }
        100%{
            opacity: 0.1;
            transform: translate3d(-700%,0,0);
        }
    }
</style>