const questions = [
    {
        question: "Which is the device used to measure large electric currents in a circuit?",
        answers: [
            { 
                text: "None of these", correct: false
            },
            { 
                text: "Galvanometer", correct: false
            },
            { 
                text: "Voltmeter", correct: false
            },
            { 
                text: "Ammeter", correct: true
            },
        ]
    },
    
    {
        question: "How can we convert a galvanometer into a voltmeter?",
        answers: [
            { 
                text: "By connecting high resistance in parallel with the galvanometer.", correct: false
            },
            { 
                text: "By connecting high resistance in series with the galvanometer.", correct: true
            },
            { 
                text: "By connecting low resistance in series with the galvanometer.", correct: false
            },
            { 
                text: "By connecting low resistance in parallel with the galvanometer.", correct: false
            },
        ]
    },
    {
        question: "Which instrument is used for measuring electrical potential difference between two points in a circuit?",
        answers: [
            { 
                text: "Ammeter", correct: false
            },
            { 
                text: "Voltmeter", correct: true
            },
            { 
                text: "Galvanometer", correct: false
            },
            { 
                text: "Potentiometer", correct: false
            },
        ]
    },
    {
        question: "How can we convert a galvanometer into a ammeter?",
        answers: [
            { 
                text: "None of these", correct: false
            },
            { 
                text: "By connecting low resistance in series with the galvanometer.", correct: false
            },
            { 
                text: "By connecting low resistance in parallel with the galvanometer.", correct: true
            },
            { 
                text: "By connecting high resistance in series with the galvanometer.", correct: false
            },
        ]
    },
    {
        question: "Select a resistance among the following to be connected in parallel to convert a 1 mA full scale deflection galvanometer of resistance 100Ω into an ammeter to read up to 1A?",
        answers: [
            { 
                text: "0.001Ω", correct: false
            },
            { 
                text: "1Ω", correct: false
            },
            { 
                text: "0.111Ω", correct: true
            },
            { 
                text: "Data inadequate", correct: false
            },
        ]
    },
    {
        question: "Write an alternative name of a high resistance galvanometer, used to measure potential difference between two points?",
        answers: [
            { 
                text: "Ammeter", correct: false
            },
            { 
                text: "Voltmeter", correct: true
            },
            { 
                text: "Galvanometer", correct: false
            },
            { 
                text: "Resistor", correct: false
            },
        ]
    },
    {
        question: "A galvanometer of resistance 50Ω shows full scale division for a current of 0.05A. Calculate the length of shunt resistance required to convert the given galvanometer into an ammeter of range 0 to 5A. The diameter of the shunt wire is 2 mm and its resistivity is 5×10^-7Ωm.",
        answers: [
            { 
                text: "3.175 m", correct: true
            },
            { 
                text: "0.3175 cm", correct: false
            },
            { 
                text: "3.175 cm", correct: false
            },
            { 
                text: "2.975 m", correct: false
            },
        ]
    },
    {
        question: "What is the resistance of an ideal ammeter?",
        answers: [
            { 
                text: "One", correct: false
            },
            { 
                text: "Zero", correct: true
            },
            { 
                text: "Infinity", correct: false
            },
            { 
                text: "Cannot determine", correct: false
            },
        ]
    },
    {
        question: "Choose the correct statement from the following",
        answers: [
            { 
                text: "Voltmeter is a parallel combination of galvanometer and shunt resistance.", correct: false
            },
            { 
                text: "Ammeter is a high resistance instrument.", correct: false
            },
            { 
                text: "The resistance of an ideal ammeter is zero.", correct: true
            },
            { 
                text: "The resistance of an ideal ammeter is infinity.", correct: false
            },
        ]
    },
    {
        question: "What resistance must be connected to enable the galvanometer of resistance 5Ω and have a full scale deflection 15 mA to read 1.5V?",
        answers: [
            { 
                text: "90Ω", correct: false
            },
            { 
                text: "95Ω", correct: true
            },
            { 
                text: "9.0Ω", correct: false
            },
            { 
                text: "9.5Ω", correct: false
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