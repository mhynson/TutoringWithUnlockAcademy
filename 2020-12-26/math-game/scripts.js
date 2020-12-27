const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);



const problems = [
    {
        type: "addition",
        numbers: [6, 7],
        answer: 13
    },
    {
        type: "multiplication",
        numbers: [6, 7],
        answer: 42
    },
    {
        type: "multiplication",
        numbers: [7, 7],
        answer: 49
    },
    {
        type: "addition",
        numbers: [4, 5],
        answer: 9
    }
];

const firstProblem = problems[0];

function getOperator(type) {
    let symbol = "";
    switch (type) {
        case "addition":
            symbol = "+";
            break;
        case "multiplication":
            symbol = "x";
            break;
        case "division":
            symbol = "÷";
            break;
        case "subtraction":
            symbol = "-";
            break;
        default: 
            symbol = "";
            break;
    }
    return symbol;
}

function sentenceFromProblem (problemObj = {}) {
    const {type, numbers} = problemObj;
    const operator = getOperator(type);
    const sentenceBase = `What is ${numbers[0]} ${operator} ${numbers[1]}?`;
    return sentenceBase;
}

function possibleAnswersFromProblem(problemObj = {}) {
    const {answer} = problemObj;
    const possibleAnswers = [
        answer + 10,
        answer - 10,
        answer,
    ];
    return possibleAnswers;
}

function isRightAnswer(givenAnswer, problemObj = {}) {
    const {answer} = problemObj;
    return givenAnswer && (givenAnswer == answer);
}

function getPossibleAnswersMarkup(answerList = []) {
    let markup = '';
    answerList.forEach((answer) => {
        markup += `
            <div class="answer" data-value="${answer}">
                <h4>${answer}</h4>
            </div>
        `;
    });
    return markup;
}

const $mathProblemContainer = $('#math-problem');
const $possibleAnswersContainer  = $('#possible-answers');
const $newProblemButton = $('#new-problem-btn');

let theProblemObj = null;

$newProblemButton.addEventListener('click', getNewProblem);

function getNewProblem() {
    const randomNumber = Math.floor(Math.random() * problems.length);
    theProblemObj = problems[randomNumber];

    const problem = sentenceFromProblem(theProblemObj);
    $mathProblemContainer.innerHTML = problem;
    
    const possibleAnswers = possibleAnswersFromProblem(theProblemObj);
    $possibleAnswersContainer.innerHTML = getPossibleAnswersMarkup(possibleAnswers);

    const $possibleAnswerCards = $$('#possible-answers .answer');
    $possibleAnswerCards.forEach(card => {
        card.addEventListener('click', (evt) => {
            const value = evt.target.innerText;
            const intValue = parseInt(value, 10);
            const rightAnswer = isRightAnswer(intValue, theProblemObj);
            let message = "Sorry, that is incorrect";
            if (rightAnswer) {
                message = "Congratulations! You got the right answer!";
                getNewProblem();
            }
            alert(message);
        });
    });
}




