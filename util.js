const getYearMonthDay = function(date){
    let year = date.getFullYear()
    let month = date.getMonth()+1
    let day = date.getDate()
    return  {year,month,day}
}
const getDay = function(year,month,day){
    return new Date(year,month,day)
}
export {
    getYearMonthDay,
    getDay
}