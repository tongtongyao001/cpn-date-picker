<template>
    <div class="datepicker" v-datepicker-outside>
        <input type="text" :value="processedPickerValue">
        <div class="pannel" v-if="isPannelVisible">
             {{visibleDay}}
        </div>
    </div>
</template>
<script>
import * as util from './util'
export default {
    // 自定义指令-聚焦input会显示面板，在整个组件外面blur会隐藏面板
    directives:{
        datepickerOutside :{
            bind:function(el,binding,vnode){
                window.console.log(el,binding,vnode)
                // 给当前元素绑定事件
                let hadelEvent = (e)=>{
                    // window.console.log(e)
                    window.console.log()
                    // e.target
                    // 如果目标在盒子内
                    if(el.contains(e.target)){
                        // 控制只触发一次
                        if(!vnode.context.isPannelVisible){
                            vnode.context.isPannelVisible = true
                        }
                    }else{
                        if(vnode.context.isPannelVisible){
                            vnode.context.isPannelVisible = false
                        }
                    }
                }
                el.hadelEvent = hadelEvent
                document.addEventListener('click',hadelEvent)
            },
            unbind:function(el){
                document.removeEventListener('click',el.hadelEvent)
            }
        }
    },
    data(){
        return {
            isPannelVisible:false,//面板是否显示
        }
    },
    props:{
        pickerValue:{
            type:Date,
            default:()=>new Date()
        }
    },
    computed :{
        processedPickerValue(){
            let {year,month,day} = util.getYearMonthDay(this.pickerValue)
            return `${year}-${month}-${day}`
        },
        visibleDay(){
            // 获取当前的日期
            let {year,month} = util.getYearMonthDay(this.pickerValue)
            let currentMontnStartDay = util.getDay(year,month,1)
            // 获取当前月1号是周几
            window.console.log(currentMontnStartDay)
            // 获取起始时间，
            return currentMontnStartDay
        }
    },
    methods :{
        focus(){
            this.isPannelVisible = true
        },
        blur(){
            this.isPannelVisible = false
        },
    }
}
</script>
<style scoped>

</style>