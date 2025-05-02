const questions = [
    {
      question: "What is the capital of Australia?",
      answers: [
        { text: "Sydney", correct: false },
        { text: "Melbourne", correct: false },
        { text: "Canberra", correct: true },
        { text: "Brisbane", correct: false },
      ]
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      answers: [
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Venus", correct: false },
        { text: "Saturn", correct: false },
      ]
    },
    {
      question: "What is the chemical symbol for water?",
      answers: [
        { text: "Wa", correct: false },
        { text: "H2O", correct: true },
        { text: "Ox", correct: false },
        { text: "Hy", correct: false },
      ]
    },
    {
      question: "Who painted the Mona Lisa?",
      answers: [
        { text: "Vincent van Gogh", correct: false },
        { text: "Leonardo da Vinci", correct: true },
        { text: "Pablo Picasso", correct: false },
        { text: "Claude Monet", correct: false },
      ]
    },
    {
      question: "What is the largest ocean on Earth?",
      answers: [
        { text: "Atlantic Ocean", correct: false },
        { text: "Indian Ocean", correct: false },
        { text: "Arctic Ocean", correct: false },
        { text: "Pacific Ocean", correct: true },
      ]
    },
    {
      question: "In which year did World War II end?",
      answers: [
        { text: "1943", correct: false },
        { text: "1945", correct: true },
        { text: "1947", correct: false },
        { text: "1950", correct: false },
      ]
    },
    {
      question: "What is the currency of Japan?",
      answers: [
        { text: "Yuan", correct: false },
        { text: "Won", correct: false },
        { text: "Yen", correct: true },
        { text: "Ringgit", correct: false },
      ]
    },
    {
      question: "Who developed the theory of relativity?",
      answers: [
        { text: "Isaac Newton", correct: false },
        { text: "Albert Einstein", correct: true },
        { text: "Stephen Hawking", correct: false },
        { text: "Marie Curie", correct: false },
      ]
    },
    {
      question: "What is the highest mountain in the world?",
      answers: [
        { text: "K2", correct: false },
        { text: "Mount Everest", correct: true },
        { text: "Kangchenjunga", correct: false },
        { text: "Lhotse", correct: false },
      ]
    },
    {
      question: "What is the chemical symbol for gold?",
      answers: [
        { text: "Go", correct: false },
        { text: "Au", correct: true },
        { text: "Ag", correct: false },
        { text: "Fe", correct: false },
      ]
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      answers: [
        { text: "Jane Austen", correct: false },
        { text: "William Shakespeare", correct: true },
        { text: "George Bernard Shaw", correct: false },
        { text: "Emily Brontë", correct: false },
      ]
    },
    {
      question: "What is the largest desert in the world?",
      answers: [
        { text: "Sahara Desert", correct: false },
        { text: "Arabian Desert", correct: false },
        { text: "Gobi Desert", correct: false },
        { text: "Antarctic Polar Desert", correct: true },
      ]
    },
    {
      question: "What is the chemical symbol for oxygen?",
      answers: [
        { text: "Ox", correct: false },
        { text: "O", correct: true },
        { text: "Og", correct: false },
        { text: "Om", correct: false },
      ]
    },
    {
      question: "Who painted the 'Starry Night'?",
      answers: [
        { text: "Claude Monet", correct: false },
        { text: "Vincent van Gogh", correct: true },
        { text: "Pierre-Auguste Renoir", correct: false },
        { text: "Edgar Degas", correct: false },
      ]
    },
    {
      question: "What is the longest river in the world?",
      answers: [
        { text: "Amazon River", correct: false },
        { text: "Nile River", correct: true },
        { text: "Yangtze River", correct: false },
        { text: "Mississippi River", correct: false },
      ]
    },
    {
      question: "In which year did the Titanic sink?",
      answers: [
        { text: "1902", correct: false },
        { text: "1912", correct: true },
        { text: "1922", correct: false },
        { text: "1932", correct: false },
      ]
    },
    {
      question: "What is the currency of the United Kingdom?",
      answers: [
        { text: "Euro", correct: false },
        { text: "Dollar", correct: false },
        { text: "Pound Sterling", correct: true },
        { text: "Franc", correct: false },
      ]
    },
    {
      question: "Who invented the telephone?",
      answers: [
        { text: "Thomas Edison", correct: false },
        { text: "Alexander Graham Bell", correct: true },
        { text: "Nikola Tesla", correct: false },
        { text: "Guglielmo Marconi", correct: false },
      ]
    },
    {
      question: "What is the largest planet in our solar system?",
      answers: [
        { text: "Saturn", correct: false },
        { text: "Jupiter", correct: true },
        { text: "Neptune", correct: false },
        { text: "Uranus", correct: false },
      ]
    },
    {
      question: "What is the chemical symbol for silver?",
      answers: [
        { text: "Si", correct: false },
        { text: "Ag", correct: true },
        { text: "Sl", correct: false },
        { text: "Sv", correct: false },
      ]
    },
    {
      question: "Who wrote 'Pride and Prejudice'?",
      answers: [
        { text: "Charlotte Brontë", correct: false },
        { text: "Jane Austen", correct: true },
        { text: "George Eliot", correct: false },
        { text: "Louisa May Alcott", correct: false },
      ]
    },
    {
      question: "What is the smallest continent?",
      answers: [
        { text: "Europe", correct: false },
        { text: "Asia", correct: false },
        { text: "Australia", correct: true },
        { text: "Africa", correct: false },
      ]
    },
    {
      question: "What is the chemical symbol for nitrogen?",
      answers: [
        { text: "Ni", correct: false },
        { text: "N", correct: true },
        { text: "Nt", correct: false },
        { text: "Na", correct: false },
      ]
    },
    {
      question: "Who sculpted 'David'?",
      answers: [
        { text: "Michelangelo", correct: true },
        { text: "Donatello", correct: false },
        { text: "Leonardo da Vinci", correct: false },
        { text: "Raphael", correct: false },
      ]
    },
    {
      question: "What is the deepest part of the ocean?",
      answers: [
        { text: "Puerto Rico Trench", correct: false },
        { text: "Mariana Trench", correct: true },
        { text: "Java Trench", correct: false },
        { text: "Challenger Deep", correct: false },
      ]
    },
    {
      question: "In which year did the first human land on the moon?",
      answers: [
        { text: "1959", correct: false },
        { text: "1969", correct: true },
        { text: "1979", correct: false },
        { text: "1989", correct: false },
      ]
    },
    {
      question: "What is the currency of Canada?",
      answers: [
        { text: "Dollar", correct: true },
        { text: "Peso", correct: false },
        { text: "Franc", correct: false },
        { text: "Krone", correct: false },
      ]
    },
    {
      question: "Who discovered penicillin?",
      answers: [
        { text: "Marie Curie", correct: false },
        { text: "Alexander Fleming", correct: true },
        { text: "Louis Pasteur", correct: false },
        { text: "Robert Koch", correct: false },
      ]
    },
    {
      question: "What is the second largest planet in our solar system?",
      answers: [
        { text: "Uranus", correct: false },
        { text: "Saturn", correct: true },
        { text: "Neptune", correct: false },
        { text: "Mars", correct: false },
      ]
    },
    {
      question: "What is the chemical symbol for iron?",
      answers: [
        { text: "Ir", correct: false },
        { text: "Fe", correct: true },
        { text: "In", correct: false },
        { text: "Io", correct: false },
      ]
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      answers: [
        { text: "Harper Lee", correct: true },
        { text: "F. Scott Fitzgerald", correct: false },
        { text: "Ernest Hemingway", correct: false },
        { text: "John Steinbeck", correct: false },
      ]
    },
    {
      question: "What is the largest country by land area?",
      answers: [
        { text: "China", correct: false },
        { text: "Canada", correct: false },
        { text: "United States", correct: false },
        { text: "Russia", correct: true },
      ]
    },
    {
      question: "What is the chemical symbol for carbon?",
      answers: [
        { text: "Ca", correct: false },
        { text: "C", correct: true },
        { text: "Co", correct: false },
        { text: "Cr", correct: false },
      ]
    },
    {
      question: "Who composed 'Für Elise'?",
      answers: [
        { text: "Wolfgang Amadeus Mozart", correct: false },
        { text: "Ludwig van Beethoven", correct: true },
        { text: "Johann Sebastian Bach", correct: false },
        { text: "Frédéric Chopin", correct: false },
      ]
    },
    {
      question: "What is the saltiest sea in the world?",
      answers: [
        { text: "Mediterranean Sea", correct: false },
        { text: "Dead Sea", correct: true },
        { text: "Red Sea", correct: false },
        { text: "Caspian Sea", correct: false },
      ]
    },
    {
      question: "In which year did the Berlin Wall fall?",
      answers: [
        { text: "1979", correct: false },
        { text: "1989", correct: true },
        { text: "1999", correct: false },
        { text: "1969", correct: false },
      ]
    },
    {
      question: "What is the currency of Switzerland?",
      answers: [
        { text: "Euro", correct: false },
        { text: "Franc", correct: true },
        { text: "Krone", correct: false },
        { text: "Lira", correct: false },
      ]
    },
    {
      question: "Who invented the World Wide Web?",
      answers: [
        { text: "Bill Gates", correct: false },
        { text: "Tim Berners-Lee", correct: true },
        { text: "Steve Jobs", correct: false },
        { text: "Mark Zuckerberg", correct: false },
      ]
    },
    {
      question: "What is the third planet from the sun?",
      answers: [
        { text: "Mars", correct: false },
        { text: "Earth", correct: true },
        { text: "Venus", correct: false },
        { text: "Mercury", correct: false },
      ]
    },
    {
      question: "What is the chemical symbol for potassium?",
      answers: [
        { text: "Po", correct: false },
        { text: "K", correct: true },
        { text: "Pt", correct: false },
        { text: "Ps", correct: false },
      ]
    },
    {
      question: "Who wrote 'The Great Gatsby'?",
      answers: [
        { text: "Ernest Hemingway", correct: false },
        { text: "F. Scott Fitzgerald", correct: true },
        { text: "William Faulkner", correct: false },
        { text: "Sinclair Lewis", correct: false },
      ]
    },
    {
      question: "What is the smallest bird in the world?",
      answers: [
        { text: "Finch", correct: false },
        { text: "Sparrow", correct: false },
        { text: "Hummingbird", correct: true },
        { text: "Wren", correct: false },
      ]
    },
    {
      question: "What is the chemical symbol for sodium?",
      answers: [
        { text: "So", correct: false },
        { text: "Na", correct: true },
        { text: "Sd", correct: false },
        { text: "Sm", correct: false },
      ]
    },
    {
      question: "Who painted 'The Scream'?",
      answers: [
        { text: "Pablo Picasso", correct: false },
        { text: "Edvard Munch", correct: true },
        { text: "Salvador Dalí", correct: false },
        { text: "René Magritte", correct: false },
      ]
    },
    {
      question: "What is the largest island in the world?",
      answers: [
        { text: "Australia", correct: false },
        { text: "Greenland", correct: true },
        { text: "New Guinea", correct: false },
        { text: "Borneo", correct: false },
      ]
    },
    {
      question: "In which year did the United States declare independence?",
      answers: [
        { text: "1766", correct: false },
        { text: "1776", correct: true },
        { text: "1786", correct: false },
        { text: "1796", correct: false },
      ]
    },
    {
      question: "What is the currency of China?",
      answers: [
        { text: "Yen", correct: false },
        { text: "Won", correct: false },
        { text: "Renminbi (Yuan)", correct: true },
        { text: "Ringgit", correct: false },
      ]
    },
    {
      question: "Who developed the polio vaccine?",
      answers: [
        { text: "Jonas Salk", correct: true },
        { text: "Albert Sabin", correct: false },
        { text: "Edward Jenner", correct: false },
        { text: "Louis Pasteur", correct: false },
      ]
    },
    {
      question: "What is the fourth planet from the sun?",
      answers: [
        { text: "Jupiter", correct: false },
        { text: "Mars", correct: true },
        { text: "Earth", correct: false },
        { text: "Venus", correct: false },
      ]
    },
    {
      question: "What is the chemical symbol for calcium?",
      answers: [
        { text: "Cl", correct: false },
        { text: "Ca", correct: true },
        { text: "Cn", correct: false },
        { text: "Cm", correct: false },
      ]
    },
    {
      question: "Who wrote '1984'?",
      answers: [
        { text: "Aldous Huxley", correct: false },
        { text: "George Orwell", correct: true },
        { text: "Ray Bradbury", correct: false },
        { text: "H.G. Wells", correct: false },
      ]
    },
];

const qEle = document.getElementById("question");
const ansBtn = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;
let score = 0;
let shuffledQuestions = [];

function StartQuiz() {
    currentIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";

    // Shuffle and pick 5 questions
    shuffledQuestions = questions
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);

    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = shuffledQuestions[currentIndex];
    let questionNo = currentIndex + 1;
    qEle.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        ansBtn.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextBtn.style.display = "none";
    while (ansBtn.firstChild) {
        ansBtn.removeChild(ansBtn.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(ansBtn.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

function showscore() {
    resetState();
    qEle.innerHTML = `You scored ${score} out of ${shuffledQuestions.length}!`;
    nextBtn.innerHTML = "Play Again!";
    nextBtn.style.display = "block";
}

function handleNextButton() {
    currentIndex++;
    if (currentIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        showscore();
    }
}

nextBtn.addEventListener("click", () => {
    if (currentIndex < shuffledQuestions.length) {
        handleNextButton();
    } else {
        StartQuiz();
    }
});

StartQuiz();
