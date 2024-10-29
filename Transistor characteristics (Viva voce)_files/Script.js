const questions = [
    {
        question: "How many p-n junctions a transistor has?",
        answers: [
            { 
                text: "1", correct: false
            },
            { 
                text: "2", correct: true
            },
            { 
                text: "3", correct: false
            },
            { 
                text: "More than three", correct: false
            },
        ]
    },
    
    {
        question: "What is the condition for the proper transistor action?",
        answers: [
            { 
                text: "The input junction is reverse biased and output junction is forward biased.", correct: false
            },
            { 
                text: "The input junction is forward biased and output junction is reverse biased.", correct: true
            },
            { 
                text: "Both the junctions should be forward biased.", correct: false
            },
            { 
                text: "None of these", correct: false
            },
        ]
    },
    {
        question: "Why the thickness of base section of a transistor made small?",
        answers: [
            { 
                text: "In order to reduce the recombination of charge carriers passing through it.", correct: true
            },
            { 
                text: "To prevent the flow of charge carriers from emitter to collector.", correct: false
            },
            { 
                text: "To increase the output resistance of the transistor.", correct: false
            },
            { 
                text: "None of these", correct: false
            },
        ]
    },
    {
        question: "What is the current amplification factor (α) for a common emitter configuration at constant V(CE)?",
        answers: [
            { 
                text: "α = ΔI(E) / ΔI(B)", correct: false
            },
            { 
                text: "α = ΔI(C) / ΔI(E)", correct: false
            },
            { 
                text: "α = ΔI(C) / ΔI(B)", correct: true
            },
            { 
                text: "α = ΔI(B) / ΔI(C)", correct: false
            },
        ]
    },
    {
        question: "Choose the correct relation between the current gain of common base and common emitter configurations from the following.",
        answers: [
            { 
                text: "β = α/(1+ α)", correct: false
            },
            { 
                text: "β = α/(1- α)", correct: true
            },
            { 
                text: "β = 1/(1- α)", correct: false
            },
            { 
                text: "None of these", correct: false
            },
        ]
    },
    {
        question: "Which of the following is not an application of a transistor?",
        answers: [
            { 
                text: "Amplifier", correct: false
            },
            { 
                text: "Switch", correct: false
            },
            { 
                text: "Oscillator", correct: false
            },
            { 
                text: "All of these", correct: true
            },
        ]
    },
    {
        question: "Why a common emitter transistor is preferred over a common base transistor?",
        answers: [
            { 
                text: "Because the current gain in CE mode is much larger than that in CB mode.", correct: true
            },
            { 
                text: "Because the thickness of emitter section is much larger than that of base section.", correct: false
            },
            { 
                text: "Because of the infinite input resistance of common base transistor.", correct: false
            },
            { 
                text: "Because the current gain in CB mode is much larger than that in CE mode.", correct: false
            },
        ]
    },
    {
        question: "How does the collector current in a junction transistor changes when the base region has large size and is heavily doped?",
        answers: [
            { 
                text: "Increase", correct: false
            },
            { 
                text: "Decrease", correct: true
            },
            { 
                text: "No changes occur", correct: false
            },
            { 
                text: "Change if the base is p-type", correct: false
            },
        ]
    },
    {
        question: "In which region the doping concentration of a transistor is the highest?",
        answers: [
            { 
                text: "Collector", correct: false
            },
            { 
                text: "Base", correct: false
            },
            { 
                text: "Emitter", correct: true
            },
            { 
                text: "All regions have equal doping concentration.", correct: false
            },
        ]
    },
    {
        question: "What is the current gain for a transistor in common emitter configuration, where I(E) = 4.2 mA and I(C) = 4 mA?",
        answers: [
            { 
                text: "1.05", correct: false
            },
            { 
                text: "1.95", correct: false
            },
            { 
                text: "0.105", correct: false
            },
            { 
                text: "0.95", correct: true
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