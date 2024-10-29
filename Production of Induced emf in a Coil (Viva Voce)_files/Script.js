const questions = [
    {
        question: "Statement 1: When a bar magnet moves away from the loop whose north pole directed towards coil the direction of the induced current in loop is in clockwise direction. 
           Statement 2: When a bar magnet moves away from the loop whose north pole directed towards coil the direction of the induced current in loop is in anticlockwise direction. ",
        answers: [
            { 
                text: "Statement 1 is correct", correct: true
            },
            { 
                text: "Statement 2 is correct", correct: false
            },
            { 
                text: "Both are correct", correct: false
            },
            { 
                text: "Both are incorrect", correct: false
            },
        ]
    },
    
    {
        question: "Statement 1: When a bar magnet moves away from the loop whose north pole directed towards coil the direction of the induced current in loop is in clockwise direction. Statement 2: When a bar magnet moves away from the loop whose north pole directed towards coil the direction of the induced current in loop is in anticlockwise direction. ",
        answers: [
            { 
                text: "Bar magnet moves towards the current carrying loop", correct: false
            },
            { 
                text: "The current carrying loop moves towards the bar magnet", correct: false
            },
            { 
                text: "The current carrying loop moves away from the bar magnet", correct: false
            },
            { 
                text: "All of these", correct: true
            },
        ]
    },
    {
        question: "Which of the following does not depend on induced emf in the inductor? ",
        answers: [
            { 
                text: "Area of solenoid", correct: false
            },
            { 
                text: "Rate of change of current", correct: false
            },
            { 
                text: "Length of the solenoid ", correct: false
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
                text: "Changing the angle between the plane of the coil and the magnetic field ", correct: false
            },
            { 
                text: "Changing area of the coil ", correct: false
            },
            { 
                text: "Changing the magnetic field ", correct: false
            },
            { 
                text: "All of these", correct: true
            },
        ]
    },
    {
        question: "A bar magnet moves away from the magnet. This procedure repeats with different speed. As the speed of the magnet increases ",
        answers: [
            { 
                text: "Deflection of pointer in galvanometer decreases", correct: false
            },
            { 
                text: "Deflection of pointer in galvanometer does not change", correct: false
            },
            { 
                text: "Deflection of pointer in galvanometer increases", correct: true
            },
            { 
                text: "All of these", correct: false
            },
        ]
    },
    {
        question: "A coil moves away or towards another coil This procedure repeats with different speed. As the speed of the coil increases. ",
        answers: [
            { 
                text: "Deflection of pointer in galvanometer decreases", correct: false
            },
            { 
                text: "Deflection of pointer in galvanometer increases", correct: true
            },
            { 
                text: "Deflection of pointer in galvanometer does not change", correct: false
            },
            { 
                text: "All of these", correct: false
            },
        ]
    },
    {
        question: "Two Coils are placed at close distance. One is connected to a galvanometer. Another is connected to battery through key. When constant current flows through the coil which is connected to battery___ ",
        answers: [
            { 
                text: "An emf induces in the coil which is connected to galvanometer", correct: false
            },
            { 
                text: "Current will not induced in coil which is connected to galvanometer", correct: true
            },
            { 
                text: "Current flows in clockwise direction in the coil which is connected to galvanometer", correct: false
            },
            { 
                text: "Current flows in anticlockwise direction in the coil which is connected to galvanometer", correct: false
            },
        ]
    },
    {
        question: "Which of the devices work by Faraday’s electromagnetic inductors ",
        answers: [
            { 
                text: "Generator", correct: true
            },
            { 
                text: "Bulb", correct: false
            },
            { 
                text: "Resistor", correct: false
            },
            { 
                text: "Capacitor", correct: false
            },
        ]
    },
    {
        question: "One coil is connected to a galvanometer. North pole of the magnet is facing the coil. The current in the coil is clockwise direction on the side where it is facing the magnet. When it happens? ",
        answers: [
            { 
                text: "When magnet moves away from the coil", correct: false
            },
            { 
                text: "When magnet moves towards the coil", correct: true
            },
            { 
                text: "When magnet is stationary", correct: false
            },
            { 
                text: "None of these", correct: false
            },
        ]
    },
    {
        question: "Direction of induced emf in a coil which is connected to galvanometer by moving magnet towards or away from the coil can be found by ",
        answers: [
            { 
                text: "Ohm's law", correct: false
            },
            { 
                text: "Gauss' law", correct: false
            },
            { 
                text: "Lenz's law", correct: true
            },
            { 
                text: "None of these", correct: false
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