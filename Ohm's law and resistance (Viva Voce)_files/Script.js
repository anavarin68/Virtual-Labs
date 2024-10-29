const questions = [
    {
        question: "Which Law explains the following? At constant temperature the current flowing through a conductor is directly proportional to the potential difference between its ends.",
        answers: [
            { 
                text: "Boyle’s Law", correct: false
            },
            { 
                text: "Charle’s Law", correct: false
            },
            { 
                text: "Joule’s Law", correct: false
            },
            { 
                text: "Ohm’s Law", correct: true
            },
        ]
    },
    
    {
        question: "You are measuring the current in a circuit that is operated on an 18 V battery. The ammeter reads 40 mA. Later you notice the current has dropped to 20 mA. How much has the voltage changed?",
        answers: [
            { 
                text: "9V", correct: true
            },
            { 
                text: "36V", correct: false
            },
            { 
                text: "18V", correct: false
            },
            { 
                text: "0V", correct: false
            },
        ]
    },
    {
        question: "What does the current through a wire depend on?",
        answers: [
            { 
                text: "The potential difference applied.", correct: false
            },
            { 
                text: "The thickness of the wire.", correct: false
            },
            { 
                text: "The resistance of the wire.", correct: false
            },
            { 
                text: "Both resistance and potential difference.", correct: true
            },
        ]
    },
    {
        question: "What is the shape of V v/s I graph for a linear resistor?",
        answers: [
            { 
                text: "Parabola", correct: false
            },
            { 
                text: "Straight line", correct: true
            },
            { 
                text: "Hyberbola", correct: false
            },
            { 
                text: "None Of these", correct: false
            },
        ]
    },
    {
        question: "Which of the following represent ohm’s law?",
        answers: [
            { 
                text: "Current = Resistance / Potential difference", correct: false
            },
            { 
                text: "Potential difference / current = Resistance", correct: true
            },
            { 
                text: "Current = Resistance × potential difference.", correct: false
            },
            { 
                text: "None of these", correct: false
            },
        ]
    },
    {
        question: "Choose the correct statement from the alternatives?",
        answers: [
            { 
                text: "Every material has resistance.", correct: false
            },
            { 
                text: "The resistance of a material is independent of the current passing through it.", correct: false
            },
            { 
                text: "Resistance of a material is the measure of how much it opposes the passage of free electrons", correct: false
            },
            { 
                text: "All of them are true", correct: true
            },
        ]
    },
    {
        question: "What is the potential difference required to pass a current of 5A through a metallic rod of resistance 10Ω?",
        answers: [
            { 
                text: "5V", correct: false
            },
            { 
                text: "50V", correct: true
            },
            { 
                text: "0.05V", correct: false
            },
            { 
                text: "0.5V", correct: false
            },
        ]
    },
    {
        question: "If the voltage across a fixed value of resistance is increased five times, what will be the variation in current?",
        answers: [
            { 
                text: "Decreases to a factor of five", correct: false
            },
            { 
                text: "Remains fixed", correct: false
            },
            { 
                text: "Becomes doubled", correct: false
            },
            { 
                text: "Increases to a factor of five", correct: true
            },
        ]
    },
    {
        question: "Which one of the following is the resistivity of gold wire?",
        answers: [
            { 
                text: "1.59 x 10¯⁸ Ωm", correct: false
            },
            { 
                text: "2.82 x 10¯⁸ Ωm", correct: false
            },
            { 
                text: "2.44 x 10¯⁸ Ωm", correct: true
            },
            { 
                text: "100 x 10¯⁸ Ωm", correct: false
            },
        ]
    },
    {
        question: "What is the resistor value in the given circuit have a flow of current flow of 13mA connected to a 26V rated battery?",
        answers: [
            { 
                text: "200Ω", correct: false
            },
            { 
                text: "1kΩ", correct: false
            },
            { 
                text: "2kΩ", correct: true
            },
            { 
                text: "4kΩ", correct: false
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