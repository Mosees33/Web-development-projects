const questions = [
    {
        question: "Which is largest animal in the world?",
        answer: [
            {Text: "Shrak", correct: false},
            {Text: "Blue Whale", correct: true},
            {Text: "Elephant", correct: false},
            {Text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answer: [
            {Text: "Mars", correct: true},
            {Text: "Earth", correct: false},
            {Text: "Neptune", correct: false},
            {Text: "Mercury", correct: false},
        ]
    },
    {
        question: "Which is largest desert in the world?",
        answer: [
            {Text: "Kalahari", correct: false},
            {Text: "Gopi", correct: false},
            {Text: "sahara", correct: false},
            {Text: "Antartica", correct: true},
        ]
    },
    {
        question: "Which is smallest continent in the world?",
        answer: [
            {Text: "Asia", correct: false},
            {Text: "Australia", correct: true},
            {Text: "Arctic", correct: false},
            {Text: "Africa", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState(){  
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
       selectedBtn.classList.add("correct");
       score++;
    }else{
        selectedBtn.classList.add("Incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();
