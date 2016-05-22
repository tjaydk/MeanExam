//THE USE STRICT IS TO ENSURE YOU DONT HAVE ANY BAD SYNTAX
'use strict'

//x = 5; //THIS WILL CAUSE AN ERROR AS THE VARIABLE x IS NOT DECLARED




//PROTOTYPING
//++++++++++++++++++

var aPrototype = new Object();

aPrototype.sayHello = function(){
    console.log(this.valueOf() + " says Hello");
};

aPrototype.sayHello();





//THIS IN JAVASCRIPT
//++++++++++++++++++

//console.log(this); // HERE IT REFERS TO THE GLOBAL OBJECT

//BY CREATING AN OBJECT THE this KEYWORD WILL POINT TO THE OBJECT ON WHICH IT IS CALLED
var obj = {
    prop: 10,
    info: function(){
        return this;
    }};

//console.log(obj.info().info().info().prop);

//HERE WE CREATE ANOTHER OBJECT WHICH HAS A FUNCTION REFERENCE TO obj's info() FUNCTION'
var obj2 = {
    prop: 15,
    info: obj.info,
    infoOther: obj
}

//console.log(obj2.info().prop);
//console.log(obj2.infoOther.info().prop);






//OBJECT IN JAVASCRIPT
//++++++++++++++++++

console.dir(Object.prototype);






//OBJECT IN JAVASCRIPT
//++++++++++++++++++
(function IIFE(){
    console.log("Hello from IIFE");
}());







//CALLBACKS
//=========

//A CALLBACK FUNCTION IS A FUNCTION PASSED AS AN PARAMETER/ARGUMENT TO ANOTHER FUNCTION TO BE EXCECUTION AT A LATER POINT WIHITN THE FUNCTION

function sayHelle() {
   return "Hello";
}

//WE USE THE call() OR apply() TO PRESERVE THE this REFERENCE
var callObj = {
    callSayHello: function(callback){
        console.log("Within: " + callback.call());
    }
};

//WE CALL THE SAME FUNCTION BOTH DIRECTLY AND AS A CALLBACK - AS WE CAN SEE THE CALLBACK IS EXECUTED LASTLY AS IT IS PROCESSED AT THE END OF
//THE CALLSTACK
console.log("Outside: " + sayHelle());

callObj.callSayHello(sayHelle);