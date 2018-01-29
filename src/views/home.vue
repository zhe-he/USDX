<template>
    <div>
        <div class="topNav">
            <img src="images/logo.png"/>
            <ul class="clearfix">
                <li><a href="javascript:;" class="anchor-hd active">Home</a></li>
                <li><a href="javascript:;" class="anchor-hd">Whitepaper</a></li>
                <li><a href="javascript:;" class="anchor-hd">About USDX</a></li>
                <li><a href="javascript:;" class="anchor-hd">Phases</a></li>
                <li><a href="javascript:;" class="anchor-hd">Team</a></li>
                <li><a href="javascript:;" class="anchor-hd">Partners</a></li>
            </ul>
        </div>
        <div class="indexSection clearfix">
            <div class="height110"></div>
            <div class="indexBox">
                <div class="indexContent">
                    <h2>USDX</h2>
                    <p>The Protocol for Decentralized<br/>
                        Stablecoin Central Bank<br/>
                        in the Community</p>
                    <a class="whitePaper">Whitepaper  Download</a>
                </div>

            </div>
        </div>

        <div class="aboutUSDX clearfix">
            <h2 class="title">
                <i class="line_icon left_line"></i>
                <span>ABOUT USDX</span>
                <i class="line_icon right_line"></i>
            </h2>
            <div class="aboutContent"></div>
        </div>
        <!-- <div class="teamBox">

        </div>-->
        <!--TEAM-->
        <div class="teamBox clearfix">
            <h2 class="title">
                <i class="line_icon left_line"></i>
                <span>TEAM</span>
                <i class="line_icon right_line"></i>
            </h2>
                <div class="teamMember">
                    <!--team one-->
                    <div class="itemOne clearfix">
                        <div class="intro">
                            <h2><span class="big">01</span>&nbsp;/&nbsp;<span class="small">04</span>&nbsp;&nbsp;&nbsp;&nbsp;Richard Tiutiun</h2>
                            <p>Fanatical genius of blockchain technology and hacker born in Ukraine Designed and developed XOR project and stablecoin lab after drop out from UC Berkley, and focus on the research of next generation of currency.
                            </p>
                        </div>
                        <div class="teamPic">
                            <img src="images/team_one.png"/>
                        </div>
                        <span class="bigCapitial"></span>
                    </div>
                    <div class="height20"></div>
                    <!--team two-->
                    <div class="itemTwo clearfix">
                        <div class="intro">
                            <h2><span class="big">02</span>&nbsp;/&nbsp;<span class="small">04</span>&nbsp;&nbsp;&nbsp;&nbsp;Lucas Porco</h2>
                            <p>Experienced lawyer focus on the compliance of blockchain and cryptocurrency Ph.D candidate of Law at University of Toronto Top-level participation in the design of legal frameworks for several cryptocurrencies</p>
                        </div>
                        <div class="teamPic">
                            <img src="images/team_two.png"/>
                        </div>
                        <span class="bigCapitial"></span>
                    </div>
                    <!--team three-->
                    <div class="itemThree clearfix">
                        <div class="intro">
                            <h2><span class="big">03</span>&nbsp;/&nbsp;<span class="small">04</span>&nbsp;&nbsp;&nbsp;&nbsp;Michael Gord</h2>
                           <p>Professional blockchain consultant expert and product strategy expert In charge of strategic planning, business expansion and cooperation with regulators, banks and other institutions and departments of USDX project.</p>
                        </div>
                        <div class="teamPic">
                            <img src="images/team_three.png"/>
                        </div>
                        <span class="bigCapitial"></span>
                    </div>
                   <div class="height60"></div>
                   <!--team four-->
                   <div class="itemFour clearfix">
                        <div class="intro">
                            <h2><span class="big">04</span>&nbsp;/&nbsp;<span class="small">04</span>&nbsp;&nbsp;&nbsp;&nbsp;Ada Tie</h2>
                           <p>Graduated from University of Toronto and London School of Economics Not only a financial practitioner but also a brand expert Has rich brand and marketing experience in art curatorial, luxury marketing and private banking, and applies it to the field of cryptocurrency.</p>
                        </div>
                        <div class="teamPic">
                            <img src="images/team_four.png"/>
                        </div>
                        <span class="bigCapitial"></span>
                    </div>
                </div>
        </div>
        <hexagon></hexagon>
        <div class="partenersBox">
            <h2 class="title">
                <i class="line_icon left_line"></i>
                <span>PARTENERS</span>
                <i class="line_icon right_line"></i>
            </h2>
            <div class="itemContainer">
                <ul>
                    <li :key="item" v-for="item in 5">
                        <a href="javascript:;">
                            <img :src="'images/company/parterners_'+item+'.png'" alt="">
                        </a>
                    </li>
                </ul>
                <ul>
                    <li :key="item" v-for="item in 5">
                        <a href="javascript:;">
                            <img :src="'images/company/parterners_'+(20+item)+'.png'" alt="">
                        </a>
                    </li>
                </ul>
                <ul>
                    <li :key="item" v-for="item in 5">
                        <a href="javascript:;">
                            <img :src="'images/company/parterners_'+(30+item)+'.png'" alt="">
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <footer class="footerBox">
            <div class="wrapper clearfix">
                <p class="bottomLogo"><img src="images/bottom_logo.png"></p>
                <div class="clearfix linkBox">
                    <a href="javascript:;"  class="icon icon_facebook"></a>
                    <a href="javascript:;" target="_blank" class="icon icon_f"></a>
                    <a href="javascript:;" target="_blank" class="icon icon_msg"></a>
                    <a href="javascript:;" target="_blank" class="icon icon_m"></a>
                    <a href="javascript:;" target="_blank" class="icon icon_github"></a>
                    <a href="javascript:;" target="_blank" class="icon icon_reddit"></a>
                    <a href="javascript:;" target="_blank" class="icon icon_medium"></a>
                </div>
                <p class="copyRight">©️USDX 2017.All Rights Reserved.</p>
            </div>
        </footer>
    </div>
</template>

<script type="text/javascript">
    import Hexagon from './hexagon';

    export default {
        data(){
            return {
                icons: {}
            }
        },
        components: {
            Hexagon
        }
    }
</script>

<style lang="scss">

</style>