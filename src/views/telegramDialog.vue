<template>
    <div class="telegramBox">
        <a href="https://t.me/USDXBlockchain" target="_blank">JOIN OUR TELEGRAM</a>
    </div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {

            }
        },
        methods: {

        },
        mounted() {

        }
    }
</script>


<style lang="scss">
    .telegramBox{

        a{
            border-radius: 4px;
            background-color: rgb(5, 225, 227);
            width: 190px;
            height: 38px;
            z-index: 3;
            display: block;
            position: fixed;
            bottom: 20px;
            right: 20px;
            font-size: 12px;
            color: #fff;
            line-height: 38px;
            box-sizing: border-box;
            padding-right: 46px;
            text-align: center;
            background-image: url("../../images/telegram_icon.png");
            background-repeat: no-repeat;
            background-position: 148px center;
            background-size: 25px 19px;
            cursor: pointer;
        }
    }
    .圆角矩形_1_拷贝_4 {
        border-width: 0.586px;
        border-color: rgb(5, 225, 227);
        border-style: solid;
        border-radius: 2px;
        background-color: rgb(32, 35, 38);
        position: absolute;
        left: 377px;
        top: 36px;
        width: 112px;
        height: 22px;
        z-index: 362;
    }


    /*720*/
    @media screen and (max-width: 720px) {
        .telegramBox{
            a{
                border-width: 1px;
                border-color: rgb(5, 225, 227);
                border-style: solid;
                border-radius: 2px;
                background-color: rgb(32, 35, 38);
                width: 112px;
                height: 22px;
                z-index: 999;
                display: block;
                position: fixed;
                top: 16px;
                right: 48px;
                font-size: 7px;
                color: #fff;
                line-height: 22px;
                box-sizing: border-box;
                padding-right: 26px;
                text-align: center;
                background-image: url("../../images/telegram_icon.png");
                background-repeat: no-repeat;
                background-position: 87px center;
                background-size: 14px auto;
                cursor: pointer;
            }
        }

    }

</style>