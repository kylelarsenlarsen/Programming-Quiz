let introPrompt = document.querySelector("#introPrompt");
let startButton = document.querySelector("#startButton");
let countdownEl = document.querySelector("#countdown");
let timeRemaining = 90;
let timeInterval = null;
let quizScore = 0;
let scoreEl = document.querySelector("#score"); 
let initialsPrompt = document.querySelector("#initialsPrompt");
let initialsEntryEl = document.querySelector("#initialsEntry");
let submitButton = document.querySelector("#submitButton");
let messageEl = document.querySelector("#message");
let scoreContainer = document.querySelector("#scoreContainer");
let userScoreEl = document.querySelector("#userScore");
let clearButton = document.querySelector("#clearButton");
let backButton = document.querySelector("#backButton");
const questionPrompt = document.querySelector("#questionPrompt");
const question = document.querySelector('#question');
const answer1 = document.querySelector('#answer1')
const answer2 = document.querySelector('#answer2')
const answer3 = document.querySelector('#answer3')
const answer4 = document.querySelector('#answer4')

const questions = [
    {
        inquiry: "1. Which of the following is an advantage of using JavaScript?",
        option: ["Less server interaction", "Immediate feedback to the visitors", "Increased interactivity", "All of the above."],
        answer: "All of the above."
    },
    {
        inquiry: "2. Can you assign a anonymous function to a variable?",
        option: ["true", "false", "sometimes", "Only on Wednesdays."],
        answer: "true"
    },
    {
        inquiry: "3. Which of the following type of variable takes precedence over other if names are same?",
        option: ["global variable", "local variable", "Both of the above.", "None of the above."],
        answer: "local variable"

    },
    {
        inquiry: "4. Which built-in method reverses the order of the elements of an array?",
        option: ["changeOrder(order)", "reverse()", "sort(order)", "None of the above."],
        answer: "reverse()"

    },
    {
        inquiry: "5. Which of the following function of Array object applies a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value?",
        option: ["pop()", "push()", "reduce()", "reduceRight()"],
        answer: "reduceRight()"

    },
    {
        inquiry: "6. Inside which HTML element allows JavaScript insertion?",
        option: ["<script>", "<span>", "<header>", "<div>"],
        answer: "<script>"

    },      
]                    

startButton.addEventListener("click", countDown);
startButton.addEventListener("click", question1);

function countDown() {
    timeInterval = setInterval(function () {
    countdownEl.textContent = timeRemaining;
    timeRemaining--;

    if (timeRemaining === 0) {
        countdownEl.textContent = 0;
        clearInterval(timeInterval);
        enterInitials (); 
    };

    }, 1000);
}  

function deductTime() {
    timeRemaining -= 5;
}

function addPoints() {
    quizScore ++
}

function question1() {
    introPrompt.setAttribute("style", "display: none");
    questionPrompt.setAttribute("style", "display: flex"); 
    
    question.innerText = questions[0].inquiry;
    answer1.innerText = questions[0].option[0];
    answer2.innerText = questions[0].option[1];
    answer3.innerText = questions[0].option[2]
    answer4.innerText = questions[0].answer;
    
    answer1.addEventListener("click", deductTime);
    answer1.addEventListener("click", question2);
    answer2.addEventListener("click", deductTime);
    answer2.addEventListener("click", question2); 
    answer3.addEventListener("click", deductTime);
    answer3.addEventListener("click", question2); 
    answer4.addEventListener("click", addPoints);
    answer4.addEventListener("click", question2);
}   

function question2() {
    question.innerText = questions[1].inquiry;
    answer1.innerText = questions[1].answer;
    answer2.innerText = questions[1].option[1];
    answer3.innerText = questions[1].option[2];
    answer4.innerText = questions[1].option[3];

    answer1.addEventListener("click", addPoints); 
    answer1.addEventListener("click", question3);
    answer2.addEventListener("click", deductTime);
    answer2.addEventListener("click", question3); 
    answer3.addEventListener("click", deductTime);
    answer3.addEventListener("click", question3);
    answer4.addEventListener("click", deductTime);
    answer4.addEventListener("click", question3); 
}

function question3() {
    question.innerText = questions[2].inquiry;
    answer1.innerText = questions[2].option[0];
    answer2.innerText = questions[2].answer;
    answer3.innerText = questions[2].option[2];
    answer4.innerText = questions[2].option[3];

    answer1.addEventListener("click", deductTime);
    answer1.addEventListener("click", question4);
    answer2.addEventListener("click", addPoints); 
    answer2.addEventListener("click", question4); 
    answer3.addEventListener("click", deductTime);
    answer3.addEventListener("click", question4);
    answer4.addEventListener("click", deductTime);
    answer4.addEventListener("click", question4);
}

function question4() {
    question.innerText = questions[3].inquiry;
    answer1.innerText = questions[3].option[0];
    answer2.innerText = questions[3].answer;
    answer3.innerText = questions[3].option[2];
    answer4.innerText = questions[3].option[3];

    answer1.addEventListener("click", deductTime);
    answer1.addEventListener("click", question5);
    answer2.addEventListener("click", addPoints); 
    answer2.addEventListener("click", question5); 
    answer3.addEventListener("click", deductTime);
    answer3.addEventListener("click", question5);
    answer4.addEventListener("click", deductTime);
    answer4.addEventListener("click", question5);  
}

function question5() {
    question.innerText = questions[4].inquiry;
    answer1.innerText = questions[4].option[0];
    answer2.innerText = questions[4].option[1];
    answer3.innerText = questions[4].option[2];
    answer4.innerText = questions[4].answer;
    
    answer1.addEventListener("click", deductTime);
    answer1.addEventListener("click", question6);
    answer2.addEventListener("click", deductTime);
    answer2.addEventListener("click", question6); 
    answer3.addEventListener("click", deductTime);
    answer3.addEventListener("click", question6);
    answer4.addEventListener("click", addPoints); 
    answer4.addEventListener("click", question6);
}

function question6() {
    question.innerText = questions[5].inquiry;
    answer1.innerText = questions[5].answer;
    answer2.innerText = questions[5].option[1];
    answer3.innerText = questions[5].option[2];
    answer4.innerText = questions[5].option[3];
    
    answer1.addEventListener("click", addPoints);
    answer1.addEventListener("click", stopcountdown);
    answer1.addEventListener("click", enterInitials);
    answer2.addEventListener("click", stopcountdown);
    answer2.addEventListener("click", enterInitials); 
    answer3.addEventListener("click", stopcountdown);
    answer3.addEventListener("click", enterInitials);
    answer4.addEventListener("click", stopcountdown); 
    answer4.addEventListener("click", enterInitials);
}

function stopcountdown() {
    countdownEl.textContent = 0;
    clearInterval(timeInterval);
} 

function enterInitials () { 
    questionPrompt.setAttribute("style", "display: none");
    initialsPrompt.setAttribute("style", "display: flex");
    scoreEl.textContent = "Score: " + quizScore;  
}

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    let leaderboard = {
        initials: initialsEntryEl.value,
        score: quizScore,
    };

    if (leaderboard.initials === "") {
        messageEl.textContent = "Invalid Entry";
        return;
    };

localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
showUserScore();
});

function showUserScore () {
    initialsPrompt.setAttribute("style", "display: none");
    scoreContainer.setAttribute("style", "display: flex");
    userScoreEl.textContent = initialsEntryEl.value + " - " + quizScore + "/6";
}    

clearButton.addEventListener("click", clearScores);

function clearScores () {
    userScoreEl.textContent = "";
    localStorage.clear();
    quizScore = 0;
}

backButton.addEventListener("click", function () {
    location.reload()
});