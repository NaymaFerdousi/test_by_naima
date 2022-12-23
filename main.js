// //without function
// var num=16;
// document.write("<br/> Result is :" +num*num);


// //using function
// function square(){
// var num=36;
// document.write("<br/> Result is :" +num*num);
// }
// square();


// var num1=Number(prompt("Enter first number"));
// var num2=Number(prompt("Enter second number"));
// var num3=Number(prompt("Enter second number"));
// function add(numcall){
//     var add=num1+num2+num3;
//     document.write("<br/> Result is :" +add);
//     }
//     add();
// function sub(numcall){
//     var sub=num1-num2-num3;
//     document.write("<br/> Result is :" +sub);
//     }
//     sub();
// function mul(numcall){
//     var mul=num1*num2*num3;
//     document.write("<br/> Result is :" +mul);
//     }
//     mul();
// function div(numcall){
//     var div=num1/num2/num3;
//     document.write("<br/> Result is :" +div);
//     }
//     div();


var num1=Number(prompt("Enter first number"));
var num2=Number(prompt("Enter second number"));
var num3=Number(prompt("Enter second number"));
function mathmatic(){
    document.write("<br/> Addision is :" +(num1+num2+num3));
    document.write("<br/> Substraction is :"+(num1-num2-num3));
    document.write("<br/> Multification is :" +(num1*num2*num3));
    document.write("<br/> Division is :" +(num1/num2/num3));
}
mathmatic();