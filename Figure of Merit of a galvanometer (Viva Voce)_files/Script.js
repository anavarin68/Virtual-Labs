const questions = [
    {
        question: "Why a moving coil galvanometer is called so?",
        answers: [
            { 
                text: "Because the coil moves along with the magnet.", correct: false
            },
            { 
                text: "Because the coil moves while the magnet remains fixed.", correct: true
            },
            { 
                text: "Because the number of turns of the coil varies with current.", correct: false
            },
            { 
                text: "None of these", correct: false
            },
        ]
    },
    
    {
        question: "How can you increase the sensitivity of a moving coil galvanometer?",
        answers: [
            { 
                text: "By decreasing the number of turns of the coil", correct: false
            },
            { 
                text: "By increasing the number of turns of the coil", correct: false
            },
            { 
                text: "By increasing the area of the coil", correct: false
            },
            { 
                text: "Both b and c", correct: false
            },
        ]
    },
    {
        question: "What is meant by the figure of merit of a galvanometer?",
        answers: [
            { 
                text: "Maximum deflection on the galvanometer", correct: false
            },
            { 
                text: "Voltage required to produce unit deflection on the galvanometer", correct: false
            },
            { 
                text: "Current required to produce unit deflection on the galvanometer", correct: true
            },
            { 
                text: "None of these", correct: false
            },
        ]
    },
    {
        question: "If the current through a galvanometer is, I = Kθ/NAB, then what is the sensitivity of the galvanometer?",
        answers: [
            { 
                text: "S = NAB/Kθ", correct: false
            },
            { 
                text: "S = K/NAB", correct: false
            },
            { 
                text: "S = NAB/K", correct: true
            },
            { 
                text: "None of these", correct: false
            },
        ]
    },
    {
        question: "What is the unit of figure of merit of a galvanometer?",
        answers: [
            { 
                text: "Ampere per division", correct: true
            },
            { 
                text: "Ampere per meter", correct: false
            },
            { 
                text: "Volt", correct: false
            },
            { 
                text: "Ampere", correct: false
            },
        ]
    },
    {
        question: "Choose the incorrect statement from the following.",
        answers: [
            { 
                text: "Galvanometer has positive and negative terminals.", correct: true
            },
            { 
                text: "Galvanometer has positive and negative terminals.", correct: false
            },
            { 
                text: "Figure of merit of a galvanometer is the reciprocal of current sensitivity.", correct: false
            },
            { 
                text: "The resistance of the coil of the galvanometer is called the resistance of the galvanometer.", correct: false
            },
        ]
    },
    {
        question: "What is the figure of merit of the galvanometer if current I produce a deflection θ in it?",
        answers: [
            { 
                text: "I^2/θ", correct: false
            },
            { 
                text: "Iθ", correct: false
            },
            { 
                text: "I/2θ", correct: false
            },
            { 
                text: "I/θ", correct: true
            },
        ]
    },
    {
        question: "A resistance of 900Ω is connected in series with a galvanometer of resistance 100Ω. A potential difference of 1 V produces 100 division deflections in the galvanometer. Find the figure of merit of the galvanometer?",
        answers: [
            { 
                text: "0.5×10^-5 A/div", correct: false
            },
            { 
                text: "10^-5 A/div", correct: true
            },
            { 
                text: "2×10^-5 A/div", correct: false
            },
            { 
                text: "10^-6 A/div", correct: false
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