<template>
    <div class="aboutUSDX clearfix">
        <div class="height120 height_mobile_120"></div>
        <h2 class="title">
            <i class="line_icon left_line"></i>
            <!--<span>ABOUT USDX</span>-->
            <i class="icon iconfont icon-about_usdx"></i>
            <i class="line_icon right_line"></i>
        </h2>

        <div :key="index" v-show="cur==index" v-for="(item,index) in aboutusdx" class="aboutContent" :class="{'phaseOneBox':index==0,'phaseTwoBox':index==1,'phaseThreeBox':index==2}">
            <transition name="fade">
                <div v-show="cur==index" class="content">
                    <h2 v-html="item.h2"></h2>
                    <div class='line'></div>
                    <p v-for="i in item.p" v-html="i"></p>
                    <ul v-if="item.ul" class='phaseTwoDesc'>
                        <li :class="i.class" v-html="i.li" v-for="i in item.ul"></li>
                    </ul>
                    <div class="order">
                        <a href="javascript:;" @click="run(-1)" class="swiperBtn swiperLeft mobileHide" :class="{'active':cur != 0}">
                            <i class="icon iconfont icon-left_arrow"></i>
                        </a>
                            <div class="number">
                                <i class="icon iconfont big_number_font" :class="{'icon-one':index==0,'icon-two':index==1,'icon-three':index==2}"></i>
                                &nbsp;<span class="small">/ </span><i class="small_number_font icon iconfont icon-three"></i>
                            </div>
                        <a href="javascript:;" @click="run(1)" class="swiperBtn swiperRight mobileHide" :class="{'active':cur != 2}">
                            <i class="icon iconfont icon-right_arrow"></i>
                        </a>
                    </div>
                </div>
            </transition>
            <div class="rightPicBox">
                <div class="bottomBase"></div>
                <transition name="mvleft">
                    <div v-show="cur==0" class="topImage"></div>
                </transition>
                <transition name="mvleft">
                    <div v-show="cur==1" class="topTwoImage"></div>
                </transition>
                <transition name="mvleft">
                    <div v-show="cur==2" class="topThreeImage"></div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import aboutusdxData from '../data/home';

    export default {
        data() {
            return {
                cur: 0,
                aboutusdx: aboutusdxData.aboutusdx
            }
        },
        methods: {
            run(step) {
                var cur = this.cur + step;
                if (cur == -1 || cur == 3) {
                    return ;
                }
                this.cur = cur;
            }
        }
    }
</script>

<style lang="scss">
    .aboutUSDX{
        .icon-about_usdx{
            font-size: 26px;
            float:left;
            font-weight: bold;
            float: left;
            margin-left: 18px;
            margin-right: 18px;
            color: #fff;
            margin-top: 6px;
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .6s;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
    }
    .mvleft-enter-active, .mvleft-leave-active {
        transition: all .6s;
    }
    .mvleft-enter, .mvleft-leave-active {
        transform: translate3d(50%,0,0);
        opacity: 0
    }
</style>
