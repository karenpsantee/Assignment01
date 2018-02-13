/*eslint-env browser*/
//	STEP1
//	varsomeMonth;
//	functiontheMonth;		//functiontoreturncurrentmonth
//	currentMonth;			//aconstant
//	varsummerMonth;			//anarrayofsummermonths
//	MyLibraryAFunction		//afunction
//
/*
//				STEP02
var a, b, c, sevenIs, isTrue;
sevenIs = 7;								//	numeric literal
sevenIs = '7';								//	string literal
isTrue = true;								//  boolean								
var x = null;								//	null
//
//					STEP03
var a, b, c, x;
var x = ((a + b) / c);						//	complex expression #1
var typeOfAnimal = "cat";
var breed = "Bengal ";
window.console.log("I just saw the coolest " + breed + typeOfAnimal + "!");	// complex variable expression #2
//					STEP04
var chFirstNm, chLastNm, chAddr, chCity, chState;				// Hungarian Notation
var zipCode, yrsOfAge, referralSrc, optInOut;					// lowerCamelCase
//
//					STEP05
var chFirstNm = "Karen";
var chLastNm = "Potter";
var chAddress = "123 Main Street", chCity = "Santee", zipCode = '92123';
var chState = "CA";
var yrsOfAge = window.prompt("please enter your age");
if (window.confirm("may we contact you?")) {
	window.alert("you said yes");
	optInOut = "YES";
} else {
	window.alert("you said no");
	optInOut = "NO";
}
var referralSrc = "Internet";
window.console.log(chFirstNm + " " + chLastNm + " \n" + chAddress + "\n" + chCity + ", " + chState + " " + zipCode);
window.console.log("referralSrc = " + referralSrc + ", age = " + yrsOfAge + ",  contact you? = " + optInOut);
//
//				STEP06
var cat = "cat";
window.console.log(cat + 9);
window.console.log("number + string = :  " + (typeof cat));
var bool = true;
var stringWs1 = "yes, it really is ";
var stringWs2 = stringWs1 + bool;
window.console.log("stringWs + booleanTrue = : " + stringWs2 + (typeof stringWs2));
var numberWs1 = (9 + true);
window.console.log("number 9  + 1 = : " + numberWs1 + (typeof numberWs1));
//
//									STEP07
window.console.log("STEP07");		//hoisting
car = "Yugo";
var car;
window.console.log("hoisting :  "  + car);
//
//									STEP08				// use esc code to allow single quote
window.console.log("STEP08");
var someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
window.console.log(someString);
//									STEP09
window.console.log("STEP09");
var y = null;
window.console.log("null,     var  : " + y);			//null var
var yourVan;
window.console.log("undefined var :  "  + yourVan);		// undefined var
//
*/
/*
//				STEP10
window.console.log("STEP10");
window.console.log("string, typeof : " + (typeof '400'));
window.console.log("number, typeof : " + (typeof 400));
window.console.log("boolean, typeof: " + typeof true);
window.console.log("object, var :  " + (typeof y));
window.console.log("undefined, typeof :  " + (typeof yourVan));
var myBus = "dodge";
//				step11
window.console.log("STEP11");
window.alert("Hello " +  "Zak Ruvalcaba"  + ", welcome to the JavaScript class!");
//				step12
window.console.log("STEP12");
var name = "K. Potter";
window.alert("Hello " +  name  + ", welcome to the JavaScript class!");
//				step13
window.console.log("STEP13");
var name = "K. Potter";
var course = "JavaScript";
window.alert("Hello " +  name  + ", welcome to the " + course + " class!");
//				step14
window.console.log("STEP14");
var name;
var course = "JavaScript";
window.alert("Hello " +  name  + ", \nWelcome to the " + course + " class!");
//				step15
window.console.log("STEP15");
var name = window.prompt("what is your name");
var course = "JavaScript";
window.alert("Hello " +  name  + ", \nWelcome to the " + course + " class!");
//				step16
window.console.log("STEP16");
var name = window.prompt("what is your name");
var course = window.prompt("What class are you taking?");
window.alert("Hello " +  name  + ", \nWelcome to the " + course + " class!");
*/
/*
//				step17
window.console.log("STEP17");
var x = 10;
var y = 20;
window.console.log(x + y);
//				step18
window.console.log("STEP18");
var x = 20;
window.console.log(x += 20);
//				step19
window.console.log("STEP19");
var x = 20;
window.console.log(x *= 5);
//				step20
window.console.log("STEP20");
var x = (20 % 3);
window.console.log(x /= 1);
//				step21
window.console.log("STEP21 return true");
var x = 6;
var y = (x = ++x);  //adds 1 before assigment, result in y, 7
var savex = x;
window.console.log("expecting true x === y:  " + (x === y));
//				step22
window.console.log("STEP22");
var x = 6;
var y = (x = x++);  // adds 1 after assignment, x returns as 6
var z2 = x;
window.console.log("expecting false(6 === 7) " + (savex === x));
//				STEP23
window.console.log("STEP23 show value of Widget");
// Function object that will be used as a constructor
// Create an object using the new keyword
var Widget;
// function new Widget;
var myBus = new Widget();
window.console.log("object,  myBus:  " + typeof myBus);							//=> Object {};
window.console.log("function,  Widget: " + typeof Widget);						//=> function {};
function Widget() {}
// Widget.prototype has a single property called "constructor" 
// which points back to Widget
//				STEP24
window.console.log("STEP24  return true");
window.console.log(Widget.prototype.constructor === Widget);					// true
// Widget.prototype is an object
//				STEP25
window.console.log("STEP25 return false");
window.console.log(Widget.prototype === Widget);	// true
*/