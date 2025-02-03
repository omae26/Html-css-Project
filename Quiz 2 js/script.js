const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
        answer: "William Shakespeare"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const resultElement = document.getElementById('result');

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.addEventListener('click', selectAnswer);
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = questions[currentQuestionIndex].answer;
    if (selectedButton.textContent === answer) {
        score++;
        resultElement.textContent = 'Correct!';
    } else {
        resultElement.textContent = 'Wrong!';
    }
    Array.from(optionsContainer.children).forEach(button => {
        button.disabled = true;
    });
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        resultElement.textContent = '';
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionElement.textContent = `Quiz Over! Your score is ${score}/${questions.length}`;
    optionsContainer.innerHTML = '';
    nextButton.style.display = 'none';
    resultElement.textContent = '';
}

nextButton.addEventListener('click', showNextQuestion);

showQuestion();