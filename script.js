console.log("Script Loaded!");

var body = document.getElementById("body");

// Task Box Selections
var taskOpen = document.getElementById("task");
var taskBoxes = document.querySelectorAll(".task-box-container div");
var taskBoxesText = document.querySelectorAll(".task-box-container div h2");
var taskOpenBoxContainer = document.getElementById("task-container");

var clickedTaskBox = "";

// Header
var title = document.getElementById("header-title");


// Back Button
var backBtn = document.getElementById("back-btn");

// Task Boxes Event



function taskBoxOpen() {
    taskBoxes.forEach(element => {
        element.addEventListener("click", function taskBoxClick() {
            taskOpen.style.display = "block";

            title.innerText = element.innerText;
            var taskBoxesChild = element.id;

            var taskOpenId = taskBoxesChild.substr(0, (taskBoxesChild.length) - 4);

            var taskOpenSelect = document.getElementById(taskOpenId);
            taskOpenSelect.style.display = "block";
            clickedTaskBox += taskOpenId;


        });
    });
}



//Back Button Event
backBtn.addEventListener("click", function close() {
    taskOpen.style.display = "none";
    title.innerText = "Day-1 [30DaysOfCode]";


    var clickedTaskBoxId = document.getElementById(clickedTaskBox);

    clickedTaskBoxId.style.display = "none";
    clickedTaskBox = "";




});

taskBoxOpen();




//inputs

var evenOddCheckInput = document.getElementById("number-input even-odd-number-check");
var primeNumberCheckInput = document.getElementById("number-input prime-number-check");
var vowelConsonantCountCheckInput = document.getElementById("word-input vowel-consonant-count-check");
var quadraticCalcInput = document.getElementById("number-input quadratic-calc-input");
var palindromeCheckInput = document.getElementById("word-input palindrome-check");
var backgroundColorChangeInput = document.getElementById("background-color-select");


// Logics

//console.log(evenOddCheckInput);

evenOddCheckInput.addEventListener("change", function () {
    var num = evenOddCheckInput.value;
    var output = document.getElementById("even-odd-checker-output");

    if (num % 2 == 0) {
        output.innerText = "This is an even number";
    } else if (num % 2 == 1) {
        output.innerText = "This is an odd number";
    } else {
        output.innerText = "Invalid input";
    }
});

primeNumberCheckInput.addEventListener("change", function () {
    var num = primeNumberCheckInput.value;
    var output = document.getElementById("prime-number-checker-output");
    var divCount = 1;
    var div = 0;
    while (divCount < num) {
        if (num % divCount == 0) {
            div++;
        }
        divCount++;
    }

    if (div <= 2) {
        output.innerText = num + " is a prime number.";
    } else {
        output.innerText = num + " is not a prime number.";
    }
});

palindromeCheckInput.addEventListener("change", function () {
    var word = palindromeCheckInput.value;
    var output = document.getElementById("palindrome-checker-output");
    var i = word.length - 1;
    var reverseWord = "";

    while (i >= 0) {
        reverseWord += word[i]
        i--;
    }

    if (word === reverseWord) {
        output.innerText = word + " is a Palindrome";
    } else {
        output.innerText = word + " is not a Palindrome";
    }
});

vowelConsonantCountCheckInput.addEventListener("change", function () {
    var word = vowelConsonantCountCheckInput.value;
    var output = document.getElementById("vowel-consonant-count");
    var word = word.toUpperCase();
    
    var letters = /[A-Z]/g;
    var newWord = word.match(letters);
    var letterCountCheck;

    var vowels = ["A", "E", "I", "O", "U"];
    var vowelCountCheck;

    var vowelCount = 0;
    var consonantCount;

    for (letterCountCheck = 0; letterCountCheck < newWord.length; letterCountCheck++) {

        for (vowelCountCheck = 0; vowelCountCheck < vowels.length; vowelCountCheck++) {
            
            if (newWord[letterCountCheck] == vowels[vowelCountCheck]) {
                vowelCount += 1;
                break;
            }
        }
        
    }

    var consonantCount = newWord.length - vowelCount;

    output.innerText = "The number of vowel letters are: " + vowelCount + " and the number of consonant letters are: " + consonantCount;

});


quadraticCalcInput.addEventListener("change", function() {
    var eqn = quadraticCalcInput.value;
    var output = document.getElementById("quadratic-calc-output");

    var eqnPattern = /^[\d]{1,}x\^2[\+\-][\d]{1,}x[\+\-][\d]{1,}=0$/gi;

    //Roots of Quadratic Equation
    var a,b,c;
    

    if (eqnPattern.test(eqn)) {
        var a = (eqn.match(/[\d]{1,}x\^2/gi)).toString();
        var b = (eqn.match(/[\+\-][\d]{1,}x/gi)).toString();
        var c = (eqn.match(/[\+\-][\d]{1,}/gi));
        //console.log(a);
        //console.log(b);
        //console.log(c);
    } else {
        output.innerText = "Enter an equation in the form ax^2+bx+c=0";
    }

    //Root Values
    var a = a.slice(0, a.length-3);
    var b = b.slice(0, b.length-1);
    var c = c[1];

    var d = Math.sqrt((Math.pow(b,2)) - (4 * a *c));
    //console.log(d);

    var x1 = (-(b) + d) / (2 *a);
    var x2 = (-(b) - d) / (2 *a);
    //console.log(x1);
    //console.log(x2);

    output.innerText = "The root of the Equation is: " + x1 + " or " + x2; 
    
});

backgroundColorChangeInput.addEventListener("input", function() {
   var color = backgroundColorChangeInput.value;

   body.style.background = color;
});