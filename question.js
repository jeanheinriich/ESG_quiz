let questions = [
    {
        numb: 1,
        question:"O que significa a sigla ESG?",
        answer: "c) Environmental, Social, and Governance",
        options: [
            "a) Environmental, Social, and Growth",
            "b) Economic, Social, and Governance",
            "c) Environmental, Social, and Governance",
            "d) Energy, Sustainability, and Governance"
        ]
    },
    {
        numb: 2,
        question:"Qual das seguintes práticas se enquadra no pilar Ambiental do ESG?",
        answer: "b) Redução de emissões de carbono",
        options: [
            "a) Implementação de programas de diversidade e inclusão",
            "b) Redução de emissões de carbono",
            "c) Criação de códigos de conduta ética",
            "d) Transparência na governança corporativa"
        ]
    },
    {
        numb: 3,
        question:"Por que a Governança é importante no ESG?",
        answer: "b) Porque garante a transparência e a ética nos negócios",
        options: [
            "a) Porque envolve o uso de energia renovável",
            "b) Porque garante a transparência e a ética nos negócios",
            "c) Porque promove a inclusão social",
            "d) Porque ajuda na reciclagem de resíduos"
        ]
    },
    {
        numb: 4,
        question:"Qual das seguintes ações é uma prática social no contexto de ESG?",
        answer: "c) Criação de programas de bem-estar para funcionários",
        options: [
            "a) Uso de materiais recicláveis nos produtos",
            "b) Implementação de energias renováveis",
            "c) Criação de programas de bem-estar para funcionários",
            "d) Auditorias financeiras regulares"
        ]
    },
    {
        numb: 5,
        question:"Por que as pequenas e médias empresas devem adotar práticas sustentáveis?",
        answer: "c) Porque pode atrair investidores e melhorar a imagem da empresa",
        options: [
            "a) Porque ajuda na redução de custos operacionais",
            "b) Porque garante a obtenção de certificados de qualidade",
            "c) Porque pode atrair investidores e melhorar a imagem da empresa",
            "d) Porque é uma exigência legal em todos os países"
        ]
    }
]


let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

const resultBox = document.querySelector('.result-box');
const quizBox = document.querySelector('.quiz-box');
const tryAgain = document.querySelector('.tryAgain-btn');

const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () =>{
    if (questionCount < questions.length - 1){
       questionCount++;
       showQuestion(questionCount);

       questionNumb++;
       questionCounter(questionNumb);

       nextBtn.classList.remove('active');
    }
    else{
        showResultBox();
    }

}

tryAgain.onclick = () =>{
    location.reload();
}

const optionList = document.querySelector('.option-list');

function showQuestion(quiz) {
  const questionText = document.querySelector('.question-text');
  questionText.textContent = `${questions[quiz].numb}. ${questions[quiz].question}`;

  let optionTag = `<div class="option"><span>${questions[quiz].options[0]}</span></div>
  <div class="option"><span>${questions[quiz].options[1]}</span></div>
  <div class="option"><span>${questions[quiz].options[2]}</span></div>
  <div class="option"><span>${questions[quiz].options[3]}</span></div>`;

  optionList.innerHTML = optionTag;

  const option = document.querySelectorAll('.option');
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute('onclick', 'optionSelected(this)');
  }
}

function optionSelected(answer){
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = optionList.children.length;
    if (userAnswer == correctAnswer){
        answer.classList.add('correct');
        userScore += 1;
        headerScore();
    }
    else{
        answer.classList.add('incorrect');
        for (i = 0; i < allOptions; i++){

            if (optionList.children[i].textContent == correctAnswer){
                optionList.children[i].setAttribute('class', 'option correct');
            }
        }
    }

    for (i = 0; i < allOptions; i++){
        optionList.children[i].classList.add('disabled');
    }

    nextBtn.classList.add('active');
}


function optionSelected1(answer){
    let allOptions = optionList.children.length;
    answer.classList.add('correct');
    userScore += 1;
    headerScore();

    for (i = 0; i < allOptions; i++){
        optionList.children[i].classList.add('disabled');
    }

    nextBtn.classList.add('active');

}

function questionCounter(quiz){
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `Pergunta ${quiz} de ${questions.length}`;
}


function headerScore(){
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Pontos: ${userScore} / ${questions.length}`;
}


function showResultBox(){
    quizBox.classList.add('active');
    resultBox.classList.add('active');

    const scoreText = document.querySelector('.text');
    scoreText.textContent = `${userScore} de ${questions.length} pontos!`;

    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');
    let progressStartValue = -1;
    let progressEndValue = (userScore / questions.length) * 100;
    let speed = 20;

    let progress = setInterval(() => {
        progressStartValue++;

        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#6EFD53 ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .6)0deg)`;
        if (progressStartValue == progressEndValue){
            clearInterval(progress);
        }
    }, speed);
}