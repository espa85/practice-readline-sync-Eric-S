/*
Values, Data Types, and Operations | Lesson 4

Practice: readline-sync

Instructions

Create a command-line quiz application that tests students on knowledge from the
Values, Data Types, and Operations module.

Your application should:
1. Use the readline-sync node module to ask users questions and collect their responses.
2. Prompt the user for their name and greet them.
3. Use readline-sync.question() to ask the user 5 questions that test their knowledge
of Values, Data Types, and Operations.
        ○ At least one of your questions should prompt the user for a number.
4. Store the user’s answers in variables.
5. Print the value of those answers back to the user.

Setup
1. Make sure you install readline-sync following the instructions in the
Lesson: Values, Data Types, and Operations - 4.
2. For this activity, you will create your own repository to store your code:
1. Create a new repository.
2. Name it: practice-readline-sync-[Your First Name]-[Your Last Initial]
3. Make sure the repository is public.
4. Clone the repository to your local machine.
5. Start working on the code.
6. When you are finished, commit your changes and push them to your
repository.

Submission
Submit the url for your GitHub repo in the field below.

*/

const readline = require('readline-sync');

console.log("Please enter your first and last name.")

let firstName = readline.question("What is your first name? ");
let lastName = readline.question("What is your last name? ");

console.log("Hello " + firstName + " " + lastName + "!");
console.log("Please answer the following questions when prompted:");

let wrongAnswer = 0;
let rightAnswer = 0;

// Question 1 - Identify the Data Type
let valueOne = "42";
let questOne = readline.question("\n1. What is the data type of the variable x if: let x = \"42\" ? ");
let correctAnswerOne = "string";

if (questOne.toLowerCase() === correctAnswerOne) {
    console.log("Your answer was: " + questOne + ".  Congratulations " + firstName + ", that answer is Correct!");
    rightAnswer++;
} else {
    console.log("Incorrect. The correct answer is:", correctAnswerOne);
    wrongAnswer++;
}

// Question 2 - Type Coercion in Arithmetic
let a = "5";
let b = 2;
let correctAnswerTwo = 10;
console.log("\nlet a = \"5\"; \nlet b = 2; \nlet c = a * b;")
let questTwo = readline.question("\n2. What is the result of c? ");
if (Number(questTwo) === correctAnswerTwo) {
    console.log("Your answer was: " + questTwo + ".  Congratulations " + firstName + ", that answer is Correct!");
    rightAnswer++;
} else {
    console.log("Incorrect. The correct answer is:", correctAnswerTwo);
    wrongAnswer++;
}

// Question 3 - User Input Prompt
let input = readline.question("\n3. Enter a number: ");
let userInput = Number(input)
let numberResult = userInput + 10;
if (!isNaN(userInput)) {
    console.log("Your number plus 10 is:", numberResult);
    console.log("Congratulations, you've earned a free point!");
    console.log("(Note: if your input wasn't a number, you'll see NaN)");
    rightAnswer++;
}
else {
    console.log("Not sure why you didn't it, but you should have entered a number.");
    wrongAnswer++;
}

// Question 4 - Boolean Conversion
let correctAnswerFour = "true";
let questFour = readline.question('\n4. What is the result of Boolean("false")? (true/false) ');
if (questFour.toLowerCase() === correctAnswerFour) {
    console.log("Your answer was: " + questFour + ".  Congratulations " + firstName + ", that answer is Correct!");
    rightAnswer++;
} else {
    console.log("Incorrect. The correct answer is:", correctAnswerFour);
    wrongAnswer++;
}

// Question 5 - Null vs Undefined
console.log("\nThere are two parts to Question 5, so make sure you answer properly!")
let questFiveA = readline.question("\nIn a program, you see the following line:\n\nlet c = null;\n\n5a. What is the data type for c? ");
if (questFiveA.toLowerCase() === "object") {
    console.log("\nYour answer to 5a is: " + questFiveA + " is correct! Congratulations " + firstName + "!");
    rightAnswer++;
} else {
    console.log("\n5a is incorrect. The correct answer is: object");
    wrongAnswer++;
}

let questFiveB = readline.question("\nIn a different program, you see the following line:\n\nlet d;\n\n5b. What is the data type of d? ");
if (questFiveB.toLowerCase() === "undefined") {
    console.log("\nYour answer to 5b is: " + questFiveB + " is correct! Congratulations " + firstName + "!");
    rightAnswer++;
} else {
    console.log("\n5b is incorrect. The correct answer is: undefined");
    wrongAnswer++;
}

// Question 6 - Addition vs Concatenation
let correctAnswerSix = "55";
let correctTypeSix = "string";
console.log("\nThere are two parts to Question 6 also, so make sure you answer properly!")

let questSixA = readline.question('\nlet e = 5 + "5";\n\n6a. What is the result of 5 + "5"? ');
if (questSixA === correctAnswerSix) {
    console.log("Your answer to 6a is: " + questSixA + " is correct! Congratulations " + firstName + "!");
    rightAnswer++;
} else {
    console.log("6a is incorrect. The correct answer is:", correctAnswerSix);
    wrongAnswer++;
}

let questSixB = readline.question("\n6b. What is the data type of the result from Quesetion 6a? ");
if (questSixB.toLowerCase() === correctTypeSix) {
    console.log("\nYour answer to 6b is: " + questSixB + " is correct! Congratulations " + firstName + "!");
    rightAnswer++;
} else {
    console.log("\n6b is incorrect. The correct answer is:", correctTypeSix);
    wrongAnswer++;
}




console.log("\nCongratulations " + firstName + " for finishing the quiz!");
let inquireResults = readline.question("\nWould you like to know your results? (yes/no) ");
if (inquireResults.toLowerCase() === "yes") {
    let totalPoints = (rightAnswer + wrongAnswer);
    let yourScore = (rightAnswer / totalPoints * 100).toFixed(0);
    console.log("\nYou earned " + rightAnswer + " points out of " + totalPoints + ".");
    console.log("\nYour score is: " + yourScore + "%");
}
else {
    console.log("Good Bye!");
}