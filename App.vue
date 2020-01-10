<template>
    <div>
        <div class="innerBox">
             {{startData}}
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            startData:'hello world'
        }
    }
}
</script>
<style lang="less">
    .innerBox {
        color: red;
    }
</style>