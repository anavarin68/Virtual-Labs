const questions = [
    {
        question: "What is the best material used for making connecting wires?",
        answers: [
            { 
                text: "Copper", correct: true
            },
            { 
                text: "Constantan", correct: false
            },
            { 
                text: "Nichrome", correct: false
            },
            { 
                text: "Tungsten", correct: false
            },
        ]
    },
    
    {
        question: "Two wires A and B are made of same material has equal length and A is having twice the area of B. Which of the following is true in this case?",
        answers: [
            { 
                text: "Resistance of B is greater than that of A", correct: true
            },
            { 
                text: "Resistances of A is greater than that of B", correct: false
            },
            { 
                text: "Resistance cannot be predicted", correct: false
            },
            { 
                text: "Resistances of both A and B are equal", correct: false
            },
        ]
    },
    {
        question: "The resistance of the conductor of unit length and unit area of cross section is called?",
        answers: [
            { 
                text: "Conductance", correct: false
            },
            { 
                text: "Specific Resistance", correct: true
            },
            { 
                text: "Capacitance", correct: false
            },
            { 
                text: "Conductivity", correct: false
            },
        ]
    },
    {
        question: "A wire has resistivity ρ, its length is doubled and its area of cross section is halved. What will be the new value of resistivity of the wire?",
        answers: [
            { 
                text: "ρ", correct: true
            },
            { 
                text: "2ρ", correct: false
            },
            { 
                text: "4ρ", correct: false
            },
            { 
                text: "ρ/2", correct: false
            },
        ]
    },
    {
        question: "Calculate the resistance of a copper wire of 50 m long and diameter 1 mm. Resistivity of copper is 1.7 x 10-8 Ωm.",
        answers: [
            { 
                text: "10.8 Ω", correct: false
            },
            { 
                text: "108 Ω", correct: false
            },
            { 
                text: "0.108 Ω", correct: false
            },
            { 
                text: "1.08 Ω", correct: true
            },
        ]
    },
    {
        question: "Conductivity is the reciprocal of _________",
        answers: [
            { 
                text: "Resistivity", correct: true
            },
            { 
                text: "Specific Resistance", correct: false
            },
            { 
                text: "Conductance", correct: false
            },
            { 
                text: "Capacitance", correct: false
            },
        ]
    },
    {
        question: "Find the resistivity of the material of a wire of length 1 m and diameter 2mm, if its resistance is 16 ohms.",
        answers: [
            { 
                text: "4 π x 10⁻⁷ Ωm", correct: false
            },
            { 
                text: "4π x 10⁻⁶ Ωm", correct: false
            },
            { 
                text: "16π x 10⁻⁷ Ωm", correct: false
            },
            { 
                text: "16π x 10⁻⁶ Ωm", correct: true
            },
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