let pizza="pizza"
let pasta="pasta"
let burger="burger"
let food = prompt("رقم الطلب؟");




if(food == "0"){
console.log(pizza);
}


if(food == "1"){
console.log(pasta);
}



if(food == "2"){
console.log(burger);
}

firstnumber =prompt("ادخل الرقم الاول");


secondnumber =prompt("ادخل الرقم الثاني");

calculator =prompt("اختر العمليه الحسابيه");


let x =parseInt(firstnumber);
let y =parseInt(secondnumber);

let answer = null ;

if( x && y ){
    
    if (type == "+" )
{answer = x + y
console.log(answer);
} 

else if  (type == "-" )
{answer = x - y
console.log(answer);} 

 else if  (type == "*" )
{answer = x * y
console.log(answer);} 

else if  (type == "/" )
{answer = x / y
console.log(answer);}
else{
console.log("هناك خطأ")
}
}
else{
console.log("هناك خطأ")}





let age = 15;
console.log(age);


if(age >=4 && age <=6){
    console.log("انت في الروضه") 
}else if(age >=7 && age <=18){
    console.log("انت في المدرسه") 
}else if(age >=19 && age <=26){
    console.log("انت في الجامعه")
 }else {console.log("انت لا تستوفي الشروط")}
 