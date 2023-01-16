
var questionBank= [
{
question : 'Quel est le résultat de : 5-5*5+5',
option : ['5','25','-15','-10'],
answer : '-15'
},
{
question : 'Quand l indépendance de la Tunisie a-t-elle été proclamée? ',
option : ['1956', '1957','1958','1959'],
answer : '1956'
},
{
question : 'Quel est le nom de l empire qui a dominé la Tunisie pendant plus de 3 siècles ?',
option : ['Roman','Arabe','Roman', 'Ottoman'],
answer : 'Ottoman'
},
{
question : 'Quel est le nom de la tour la plus haute de France ?',
option : ['Tour First','Tour Montparnasse','Tour Eiffel','Tour Total'],
answer : 'Tour Montparnasse'
},
{
question : 'Qu est-ce qu un VPN ?',
option : ['Un logiciel de sécurité pour protéger les données','Un système de gestion de projet',' Un système de stockage en ligne','Un système de gestion de contenu'],
answer : 'Un logiciel de sécurité pour protéger les données'
},

{
question : 'Qu est-ce que le phishing ?',
option : ['Une technique de compression de données',' Une technique de sécurité',' Une technique de marketing en ligne','Une technique de piratage informatique'],
answer : 'Une technique de piratage informatique '
},
{
question : 'Pourquoi utilise-t-on les formulaires en HTML ?',
option : ['Pour envoyer des données à un serveur','Pour stocker des données en local','Pour afficher des données à l écran','Pour crypter des données'],
answer : 'Pour envoyer des données à un serveur'
},
{
question : 'Quel est le plus grand pays du monde en terme de Surface ? ',
option : ['Chine',' États-Unis','Canada','Russie'],
answer : 'Russie'
},
{
question : 'D où vient le chocolat ?',
option : ['Afrique','Asie',' Amérique centrale',' Europe'],
answer : ' Amérique centrale'
},
{
question : 'Quelle est la plus grande île de la Méditerranée ?',
option : ['Chypre','Sicile','Crète',' Eubée'],
answer : 'Sicile'
},
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
for(var a=0;a<span.length;a++){
span[a].style.background='none';
}
question.innerHTML= 'Q.'+(i+1)+'   '+questionBank[i].question;   //récupérer les questions 
option0.innerHTML= questionBank[i].option[0];
option1.innerHTML= questionBank[i].option[1];
option2.innerHTML= questionBank[i].option[2];
option3.innerHTML= questionBank[i].option[3];
stat.innerHTML= "Question"+' '+(i+1)+' '+'de'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
{
score= score+1;
document.getElementById(e.id).style.background= 'limegreen';
document.getElementById(e.id).style.color='white'
} 
else{
document.getElementById(e.id).style.background= 'tomato';
document.getElementById(e.id).style.color='white'

}
setTimeout(nextQuestion,500);
}

//function to display next question
function nextQuestion(){
if(i<questionBank.length-1)       //mazelt makameltch el tab kemel tab logueur 5 i=4 on incremente 
{
i=i+1;
displayQuestion();
}
else{
points.innerHTML= score+ '/'+ questionBank.length;   //Score (id score+/length tab)
quizContainer.style.display= 'none';                //nhidi el quizz 
scoreboard.style.display= 'block'                   //nhel el score bord 
}
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
location.reload();
}

//function to check Answers
function checkAnswer(){
var answerBank= document.getElementById('answerBank');
var answers= document.getElementById('answers');
answerBank.style.display= 'block';
scoreboard.style.display= 'none';
for(var a=0;a<questionBank.length;a++)
{
var list= document.createElement('li');
list.innerHTML= questionBank[a].answer;
answers.appendChild(list);
}
}


displayQuestion();
