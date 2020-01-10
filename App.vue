<template>
    <div>
        <div class="app">
            <date-picker></date-picker>
        </div>
    </div>
</template>
<script>
import datePicker from './date-picker'
export default {
    data(){
        return {
            datePickerValue:''
        }
    },
    components:{
        datePicker
    }
}
</script>
<style lang="less">
  
</style>