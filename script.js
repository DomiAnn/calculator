/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function insert(num){
    document.form.textview.value = document.form.textview.value+num;
}

function equal(){
    var exp = document.form.textview.value;
    if(exp){
    document.form.textview.value =eval(exp);
    }
}

function clean(){
    document.form.textview.value="";
}

function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
}
