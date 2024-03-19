const question = [
    {
        questions: "which is the largest city in kenya?",
        answers: [
            {text: "kisumu", correct:false},
            {text: "nairobi", correct:true},
            {text: "nakuru", correct:false},
            {text: "mombasa", correct:false},
        ]
    },
    {
        questions: "which is the largest lake in kenya?",
        answers: [
            {text: "victoria", correct:true},
            {text: "naivasha", correct:false},
            {text: "nakuru", correct:false},
            {text: "turkana", correct:false},
        ]
    },
    {
        questions: "which is the largest petrol station in kenya?",
        answers: [
            {text: "sanchez", correct:false},
            {text: "rubis", correct:false},
            {text: "shell", correct:false},
            {text: "total", correct:true},
        ]
    },
    {
        questions: "which is the largest mountain in kenya?",
        answers: [
            {text: "elgon", correct:true},
            {text: "naivasha", correct:false},
            {text: "mt kenya", correct:true},
            {text: "turkana", correct:false},
        ]
    },


]
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
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
    questionElement.innerHTML = questionNo + "."+currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button =document.getElementById("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        
    });
    

}

startQuiz()