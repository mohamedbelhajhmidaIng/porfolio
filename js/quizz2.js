const quizzData = [
  {
    question: "which language runs in a web browsers ? ",
    a: "java",
    b: "Langage c ",
    c: "Python",
    d: "JS",
    correct: "d",
  },
  {
    question: "what does css stand for ? ",
    a: "Central Style Sheets",
    b: "Cscading ss ",
    c: "java",
    d: "java",
    correct: "b",
  },

  {
    question: "what  css stand for ? ",
    a: "Central Style Sheets",
    b: "Cscading ss ",
    c: "java",
    d: "java",
    correct: "b",
  },

  {
    question: "what does css stand for ? ",
    a: "Central Style Sheets",
    b: "Cscading ss ",
    c: "java",
    d: "java",
    correct: "b",
  },
];

const quizz = document.getElementById("quizz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitbtn = document.getElementById("submit");

let currentQuizz = 0;
let score = 0;

loadQuizz();

function loadQuizz() {
  deselectAnswers();
  const currentQuizzData = quizzData[currentQuizz];
  questionEl.innerText = currentQuizzData.question;
  a_text.innerText = currentQuizzData.a;
  b_text.innerText = currentQuizzData.b;
  c_text.innerText = currentQuizzData.c;
  d_text.innerText = currentQuizzData.d;
}

function deselectAnswers() {
  answerEls.forEach(answerEl =>answerEl.checked = false)
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEls) => {
    if (answerEls.checked) {
      answer = answerEls.id;
    }
  });

  return answer;
}

submitbtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizzData[currentQuizz].correct) {
      score++;
    }
    currentQuizz++;

    if (currentQuizz < quizzData.length) {
      loadQuizz();
    } else {

        quizz.innerHTML=
        `<h2>You answered ${score}/${quizzData.length} question correctly  </h2> 
        <button onclick="location.reload()" >Reload </button>
        `

    }
  }
});
