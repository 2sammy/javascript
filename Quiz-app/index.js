const questions = [
    {
        question: "which is the largest city in kenya?",
        answers: [
            {text: "kisumu", correct: false},
            {text: "nairobi", correct: true},
            {text: "nakuru", correct: false},
            {text: "mombasa", correct: false},
        ]
    },
    {
        question: "which is the largest lake in kenya?",
        answers: [
            {text: "victoria", correct: true},
            {text: "naivasha", correct: false},
            {text: "nakuru", correct: false},
            {text: "turkana", correct: false},
        ]
    },
    {
        question: "which is the largest petrol station in kenya?",
        answers: [
            {text: "sanchez", correct: false},
            {text: "rubis", correct: false},
            {text: "shell", correct: false},
            {text: "total", correct: true},
        ]
    },
    {
        question: "which is the largest mountain in kenya?",
        answers: [
            {text: "elgon", correct:true},
            {text: "naivasha", correct:false},
            {text: "mt kenya", correct:true},
            {text: "turkana", correct:false},
        ]
    },


]
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML ="Next";
    showQuestion()
}

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1 ;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button =document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        
    });
    function resetState() {
        nextButton.style.display= "none";
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }


}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score ++;
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

function showScore() {
    resetState();
    questionElement.innerHTML =`You score is ${score} out of ${questions.length}`
    nextButton.innerHTML = "play again"
    nextButton.style.display = "block"

}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz()
