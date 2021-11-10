//JS :)

function insert(num){
    document.form2.answer.value = document.form2.answer.value + num;
}
function equal(){
    var exp = document.form2.answer.value;
    if(exp){
        document.form2.answer.value = eval(exp);
    }
}