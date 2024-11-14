document.addEventListener("DOMContentLoaded", () => {
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const nextBtn = document.getElementById("next-btn");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");
  const startBtn = document.getElementById("start-btn");

  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
    {
      question: "What is the largest planet in our solar system?",
      choices: ["Mars", "Jupiter", "Saturn", "Neptune"],
      answer: "Jupiter",
    },
    {
      question: "Who painted the Mona Lisa?",
      choices: [
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Vincent van Gogh",
        "Michelangelo",
      ],
      answer: "Leonardo da Vinci",
    },
  ];
  let quesIndex = 0;
  let score = 0;
  function startQuiz() {
    resultContainer.classList.add("hidden");
    startBtn.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestions();
  }

  function showQuestions() {
    nextBtn.classList.add("hidden");
    questionText.textContent = questions[quesIndex].question;
    choicesList.innerHTML = "";
    questions[quesIndex].choices.forEach((choice) => {
      choicesList.innerHTML += `<li>${choice}</li>`;
    });
  }

  startBtn.addEventListener("click", startQuiz);
});
