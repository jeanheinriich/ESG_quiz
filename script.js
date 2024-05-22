const startBtn1 = document.querySelector('.btn');
const startBtn2 = document.querySelector('.btn1');
const startBtn3 = document.querySelector('#start-btn');
const  exitBtn= document.querySelector('.exit-btn');
const  exitBtn1= document.querySelector('.continue-btn');
const popupInfo = document.querySelector('.popup-info');
const main = document.querySelector('.main');

startBtn1.onclick = () => {
  popupInfo.classList.add('active');
  main.classList.add('active');
  
}

startBtn2.onclick = () => {
  popupInfo.classList.add('active');
  main.classList.add('active');
}

startBtn3.onclick = () => {
  popupInfo.classList.add('active');
  main.classList.add('active');
}

exitBtn.onclick = () => {
  popupInfo.classList.remove('active');
  main.classList.remove('active');
}

exitBtn1.onclick = () => {
  popupInfo.classList.remove('active');
  main.classList.remove('active');

  showQuestion(0);
questionCount(1);
 headerScore();
}


