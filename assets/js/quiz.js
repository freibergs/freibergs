let currentQuiz = 0;
let score = 0;
const correctAnswers = [1, 0, 2, 1, 2]; //Ak tu, čīter :D Ja tu esi šitik tālu, tad noteikti zini atbildes uz visiem jautājumiem...
const totalQuestions = 5; 

function hideAllQuizzes() {
    for (let i = 0; i < totalQuestions; i++) {
        hideQuiz(i);
    }
}

function showQuiz(index) {
    hideAllQuizzes();
    document.getElementById(`quiz${index}`).style.display = 'block';
}

function hideQuiz(index) {
    document.getElementById(`quiz${index}`).style.display = 'none';
}

function showResult() {
    document.getElementById('result').style.display = 'block';
    document.getElementById('score').innerText = score;

    const button = document.createElement('a');
    button.innerHTML = 'Pastāsti to man!';
    button.className = 'whatsapp-button';
    button.href = `https://wa.me/37120087660?text=Hey! Es Tavā quiz pareizi atbildēju uz ${score} jautājumiem!`;
    button.target = '_blank';

    const resultDiv = document.getElementById('result');
    resultDiv.appendChild(button);
}

function checkAnswer(questionIndex, answerIndex) {
    if (answerIndex === correctAnswers[questionIndex]) {
        score++;
    }
    if (questionIndex < totalQuestions - 1) {
        showQuiz(questionIndex + 1);
    } else {
        hideAllQuizzes();
        showResult();
    }
}

hideAllQuizzes();
showQuiz(0);
