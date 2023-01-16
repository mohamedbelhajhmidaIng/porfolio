const quiz = [
  {
    q: "qelles sont les pays du nordAmérique ?",
    options: ["pays1", "pays2", "pays3", "pays4"],
    reponse: 1,
  },

  {
    q: "qelles sont les ville du Tunisie ?",
    options: ["amerique", "mahdia", "ain el wed", "mardouma"],
    reponse: 3,
  },

  {
    q: "5*5*5",
    options: ["145", "135", "125", "100"],
    reponse: 2,
  },

  {
    q: "5+11",
    options: ["15", "152", "16", "144"],
    reponse: 2,
  },
];

const nbreQuestions = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optioncontainer = document.querySelector(".option-container");

let cptQuestion = 0;
let questionCourante;
let questionDispo = [];

function setquestionDispo() {
  for (let i = 0; i < quiz.length; i++) {
    questionDispo.push(quiz[i]);
  }
}

function getNouveauQuestion() {
  nbreQuestions.innerHTML =
    "Question numéro : " + (cptQuestion + 1) + " / " + quiz.length;
  // set question text
  // get random text
  const questionIndex =
    questionDispo[Math.floor(Math.random() * questionDispo.length)];
  questionCourante = questionIndex;
  questionText.innerHTML = questionCourante.q;
  // het the position of 'questionIndex' from questionDispo
  const index1 = questionDispo.indexOf(questionIndex);


  let optionLen = questionCourante.options.length;
  for (let i = 0; i < optionLen; i++) {
    questionDispo.push(i);
  }
  optioncontainer.innerHTML = "";
  let animationDelay = 0.15;
  for (let i = 0; i < optionLen; i++) {
    //random option
    const optionIndex =
      questionDispo[Math.floor(Math.random() * questionDispo.length)];
    const option = document.createElement("div");
    const index2 = questionDispo.indexOf(optionIndex);
    //remove the option index from question dispo

    questionDispo.splice(index2, 1);
    console.log(optionIndex);
    option.innerHTML = questionCourante.options[i];
    option.id = optionIndex;
    option.style.animationDelay = animationDelay + "s";
    animationDelay = animationDelay + 0.15;
    option.className = "option";
    optioncontainer.appendChild(option);
    option.setAttribute("onclick", "getResultat(this)");
  }

  cptQuestion++;
}

function getResultat(element) {
  const id = parseInt(element.id);
  if (id === questionCourante.reponse) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
    const optionLen = optioncontainer.children.length;
    for (let i = 0; i < optionLen; i++) {
      if (parseInt(optioncontainer.children[i].id) === questionCourante.reponse)
        optioncontainer.children[i].classList.add("correct");
    }
  }

  unclickableOptions();
}

function unclickableOptions() {
  const optionLen = optioncontainer.children.length;
  for (let i = 0; i < optionLen; i++) {
    optioncontainer.children[i].classList.add("already-answered");
  }
}
function suivant() {
  if (cptQuestion === quiz.length) {
    console.log("quizz over ");
  } else {
    getNouveauQuestion();
  }
}
window.onload = function () {
  setquestionDispo();
  getNouveauQuestion();
};
