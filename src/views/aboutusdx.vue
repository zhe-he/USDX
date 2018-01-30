<template>
    <div class="aboutUSDX clearfix">
        <div class="height120 height_mobile_120"></div>
        <h2 class="title">
            <i class="line_icon left_line"></i>
            <span>ABOUT USDX</span>
            <i class="line_icon right_line"></i>
        </h2>

        <div :key="index" v-show="cur==index" v-for="(item,index) in aboutusdx" class="aboutContent" :class="{'phaseOneBox':index==0,'phaseTwoBox':index==1,'phaseThreeBox':index==2}">
            <div class="content">
                <h2 v-html="item.h2"></h2>
                <div class='line'></div>
                <p v-for="i in item.p" v-html="i"></p>
                <ul v-if="item.ul" class='phaseTwoDesc'>
                    <li :class="i.class" v-html="i.li" v-for="i in item.ul"></li>
                </ul>
                <div class='order'>
                    <span @click="run(-1)">&lt;——</span><span class='big'>0{{index+1}}</span>&nbsp;<span class='small'>/ 0{{aboutusdx.length}}</span><span @click="run(1)">——&gt;</span>
                </div>
            </div>
            <div class="rightPicBox">
                <div class="bottomBase"></div>
                <div v-show="cur==0" class="topImage"></div>
                <div v-show="cur==1" class="topTwoImage"></div>
                <div v-show="cur==2" class="topThreeImage"></div>
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
                this.cur += step;
                if (this.cur > 2) {
                    this.cur = 0;
                }
                if (this.cur < 0) {
                    this.cur = 2;
                }
            }
        }
    }
</script>

<style lang="scss">
    
</style>
