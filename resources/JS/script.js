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
//Falsy : undefined, null, 0, '', Nan(not a number)
//Truthy : not falsy

var names = ['john',1990,'jane'];
//var years = new Array(1990,1969,1948); // another way to creat array

console.log(names[0]);
console.log(names);
console.log(names.length);
names[0] = 'ben';
names[5] = 'mary';
console.log(names);
names[names.length] = 'ali'; // add at the end of the array
console.log(names);

var john = ['john','smith',1990,'teacher',false];
console.log(john);
john.push('blue'); // adds blue at the end of the array
john.unshift('Mr.'); // adds Mr. at the beginning of the array
console.log(john);
john.pop(); // removes the last element
john.shift(); //removes the first element
console.log(john);
console.log(john.indexOf('teacher')); // tell us the index of the elememt if exists
console.log(john.indexOf('designer')); // if not, it returns -1
var isDesigner = john.indexOf('designer') === -1 ?
'john is not a designer' : 'john is a designer';
console.log(isDesigner);

// function declaration
function calAge(bDay){
    console.log(2021-bDay);
    return 2021-bDay;// we can write console.log instead of return
}
var ageJohn = calAge(1998);

//function expression
var whatDoYouDo = function(job, fisrtName){

}

//Objects and properties

var tom = {
    firstName: 'Tom',
    lastName: 'holmes',
    bDay: 1990,
    family: ['jane','mark','bob'],
    isMarried: false,
    calcAge: function(bDay){
        return 2021-bDay;
    },
    calcAge2: function(){
        this.age =  2021-this.bDay;
    }
}; 


console.log(tom);
console.log(tom.firstName);
console.log(tom['firstName']); //another way to call
var x = 'bDay';
console.log(tom[x]);
console.log(tom.calcAge(2000));
tom.calcAge2();
console.log(tom);

//var jane = new Object(); //another way


// Loops & iteration

for(var i = 0; i<10; i++){
    console.log(i);
}
var i = 0;
while(i<names.length){
    if(typeof names[i] !== 'string'){ 
       // continue; // goes to next stage of the loop
       //break;  // stops the entire loop
    }
    console.log(names[i]);
    i++;
}



/*document.getElementById("p1").innerHTML= "new";
var text = document.getElementById("p1").innerHTML;
console.log(text);
console.log(typeof text);*/