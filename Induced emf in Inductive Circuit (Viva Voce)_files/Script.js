const questions = [
    {
        question: "When a bar magnet moves away from the loop whose north pole directed towards coil, what is the direction of the induced current in loop?",
        answers: [
            { 
                text: "Anticlockwise direction", correct: false
            },
            { 
                text: "Clockwise direction", correct: true
            },
        ]
    },
    
    {
        question: "Which of the following does not depend on induced emf in the inductor?",
        answers: [
            { 
                text: "Length of the solenoid", correct: false
            },
            { 
                text: "Rate of change of current", correct: false
            },
            { 
                text: "Area of solenoid", correct: false
            },
            { 
                text: "Current", correct: true
            },
        ]
    },
    {
        question: "Which of the following ways does emf induce in the coil?",
        answers: [
            { 
                text: "Changing the magnetic field", correct: false
            },
            { 
                text: "Changing area of the coil", correct: false
            },
            { 
                text: "Changing the angle between the plane of the coil and the magnetic field", correct: false
            },
            { 
                text: "All of these", correct: true
            },
        ]
    },
    {
        question: "Self-inductance in coil depends on _____?",
        answers: [
            { 
                text: "Area of the coil", correct: false
            },
            { 
                text: "Length of the coil", correct: false
            },
            { 
                text: "Number of turns in the coil", correct: false
            },
            { 
                text: "All of these", correct: true
            },
        ]
    },
    {
        question: "When a coil moves towards the bar magnet whose north pole is facing towards coil what is the direction of the induced current in loop _____?",
        answers: [
            { 
                text: "Anticlockwise direction", correct: true
            },
            { 
                text: "Clockwise direction", correct: false
            },
        ]
    },
    {
        question: "Consider two inductors L1 and L2. Area and length of two inductors are same. Number of turns of 2nd solenoid is two times of number of turns of 1st solenoid(S1). They are placed at larger distance. If current through the two inductors are changing at same rate relation between induced emf in inductor L1(e1) and inductor L2(e2) is ____",
        answers: [
            { 
                text: "e2 = e1", correct: false
            },
            { 
                text: "e2 = 2e1", correct: false
            },
            { 
                text: "e2 = 3e1", correct: false
            },
            { 
                text: "e2 = 4e1", correct: true
            },
        ]
    },
    {
        question: "When DC is connected to inductor emf induces___",
        answers: [
            { 
                text: "When key closes or opens", correct: true
            },
            { 
                text: "Only when key opens", correct: false
            },
            { 
                text: "Always", correct: false
            },
            { 
                text: "None of these", correct: false
            },
        ]
    },
    {
        question: "Bar magnet and current carrying loop are placed at a distance, which of the following options does not induce emf?",
        answers: [
            { 
                text: "Bar magnet moves towards the current carrying loop", correct: false
            },
            { 
                text: "Constant current is passing through the loop", correct: true
            },
            { 
                text: "Current carrying loop moves away from bar magnet", correct: false
            },
            { 
                text: "Current is varying through loop", correct: false
            },
        ]
    },
    {
        question: "When AC is connected to inductor emf induces___",
        answers: [
            { 
                text: "When key closes or opens", correct: false
            },
            { 
                text: "Only when key opens", correct: false
            },
            { 
                text: "Always", correct: true
            },
            { 
                text: "None of these", correct: false
            },
        ]
    },
    {
        question: "Consider two inductors L1 and L2. They are placed at larger distance. Inductance of L2 is greater than inductance of L1. DC is connected to both, emf induced in inductor L1 and L2 when we open key?",
        answers: [
            { 
                text: "Induced emf in Inductor L1 and inductor L2 will be same", correct: false
            },
            { 
                text: "Induced emf in inductor L2> induced emf in L1", correct: true
            },
            { 
                text: "Induced emf will be 0 in inductor L1 and Inductor L2", correct: false
            },
            { 
                text: "Induced emf in inductor L1> induced emf in L2", correct: false
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