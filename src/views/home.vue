<template>
    <div id="home">
        <div class="topNav">
            <!--<i class="icon iconfont icon-USDX_logo"></i>-->
            <img src="images/logo.png"/>
            <div class="navBar"></div>
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
            <div class="height110 height_mobile_110"></div>
            <div class="indexBox">
                <div class="indexContent">
                    <h2><i class="icon iconfont icon-USDX"></i></h2>
                    <p>The Protocol for Decentralized<br/>
                        Stablecoin Central Bank<br/>
                        in the Community</p>
                    <a class="whitePaper">Whitepaper  Download</a>
                </div>

            </div>
        </div>
        <phases></phases>
        <aboutusdx></aboutusdx>
        <!-- <div class="teamBox">

         </div>-->
        <!--TEAM-->
        <div class="teamBox clearfix">
            <div class="teamHeader">
                <img src="images/team_header_bg.jpg"/>
            </div>
            <div class="height90 height_mobile_70"></div>
            <h2 class="title">
                <i class="line_icon left_line"></i>
                <span>TEAM</span>
                <i class="line_icon right_line"></i>
            </h2>
            <div class="height120 height_mobile_120"></div>
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
                    <div class="height20"></div>
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
                    <div class="height_mobile_20"></div>
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
                   <div class="height60 height_mobile_120"></div>
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
            <div class="height_mobile_100"></div>
        </div>

        <div class="hexagon-box">
            <hexagon></hexagon>
        </div>
        
        <parteners></parteners>

        <footer class="footerBox">
            <div class="wrapper clearfix">
                <p class="bottomLogo"><img src="images/bottom_logo.png"></p>
                <div class="clearfix linkBox">
                    <a href="javascript:;"  class="icon icon_facebook"><i class="icon iconfont icon-twitter"></i></a>
                    <a href="javascript:;" target="_blank" class="icon icon_f"><i class="icon iconfont icon-facebook"></i></a>
                    <a href="javascript:;" target="_blank" class="icon icon_msg"><i class="icon iconfont icon-mailbox"></i></a>
                    <a href="javascript:;" target="_blank" class="icon icon_m"><i class="icon iconfont icon-medium"></i></a>
                    <a href="javascript:;" target="_blank" class="icon icon_github"><i class="icon iconfont icon-github"></i></a>
                    <a href="javascript:;" target="_blank" class="icon icon_reddit"><i class="icon iconfont icon-reddit"></i></a>
                    <a href="javascript:;" target="_blank" class="icon icon_medium"><i class="icon iconfont icon-emi"></i></a>
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

    export default {
        name:'home',
        data(){
            return {
                prevData:'',
                nextData:'',
                nextIndex:'1',
                curPage:1,
            }
        },
        methods:{
            swiperNext(){
                if(this.curPage <3){

                    this.curPage += 1;

                }

            },
            swiperPrev(){
                if(this.curPage >1){
                    this.curPage -= 1;
                }
            },
            swipeNext(index){
                this.nextData = 'animated fadeInRight';
                this.nextIndex = index;

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