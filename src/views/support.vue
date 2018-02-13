<template>
    <div class="support-box">

    </div>
</template>

<script type="text/javascript">

    export default {
        data(){
            return {

            }
        },
        methods: {
            showItem(item,index) {
                if (item.title) {
                    this.cur = index;
                }
            }
        }
    }
</script>


<style lang="scss">
    

</style>