const questions = [
    {
        question: "Which of the following is the correct relation between electron and hole concentrations of an intrinsic semiconductor?",
        answers: [
            { 
                text: "n(e) = [n(n)]^2", correct: false
            },
            { 
                text: "n(e)> n(n)", correct: false
            },
            { 
                text: "n(e) = n(n)", correct: true
            },
            { 
                text: "n(e)< n(n)", correct: false
            },
        ]
    },
    
    {
        question: "Why do the n- type semiconductors are called so?",
        answers: [
            { 
                text: "Electron concentration is much less than hole concentration.", correct: false
            },
            { 
                text: "Electrons are the charge carriers in n- type semiconductors.", correct: true
            },
            { 
                text: "Because of the absence of holes.", correct: false
            },
            { 
                text: "None of these", correct: false
            },
        ]
    },
    {
        question: "What happens to the width of depletion layer of a p-n junction diode while forward biasing?",
        answers: [
            { 
                text: "Remain fixed", correct: false
            },
            { 
                text: "Increase", correct: false
            },
            { 
                text: "Decrease", correct: true
            },
            { 
                text: "None of these", correct: false
            },
        ]
    },
    {
        question: "How are electrical conductivity (σ) and resistivity (ρ) of a semiconductor material is related?",
        answers: [
            { 
                text: "σ ∝ ρ", correct: false
            },
            { 
                text: "σ ∝ 1/ρ", correct: true
            },
            { 
                text: "σ ∝ ρ2", correct: false
            },
            { 
                text: "σ ∝ ρ-2", correct: false
            },
        ]
    },
    {
        question: "The depletion region of a p-n junction diode is one which consists of",
        answers: [
            { 
                text: "Free charges", correct: false
            },
            { 
                text: "Positive ions", correct: false
            },
            { 
                text: "Immobile charges", correct: true
            },
            { 
                text: "Atoms", correct: false
            },
        ]
    },
    {
        question: "Which of the following is equivalent to a revere biased p-n junction diode?",
        answers: [
            { 
                text: "OFF state of a switch", correct: true
            },
            { 
                text: "ON state of a switch", correct: false
            },
            { 
                text: "A variable resistance", correct: false
            },
            { 
                text: "Amplifier", correct: false
            },
        ]
    },
    {
        question: "Find out the correct statement about semiconductors from the following?",
        answers: [
            { 
                text: "It is crystalline in nature", correct: false
            },
            { 
                text: "It has a negative temperature coefficient", correct: false
            },
            { 
                text: "It has covalent bonding", correct: false
            },
            { 
                text: "All of the above are correct", correct: true
            },
        ]
    },
    {
        question: "What is the type of extrinsic semiconductor obtained by adding a trivalent impurity to an intrinsic semiconductor?",
        answers: [
            { 
                text: "P- type", correct: true
            },
            { 
                text: "N- type", correct: false
            },
            { 
                text: "Either a or b", correct: false
            },
            { 
                text: "None of these", correct: false
            },
        ]
    },
    {
        question: "What is the behavior of an intrinsic semiconductor at absolute zero temperature?",
        answers: [
            { 
                text: "Behaves like an insulator", correct: false
            },
            { 
                text: "No change in its semiconducting nature", correct: false
            },
            { 
                text: "Becomes an extrinsic semiconductor", correct: false
            },
            { 
                text: "Behaves like a metallic conductor", correct: true
            },
        ]
    },
    {
        question: "When a large reverse voltage is applied, the current flowing through a p-n junction diode at room temperature is 0.2µA. Calculate the current when a forward voltage of 0.1 V is applied across the junction?",
        answers: [
            { 
                text: "9.16 A", correct: false
            },
            { 
                text: "0.916 µA", correct: false
            },
            { 
                text: "9.16 µA", correct: true
            },
            { 
                text: "91.6 µA", correct: false
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