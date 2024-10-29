const questions = [
    {
        question: "In a potentiometer experiment to compare the emf's of two primary cells, the balancing points obtained as l1 and l2 respectively. If E2 be the emf of the second cell, what is the emf E1 of the other cell?",
        answers: [
            { 
                text: "E1 = (l1×l2)/E2", correct: false
            },
            { 
                text: "E1 = (E2×l1)/l2", correct: true
            },
            { 
                text: "E1 = (E2×l2)/l1", correct: false
            },
            { 
                text: "Data inadequate", correct: false
            },
        ]
    },
    
    {
        question: "What is the use of a potentiometer?",
        answers: [
            { 
                text: "To measure potential difference across two points.", correct: true
            },
            { 
                text: "To measure the resistance of a wire", correct: false
            },
            { 
                text: "To detect the flow of current through a circuit", correct: false
            },
            { 
                text: "None of these", correct: false
            },
        ]
    },
    {
        question: "Which of the following is an example of primary cell?",
        answers: [
            { 
                text: "Leclanche cell", correct: false
            },
            { 
                text: "Dry cell", correct: false
            },
            { 
                text: "Mercury cell", correct: false
            },
            { 
                text: "All of these", correct: true
            },
        ]
    },
    {
        question: "Potentiometer is often called as ideal voltmeter. Why?",
        answers: [
            { 
                text: "Potentiometer is highly sensitive.", correct: false
            },
            { 
                text: "Potentiometer never draws current from the cell whose emf is to be measured.", correct: false
            },
            { 
                text: "Potentiometer can measure very small potential differences.", correct: false
            },
            { 
                text: "All of these", correct: true
            },
        ]
    },
    {
        question: "How can you increase the accuracy of a potentiometer?",
        answers: [
            { 
                text: "By reducing the diameter of the wire.", correct: false
            },
            { 
                text: "By increasing the length of the potentiometer wire.", correct: true
            },
            { 
                text: "By decreasing the voltage applied.", correct: false
            },
            { 
                text: "By increasing the material of wire.", correct: false
            },
        ]
    },
    {
        question: "Which of the following is a factor, on which the emf of a cell depends?",
        answers: [
            { 
                text: "Nature of electrolyte", correct: false
            },
            { 
                text: "Temperature of electrolyte", correct: false
            },
            { 
                text: "Nature of electrode", correct: false
            },
            { 
                text: "None of these", correct: true
            },
        ]
    },
    {
        question: "What is the principle behind potentiometer?",
        answers: [
            { 
                text: "The current through a conducting wire is proportional to the potential difference between its ends", correct: false
            },
            { 
                text: "Wheatstone’s principle", correct: false
            },
            { 
                text: "Potential difference applied to the wire is proportional to the balancing length.", correct: true
            },
            { 
                text: "None of these", correct: false
            },
        ]
    },
    {
        question: "Name the device which is used to measure the internal resistance of a cell?",
        answers: [
            { 
                text: "Potentiometer", correct: true
            },
            { 
                text: "Galvanometer", correct: false
            },
            { 
                text: "Voltmeter", correct: false
            },
            { 
                text: "Resistance box", correct: false
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