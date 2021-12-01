/*Task-1*/

let num1;
let num2;
let operatorsArr = ['+', '-', '*'];
let operator;

function randomEquation() {
    num1 = Math.floor(Math.random() * 11);
    num2 = Math.floor(Math.random() * 11);
    operator = operatorsArr[Math.floor(Math.random() * operatorsArr.length)];
};

function calculate(num1, num2, operator) {
    if (operator == '+') {
        return num1 + num2;
    }
    if (operator == '*') {
        return num1 * num2;
    }
    if (num1 <= num2) {
        if (operator == '-') {
            return num2 - num1;
        }
    } else {
        if (operator == '-') {
            return num1 - num2;
        }
    }
};

function showTask(num1, num2, operator) {
		if(operator == '*') operator = ' x ';
    let containerTask = document.querySelector('.task-container');
    containerTask.innerHTML = '';

    let firstTaskContainer = document.createElement('div');
    firstTaskContainer.classList.add('task-container-inner');

    let description = document.createElement('div');
    description.classList.add('task1-description');
    description.appendChild(document.createTextNode('You need to solve equation'));
    firstTaskContainer.appendChild(description);

    let equationContainer = document.createElement('div');
    equationContainer.classList.add('equation-container');

    let equation = document.createElement('div');
    equation.classList.add('equation');
    if (num1 >= num2) {
        equation.appendChild(document.createTextNode(num1));
        equation.appendChild(document.createTextNode(` ${operator} `));
        equation.appendChild(document.createTextNode(num2));
        equation.appendChild(document.createTextNode(' = '));
    } else {
        equation.appendChild(document.createTextNode(num2));
        equation.appendChild(document.createTextNode(` ${operator} `));
        equation.appendChild(document.createTextNode(num1));
        equation.appendChild(document.createTextNode(' = '));
    }
    equationContainer.appendChild(equation);



    let input = document.createElement('input');
    input.setAttribute('placeholder', 'Enter your answer');
    input.classList.add('task1-answer');

    equationContainer.appendChild(input);

    firstTaskContainer.appendChild(equationContainer);
    containerTask.appendChild(firstTaskContainer);
    document.querySelector('.task1-answer').focus();
}

function checkAnswerTask1() {
    let userAnswer = +document.querySelector('.task1-answer').value;
    let trueAnswer = calculate(num1, num2, operator);

    if (userAnswer == trueAnswer) {
        return true;
    } else {
        return false;
    }
}


/*Task-2*/
let rand;
let randomEnglishWord;
let word;
let trans;
let dictionary = [
        {
            word: "Fish",
            trans: ["рыба", "рыбка"]
    },
        {
            word: "Car",
            trans: ["машина", "aвтомобиль"]
    },
        {
            word: "Dog",
            trans: ["собака","пес"]
    },
        {
            word: "Cat",
            trans: ["кот","кошка"]
    },
    {
            word: "Snake",
            trans: ["змея","змей"]
    },
    {
            word: "Rabbit",
            trans: ["кролик","заяц"]
    },
    {
            word: "Pig",
            trans: ["свинья","поросенок"]
    }
];

function randomTranslateWord(){
    rand = Math.floor(Math.random() * dictionary.length);
    randomEnglishWord = dictionary[rand];
    word = randomEnglishWord["word"];
    trans = randomEnglishWord["trans"];
}

function showTask2() {
    let taskContainer = document.getElementById('task-container');
    taskContainer.innerHTML = '';

    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let input = document.createElement('input');
    input.setAttribute('placeholder', 'Enter translate');
    input.className = ('task2-answer');
		

    h2.innerHTML = 'Translate into Russian';
    h2.className = 'task-header';
    h3.className = 'task-word';

    h3.innerHTML = word;

    taskContainer.appendChild(h2);
    taskContainer.appendChild(h3);
    taskContainer.appendChild(input);
		document.querySelector('.task2-answer').focus();

}

function checkAnswerTask2() {
    let userAnswer = document.querySelector('.task2-answer').value;
    debugger
    userAnswer = userAnswer.toLowerCase();
    if (trans.indexOf(userAnswer) != -1) {
        return true;
    } else {
        return false;
    }
}

/*Task-3*/
let words = ['example', 'city', 'elephant', 'animal', 'family', 'house', 'snake', 'frog', 'apple', 'juce', 'mother'];
let randomWord;
let d_word;
let checkWord;

function randomСomposeWord() {
    let rand = Math.floor(Math.random() * words.length);
    randomWord = words[rand];
}

function showTask3() {
    let taskContainer = document.getElementById('task-container');
    taskContainer.innerHTML = '';
    let ul = document.createElement('ul');
    let h2 = document.createElement('h2');
    h2.innerHTML = 'Make up a word';
    h2.className = 'task-header';
    ul.id = 'wordblock';

    taskContainer.appendChild(h2);
    taskContainer.appendChild(ul);

    d_word = randomWord.split('');

    $(function () {
        $("#wordblock").sortable();
        $("#wordblock").disableSelection();

        shuffle(d_word);

        const lis = [];
        for (let i = 0; i < d_word.length; i++) {
            lis.push('<li class="ui-state-default">' + d_word[i] + '</li>')
        }

        $('#wordblock').html(lis.join(''));

        $('#wordblock').mouseup(function () {
            setTimeout(() => {
                let r_word = '';
                $('#wordblock>li').each(function (e) {
                    r_word += $(this).text();
                });
                checkWord = r_word;
                if (r_word == randomWord) {
                    let correct = document.createElement('div');
                    correct.className = 'task-correct-icon';
                    taskContainer.appendChild(correct);
                }
            }, 0);
        });

    });
}

function shuffle(a, b, c, d) {
    c = a.length;
    while (c) b = Math.random() * (--c + 1) | 0, d = a[c], a[c] = a[b], a[b] = d
}

function checkAnswerTask3() {
    if (checkWord == randomWord) {
        return true;
    } else {
        return false;
    }
}
