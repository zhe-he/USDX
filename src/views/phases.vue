<template>
    <div class="phases">
        <div class="phases-top"></div>
        <div class="phases-main">
            <div class="phases-l"></div>
            <div class="phases-r">
                <div class="phases-tiping"></div>
                <div class="phases-tiping-main">
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        data() {
            return {}
        }
    }
</script>

<style lang="scss">
    .phases-main{
        display: flex;
    }
    .phases-l,phases-r{
        flex: 1;
    }
    .phases-tiping{
        width: 120px;
        height: 303px;
        background: url('images/phases/1-1.png')
    }
</style>