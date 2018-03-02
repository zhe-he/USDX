<template>
    <div class="headBox clearfix">
        <!--<h2 class="title">
            <i></i>
            <span></span>
            <i></i>
        </h2>-->
        <table class="title">
            <tr>
                <td class="left">
                &nbsp;
                </td>
                <td class="content" v-html="title"></td>
                <td class="right">&nbsp;</td>
            </tr>
        </table>
    </div>

</template>

<script type="text/javascript">

    export default {
        data(){
            return {
                title:'',
            }
        },
        props:["title"],
        methods: {

        }
    }
</script>


<style lang="scss">
    .headBox{
        .title{
            text-align: center;
            margin: 0 auto;

            .content{
                font-size: 50px;
                line-height: 60px;
                font-weight: normal;
                margin-left: 18px;
                margin-right: 18px;
                color: #fff;
                display: inline-block;
            }
            .left{
                width: 109px;
                background: url("../../images/left_line_icon.png") no-repeat;
                background-size: 109px 1px;
                height: 40px;
                background-position: left center;
            }
            .right{
                width: 109px;
                background: url("../../images/right_line_icon.png") no-repeat;
                background-size: 109px 1px;
                height: 40px;
                background-position: left center;
            }


        }
    }

    /*720*/
    @media screen and (max-width: 720px) {

    }
</style>