///////Intermediate Javascript Review//////

///Scope///

function theOverlord() {
  var rules = "cry all day";
  var money = "belongs to the overlord"

  function thePowerlessFigurehead() {
    var rules = 'love me plz'

      function theTragicHumanitarian() {
        var rules = 'the golden rule'
      }
  }

  function theJudge() {
    var job = "Wearing cool robes"
  }
}

//Assign your answers to the variables below.
//1. The value of rules if accessed from thePowerlessFigurehead
var ans1 = 'love me plz';
//2. The value of rules if accessed from theJudge
var ans2 = 'cry all day';
//3. The value of job if accessed from theOverlord
var ans3 = undefined;
//4. The value of job if accessed from thePowerlessFigurehead
var ans4 = undefined;
//5. The value of money if accessed from theTragicHumanitarian
var ans5 = 'belongs to the overlord';

///Promises///

//6. Write a function called iPromise. Use $q to create
/////a promise and return the deferred promise. Find the 38th
/////number in the Fibonacci sequence and resolve the promise
/////with the answer when it completes.
/////Fibonacci sequence:
// var fibonacci = function(n) {
//     if(n <= 2) {
//         return 1;
//     } else {
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// };

// myFn.bind(contextObj(param1, param2));
// return myFun(param1, param2);

///Context///

//7. Inside contextIt, inkoke myFn with its context set explicitly
/////to the contextObj, and with the two parameters passed in - return
/////the result.
function contextIt(myFn, contextObj, param1, param2) {
  return myFn(param1, param2).bind(contextObj);
}

//8. Do the same as you did in question 6, except with the
/////paramArray passed in instead
function contextIt2(myFn, contextObj, paramArray) {
  return myFn(paramArray).bind(contextObj);
}

//9. Inside contextIt3, return a new function that permanently
/////links myFn to the contextObj
function contextIt3(myFn, contextObj) {
  return myFn.bind(contextObj);
}


/////Constructor Function/////
var bubbles = 0; //Ignore this line except to mourn our lack of bubbles.

//10. Create a constructor function called Unicorn that takes in
/////parameters called hornColor, magicType, mana, and
/////canFly; inside the function, assign each to an identically
/////named property

function Unicorn(hornColor, magicType, mana, canFly) {
  this.hornColor = hornColor;
  this.magicType = magicType;
  this.mana = mana;
  this.canFly = canFly
}

//question updated 03/30/17
//11. Add a prototype method to Unicorn called castBubbleWrapSpell
/////which adds 100 to the global variable bubbles and takes away
/////15 from mana.

Unicorn.prototype.castBubbleWrapSpell = function() {
  this.mana -= 15;
  bubbles += 100;
}


var Mabel = new Unicorn('blue', 'blue', 100, true)
Mabel;
Mabel.castBubbleWrapSpell()
console.log(Mabel.mana);
bubbles



/////Closures/////

//12. Write a function called greetingMaker which takes in a name
/////and returns a function that takes in a greeting and returns
/////the name and the greeting concatenated together (in that order)

function greetingMaker(name) {
  return (greeting)=> name + greeting;
}

//13. Write a function called countdownMaker which takes in an
/////event name (string) and how many days until it happens.
/////countdownMaker will return a function that,
/////when invoked, takes one off of the days left and returns an
/////object that looks like this:
/////{event: <eventname>, daysLeft: <days left>}
function countdownMaker(eventName, days) {
  return function countDown() {
    var daysRemaining = days -= 1;
    return {
      event: eventName,
      daysLeft: daysRemaining,
    }
  }
}





/////Type Checking/////

//14. Write a function called notMyType which takes in a parameter
/////and returns the type of data of the parameter (number, string,
/////boolean, etc)

function notMyType(data) {
  return typeof data;
}