function compute(num){
    document.cal.answer.value=document.cal.answer.value+=num;
}
function clean(){
    document.cal.answer.value="";
}
function back(){
    var exp =document.cal.answer.value;
    document.cal.answer.value=exp.substring(0,exp.length-1);
}
function equal(){
    var exp =document.cal.answer.value;
    if(exp){
        document.cal.answer.value=eval(exp);
    }
}