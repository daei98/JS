console.log('Hello World!');
var firstName = 'ali';
var age = 15;
//comment
/*
also commment*/
console.log('My name is '+ firstName +' and I\'m '+ age +' years old.');
/*alert('This is an alert');
var input = prompt('Enter your input');*/
document.getElementById("makeItRed").style.color = "red"
document.write('this is also a test')
var x= 10;
x += 5;
x -= 5;
x *= 5;
x /= 5;
x %= 5;
//x++;
//var n = x.toString; // Convert a number to a string
//var n = x.toFixed(2) // Convert a number into a string, rounding the number to keep only two decimals
var bool = x==2;//equal to
var bool = x===2;//equal value and equal type
var bool = x==2;//not equal
var bool = x==2;//not equal value or not equal type
var bool = x>=2;//greater than or equal to
console.log(x);
/*if(bool==true){
    alert('TRUE');
}
if(x!=0){
    alert('x is not 0');
}
else{
    console.log('Else');
}*/
if(bool==true || x!=0){
    alert('TRUE');
}
else if(x!=0 && bool==true){
    alert('x is not 0');
}
else{
    console.log('Else');
}
//Another way for if-else
/*bool ? console.log('It works!')
: console.log('else also works!!')*/

age =16;
var drink = age >= 18 ? 'beer' : 'juice';

var job = 'teacher';
switch(job){
    case 'teacher':
    case 'instructor':
        console.log('teaches ppl smth');
        break;
    case 'driver':
        console.log('drives ppl around');
        break;
    default:
        console.log('unemployed');
}
switch(true){
    case age<13:
        console.log('kid');
        break;
    case age >=13 && age <= 20:
        console.log('young');
        break;
    default:
        console.log('old');
}


document.getElementById("p1").innerHTML= "new";
var text = document.getElementById("p1").innerHTML;
console.log(text);
console.log(typeof text);
