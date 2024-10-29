const questions = [
    {
        question: "The resistance offered by the electrolyte between the two electrodes of the cell is:",
        answers: [
            { 
                text: "The internal resistance of the cell", correct: true
            },
            { 
                text: "Sensitivity of the cell", correct: false
            },
            { 
                text: "E.M.F of the cell", correct: false
            },
            { 
                text: "Potential difference of the cell", correct: false
            },
        ]
    },
    
    {
        question: "Which material is suitable for potentiometer wire?",
        answers: [
            { 
                text: "Manganin", correct: false
            },
            { 
                text: "Constantan", correct: false
            },
            { 
                text: "Copper", correct: false
            },
            { 
                text: "Manganin and constantan", correct: true
            },
        ]
    },
    {
        question: "Which one of the following is a scalar quantity?",
        answers: [
            { 
                text: "Potential difference", correct: false
            },
            { 
                text: "Time", correct: true
            },
            { 
                text: "Current", correct: false
            },
            { 
                text: "Volatge", correct: false
            },
        ]
    },
    {
        question: "What is the shape of graph between internal resistance in X axis and external resistance in Y axis?",
        answers: [
            { 
                text: "Straight line", correct: true
            },
            { 
                text: "Parabola", correct: false
            },
            { 
                text: "Hyperbola", correct: false
            },
            { 
                text: "Curve", correct: false
            },
        ]
    },
    {
        question: "What is the device used to measure the potential difference?",
        answers: [
            { 
                text: "Potentiometer", correct: true
            },
            { 
                text: "Voltmeter", correct: false
            },
            { 
                text: "Metre bridge", correct: false
            },
            { 
                text: "Galvanometer", correct: false
            },
        ]
    },
    {
        question: "Why is a potentiometer preferred to a voltmeter to measure voltage in a circuit?",
        answers: [
            { 
                text: "Potentiometer is handy compared to a voltmeter to measure voltage in a circuit.", correct: false
            },
            { 
                text: "Range of voltmeter is small compared to a potentiometer.", correct: false
            },
            { 
                text: "Potentiometer is cheaper.", correct: false
            },
            { 
                text: "No current is drawn by potentiometer during measurement.", correct: true
            },
        ]
    },
    {
        question: "What is potential gradient?",
        answers: [
            { 
                text: "Fall of potential per unit length", correct: true
            },
            { 
                text: "Fall of current per unit voltage", correct: false
            },
            { 
                text: "Fall of current per unit length", correct: false
            },
            { 
                text: "Fall of potential per unit voltage", correct: false
            },
        ]
    },
    {
        question: "What is example for a primary cell?",
        answers: [
            { 
                text: "Leclanche cell", correct: false
            },
            { 
                text: "Dry cell", correct: false
            },
            { 
                text: "Daniel cell", correct: false
            },
            { 
                text: "All of these", correct: true
            },
        ]
    },
    {
        question: "What happens to the internal resistance of a cell when we increase the external resistance?",
        answers: [
            { 
                text: "First increases then decreases", correct: false
            },
            { 
                text: "First decreases and increases", correct: false
            },
            { 
                text: "Increases", correct: true
            },
            { 
                text: "Decreases", correct: false
            },
        ]
    },
    {
        question: "Which of the following is an example for secondary cell?",
        answers: [
            { 
                text: "Daniel cell", correct: false
            },
            { 
                text: "Dry cell", correct: false
            },
            { 
                text: "Leclanche cell", correct: false
            },
            { 
                text: "Lead Accumulator", correct: true
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