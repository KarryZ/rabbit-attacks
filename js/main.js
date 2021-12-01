//resultTable();
const buttonsMagic = document.querySelector('.buttons-magic');
let saveMagic;
let randomTaskIndex;

/*Hero HP*/
let heroHP = 210;
let monstrHP = 210;
let heroHealthBar = document.getElementById('heroHealthBar');
let monstrHealthBar = document.getElementById('monstrHealthBar');
$("#menuTheme").trigger('play');

function changeHPvalue() {
    setTimeout(function () {
        heroHP = heroHP - 70;
        heroHealthBar.style.width = heroHP + 'px';
    }, 3000);

    setTimeout(function () {
        if (monstrHP == 0 || heroHP == 0) {
            nextLevel();
        }
    }, 3500);

}

function changeMonstrHPvalue() {
    setTimeout(function () {
        monstrHP = monstrHP - 70;
        monstrHealthBar.style.width = monstrHP + 'px';
    }, 3000);

    setTimeout(function () {
        if (monstrHP == 0 || heroHP == 0) {
            nextLevel();
        }
    }, 3500);
}





buttonsMagic.addEventListener('click', function (event) {
    let target = event.target;
    event.stopPropagation;
    saveMagic = target;
    if (target.className == "fire-btn" || target.className == 'ice-btn' || target.className == 'health-btn' || target.className == 'thunder-b') {
        randomTaskIndex = (Math.random() * 3) + 1 | 0;
        if (randomTaskIndex == 1) {
            openTask();
            randomEquation();
            showTask(num1, num2, operator);
        } else if (randomTaskIndex == 2) {
            openTask();
            randomTranslateWord();
            showTask2();
        } else if (randomTaskIndex == 3) {
            openTask();
            randomСomposeWord();
            showTask3();
        }
    }
});

function openTask() {
    $('.overlay-choice').toggleClass('overlay-choice-active');
    $('.overlay-task').addClass('overlay-task-open');
};

//close Task & submit answer

function closeTask() {
    $('.overlay-task').removeClass('overlay-task-open');
    if (randomTaskIndex == 1) {
        attackAnimation(checkAnswerTask1);
    } else if (randomTaskIndex == 2) {
        attackAnimation(checkAnswerTask2);
    } else if (randomTaskIndex == 3) {
        attackAnimation(checkAnswerTask3);
    }
}

let taskModal = document.querySelector('.task-modal');

taskModal.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("submit-answer").click();
    }
});

function attackAnimation(checkFunc) {
    let answerRes = checkFunc();

    if (answerRes) {
        if (saveMagic.className == "fire-btn") {
            setTimeout(fire(), 1000);
            changeMonstrHPvalue();
        }
        if (saveMagic.className == 'ice-btn') {
            setTimeout(ice(), 1000);
            changeMonstrHPvalue();
        }
        if (saveMagic.className == 'health-btn') {
            setTimeout(addHealth(), 1000);
        }

        if (saveMagic.className == 'thunder-b') {
            setTimeout(electro(), 1000);
            changeMonstrHPvalue();
        }



    } else {
        $('#miss-sound').trigger('play');

        $('.miss-attack').addClass('active-miss');

        setTimeout(function () {
            $('.miss-attack').removeClass('active-miss');
        }, 1500);

        monstrAttackAnimation();
        setTimeout(monstrAttackEffect(), 1000);
        setTimeout(changeHPvalue(), 1000);

        setTimeout(function () {
            $('.rabbit').toggleClass('damage');
            $('.rabbit').toggleClass('rabbit');
            $("#damage").trigger('play');
        }, 3000);
        
        setTimeout(function () {
            $('.damage').toggleClass('rabbit');
            $('.rabbit').toggleClass('damage');
        }, 3500);
    }
}

function fire() {
    $('.rabbit').toggleClass('attack');
    $('.rabbit').toggleClass('rabbit');
    $('.fire img').toggleClass('show');
    $('#audio-fire').trigger('play');
    setTimeout(function () {
        $('#monstrHit').trigger('play');
    }, 1500);
    $('.buttons-magic').children().addClass("disable");
    setTimeout(function () {
        $('.attack').toggleClass('rabbit');
        $('.rabbit').toggleClass('attack');
    }, 1550);
    setTimeout(function () {
        $('.fire img').toggleClass('show');
        $('.buttons-magic').children().removeClass("disable");
    }, 3000);
}

function ice() {
    $('.rabbit').toggleClass('attack');
    $('.rabbit').toggleClass('rabbit');
    $('.ice img').toggleClass('show-ice');
    $("#ice").trigger('play');
    setTimeout(function () {
        $('#monstrHit').trigger('play');
    }, 1500);
    $('.buttons-magic').children().addClass("disable");

    setTimeout(function () {
        $('.attack').toggleClass('rabbit');
        $('.rabbit').toggleClass('attack');
    }, 1550);
    setTimeout(function () {
        $('.ice img').toggleClass('show-ice');
        $('.buttons-magic').children().removeClass("disable");
    }, 2500);
}

function addHealth() {
    $('.add-health').toggleClass('active-health');
    $("#health").trigger('play');
    $('.buttons-magic').children().addClass("disable");
    $('.health-btn span').empty();
    $('.health-btn span').append(document.createTextNode("0"));

    heroHP = 210;
    heroHealthBar.style.width = heroHP + 'px';

    setTimeout(function () {
        $('.add-health').toggleClass('active-health');
        $('.buttons-magic').children().removeClass("disable");
        $('.health-btn').addClass('health-btn-disabled');
    }, 1500);
}

function electro() {
    $('.rabbit').toggleClass('attack');
    $('.rabbit').toggleClass('rabbit');
    $('.thunder img').toggleClass('show');
    $("#electro").trigger('play');
    setTimeout(function () {
        $('#monstrHit').trigger('play');
    }, 1500);
    $('.buttons-magic').children().addClass("disable");

    setTimeout(function () {
        $('.attack').toggleClass('rabbit');
        $('.rabbit').toggleClass('attack');
        $('.thunder img').toggleClass('show');
        $('.buttons-magic').children().removeClass("disable");
        //			if(monstrHP == 0 || heroHP == 0){
        //						 nextLevel ();
        //					}
    }, 3000);
}

function monstrAttackEffect() {
    $('.monstreffect').empty();
    let monstrAttackEffects = ['img/monstrAtackAnim.gif', 'img/monstrAtackAnim1.gif'];
    let randomAttackEffects = monstrAttackEffects[Math.floor(Math.random() * monstrAttackEffects.length)];
    let img = document.createElement('img');
    img.setAttribute('src', randomAttackEffects);
    $('.monstreffect').append(img);

    setTimeout(function () {
        $('#monstrAttack').trigger('play');
    }, 2500);

    setTimeout(function () {
        $('#monstrHitDamage').trigger('play');
    }, 3000);

    setTimeout(function () {
        $('.monstreffect img').toggleClass('show');
    }, 3000);

    setTimeout(function () {
        $('.monstreffect img').toggleClass('show');
    }, 4500);
}

const buttonsActive = document.querySelector('.buttons-example');
buttonsActive.addEventListener('click', function (event) {
    let target = event.target;
    event.stopPropagation;
    if (target.className == 'rabbit-damage') {
        $('.rabbit').toggleClass('damage');
        $('.rabbit').toggleClass('rabbit');
        $("#damage").trigger('play');
        $('.buttons-example').children().addClass("disable");
        setTimeout(function () {
            $('.damage').toggleClass('rabbit');
            $('.rabbit').toggleClass('damage');
            $('.buttons-example').children().removeClass("disable");
        }, 600);

    } else if (target.className == 'button-magic') {
        $("#magic-sound").trigger('play');
        $('.overlay-choice').addClass('overlay-choice-active');

    }
});
