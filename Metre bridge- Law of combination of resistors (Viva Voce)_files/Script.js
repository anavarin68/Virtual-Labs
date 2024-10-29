const questions = [
    {
        question: "In a circuit, if the resistors are connected in series, then the current is:",
        answers: [
            {
                text: "Same in every part of the circuit.", correct: true
            },
            { 
                text: "Different in every part of the circuit.", correct: false
            },
            { 
                text: "Inversely proportional to the resistance.", correct: false
            },
            { 
                text: "None of these.", correct: false
            },
        ]
    },
    
    {
        question: "When two resistors are connected in series, what is the number of common points found by a student?",
        answers: [
            { 
                text: "One", correct: true
            },
            { 
                text: "Two", correct: false
            },
            { 
                text: "Three", correct: false
            },
            { 
                text: "Four", correct: false
            },
        ]
    },
    {
        question: "When the three resistances X1, X2 and X3 are connected in series combination, then the effective resistance is, Xs:",
        answers: [
            { 
                text: "Xs=X1+(X2X3)/(X2+X3)", correct: false
            },
            { 
                text: "Xs=(X1+X2+X3)/X1X2X3", correct: false
            },
            { 
                text: "Xs=X1X2X3/(X1+X2+X3)", correct: false
            },
            { 
                text: "Xs=X1+X2+X3", correct: true
            },
        ]
    },
    {
        question: "How is the voltmeter always connected with the circuit?",
        answers: [
            { 
                text: "Series", correct: false
            },
            { 
                text: "Parallel", correct: true
            },
            { 
                text: "Sometimes series, sometimes parallel", correct: false
            },
            { 
                text: "None of these", correct: false
            },
        ]
    },
    {
        question: "Five identical resistances, each 1Ω, are connected in series. What is the effective resistance of this combination?",
        answers: [
            { 
                text: "10Ω", correct: false
            },
            { 
                text: "5Ω", correct: true
            },
            { 
                text: "1Ω", correct: false
            },
            { 
                text: "0.1Ω", correct: false
            },
        ]
    },
    {
        question: "When two resistances R₁ and R₂ are connected in parallel their equivalent resistance is:",
        answers: [
            { 
                text: "R= (R₁-R₂)/(R₁R₂)", correct: false
            },
            { 
                text: "R= (R₁R₂)/(R₁+R₂)", correct: true
            },
            { 
                text: "R= (R₁R₂)/(R₁-R₂)", correct: false
            },
            { 
                text: "R= (R₁+R₂)/(R₁R₂)", correct: false
            },
        ]
    },
    {
        question: "When the three resistances are connected in parallel combination, then the effective resistance ________.",
        answers: [
            { 
                text: "Increase", correct: false
            },
            { 
                text: "Decrease", correct: true
            },
            { 
                text: "may increase or decrease depends up on the material", correct: false
            },
            { 
                text: "Does not change", correct: false
            },
        ]
    },
    {
        question: "A student combines the two resistors in parallel combination, the number of common point he found is",
        answers: [
            { 
                text: "One", correct: false
            },
            { 
                text: "Two", correct: true
            },
            { 
                text: "Three", correct: false
            },
            { 
                text: "Four", correct: false
            },
        ]
    },
    {
        question: "Two or more resistors are said to be in parallel if one end of a resistor is connected to",
        answers: [
            { 
                text: "Other end of the other resistor", correct: false
            },
            { 
                text: "One end of the other resistor", correct: true
            },
            { 
                text: "One end of the voltmeter", correct: false
            },
            { 
                text: "None of these", correct: false
            },
        ]
    },
    {
        question: "Ten identical resistances each 1Ω are connected in parallel. This combination has an effective resistance of:",
        answers: [
            { 
                text: "0.1Ω", correct: true
            },
            { 
                text: "1Ω", correct: false
            },
            { 
                text: "5Ω", correct: false
            },
            { 
                text: "10Ω", correct: false
            },
        ]
    }
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
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
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
        selectedBtn.classList.add("incorrect");
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
    nextButton.innerHTML = "Take Test Again";
    nextButton.style.display = "block";
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
})
startQuiz();