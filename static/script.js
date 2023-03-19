const startBtn = document.getElementById("start-quiz");
const quizContainer = document.getElementById("quiz");
const questionContainer = document.getElementById("question");
const choicesContainer = document.getElementById("choices");
const submitBtn = document.getElementById("submit-answer");
const resultContainer = document.getElementById("result");
const scoreContainer = document.getElementById("score");

const questions = [
  {
    question: "What does ASRJC stand for?",
    choices: ["Anglo-Chinese School (Independent)", "Anglican High School", "Anglo-Chinese Junior College", "Anderson-Serangoon Junior College"],
    answer: "Anderson-Serangoon Junior College"
  },
  {
    question: "When was ASRJC embodied?",
    choices: ["2015", "2017", "2019", "2016"],
    answer: "2019"
  },
  {
    question: "What is our vision?",
    choices: ["Imaginative Thinkers, Caring Leaders", "Noble Ambition and Character, for the Service of God and nation", "Quality Learners, Enhanced Character Development, Quality Staff, Organisational Excellence", "Excellence, Learning, Living"],
    answer: "Imaginative Thinkers, Caring Leaders"
  },
  {
    question: "What is the name of ASRJC's school anthem?",
    choices: ["Hearts and Minds Inspired", "The Royal Blue and Gold", "Discere Servire – Non Mihi Solum", "Auspicium Melioris Aevi"],
    answer: "Discere Servire – Non Mihi Solum"
  },
  {
    question: "What are our school's colours?",
    choices: ["orange and teal", "orange and blue", "black and blue", "orange and black"],
    answer: "orange and teal"
  },
  {
    question: "What is the meaning behind our school logo?",
    choices: ["a flame", "‘flame’ element and a flower bud that is ready to bloom", "a flower bud", "strong flame"],
    answer: "‘flame’ element and a flower bud that is ready to bloom"
  },
  {
    question: "How many houses are there in ASRJC?",
    choices: ["3", "5", "6", "4"],
    answer: "4"
  },
  {
    question: "How many LTs are there in ASRJC?",
    choices: ["4", "5", "6", "3"],
    answer: "5"
  },
  {
    question: "How many CCAs are there in ASRJC?",
    choices: ["31", "37", "29", "33"],
    answer: "31"
  },
  {
    question: "When can you wear house tee during PE?",
    choices: ["Odd days afternoon periods", "Even days morning periods", "Odd days morning periods", "Every afternoon periods"],
    answer: "Every afternoon periods"
  },
];

let currentQuestionIndex = 0;
let score = 0;

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  startBtn.classList.add("hide");
  quizContainer.classList.remove("hide");
  showQuestion();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionContainer.innerHTML = currentQuestion.question;
  choicesContainer.innerHTML = "";
  currentQuestion.choices.forEach(choice => {
    const choiceElement = document.createElement("button");
    choiceElement.innerHTML = choice;
    choiceElement.classList.add("choice");
    choiceElement.addEventListener("click", () => {
      if (choice === currentQuestion.answer) {
        score++;
      }
      currentQuestionIndex++;
      if (currentQuestionIndex === questions.length) {
        showResult();
      } else {
        showQuestion();
      }
    });
    choicesContainer.appendChild(choiceElement);
  });
}

function showResult() {
  quizContainer.classList.add("hide");
  resultContainer.classList.remove("hide");
if (score <= 6) {
  scoreContainer.innerHTML = `You scored ${score} out of ${questions.length} questions.`
  resultContainer.innerHTML += "<p>Are you sure you are an ASRJCians?</p>";
}
else if (score >= 7 && score <= 8) {
  scoreContainer.innerHTML = `You scored ${score} out of ${questions.length} questions.`
  resultContainer.innerHTML += "<p>You are almost a true ASRJCian!</p>";  
}
else if (score > 8) {
  scoreContainer.innerHTML = `You scored ${score} out of ${questions.length} questions.`
  resultContainer.innerHTML += "<p>You are certainly a true ASRJCian!!</p>";  
}
}