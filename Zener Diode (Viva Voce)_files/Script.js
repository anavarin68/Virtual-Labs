const questions = [
    {
        question: "Zener diodes are:",
        answers: [
            { 
                text: "Specially doped p–n junctions", correct: true
            },
            { 
                text: "Lightly doped p–n junctions", correct: false
            },
            { 
                text: "None of the above", correct: false
            },
            { 
                text: "Normally doped p–n junctions", correct: false
            },
        ]
    },
    
    {
        question: "A Zener diode is based on the principle of:",
        answers: [
            { 
                text: "Diffusion of charge carriers across the junction", correct: false
            },
            { 
                text: "Thermionic emission", correct: false
            },
            { 
                text: "Tunneling of charge carriers across the junction", correct: true
            },
            { 
                text: "None of the above", correct: false
            },
        ]
    },
    {
        question: "If the load resistance increases in a Zener regulator, the Zener current _______",
        answers: [
            { 
                text: "Decreases", correct: false
            },
            { 
                text: "Increases", correct: true
            },
            { 
                text: "Stays the same", correct: false
            },
            { 
                text: "Equals the source voltage divided by series resistance", correct: false
            },
        ]
    },
    {
        question: "Which one of the following materials is usually used to make a Zener diode:",
        answers: [
             { 
                text: "Magnesium", correct: false
            },
            { 
                text: "Sodium", correct: false
            },
            { 
                text: "Silicon", correct: true
            },
            { 
                text: "Carbon", correct: false
            },
        ]
    },
    {
        question: "Which of these is the best description of a Zener diode?",
        answers: [
            { 
                text: "It is a constant voltage device.", correct: true
            },
            { 
                text: "It works in the forward region.", correct: false
            },
            { 
                text: "It is a constant electric current device.", correct: false
            },
            { 
                text: "It is a rectifier diode.", correct: false
            },
        ]
    },
    {
        question: "The load voltage is approximately constant when a Zener diode is _______.. ",
        answers: [
            { 
                text: "Reverse biased", correct: false
            },
            { 
                text: "Forward biased", correct: false
            },
            { 
                text: "Unbiased", correct: false
            },
            { 
                text: "Operating in breakdown region", correct: true
            },
        ]
    },
    {
        question: "What is true about the breakdown voltage in a Zener diode?",
        answers: [
            { 
                text: "It decreases when electric current increases", correct: false
            },
            { 
                text: "It destroys the diode", correct: false
            },
            { 
                text: "It equals the electric current times the resistance", correct: false
            },
            { 
                text: "It is approximately constant", correct: true
            },
        ]
    },
    {
        question: "A junction diode which can operate in the reverse breakdown voltage region is called?",
        answers: [
            { 
                text: "Varactor diode", correct: false
            },
            { 
                text: "Zener diode", correct: true
            },
            { 
                text: "Tunnel diode", correct: false
            },
            { 
                text: "Schottky diode", correct: false
            },
        ]
    },
    {
        question: "The value of reverse current after the zener breakdown is called?",
        answers: [
            { 
                text: "Reverse current", correct: false
            },
            { 
                text: "Zener current", correct: true
            },
            { 
                text: "Forward current", correct: false
            },
            { 
                text: "Direct current", correct: false
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