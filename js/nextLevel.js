function nextLevel() {
    if (heroHP > 0) {
        let currentLevel = newUser.returnCurrentLevel();
        let setLevel = newUser.setNextLevel();
        let bacgroundLevel = ['img/level2.png', 'img/level3.png', 'img/level4.png'];
        $('.rabbit').toggleClass('run');
        $('.rabbit').toggleClass('run-away');
        $('.rabbit').toggleClass('rabbit');
        $('.buttons-example').children().addClass("disable");
        //$('#audio').trigger('play');
        setTimeout(function () {
            $('.run').toggleClass('rabbit');
            $('.rabbit').toggleClass('run');
            $('.rabbit').toggleClass('run-away');
            $('.buttons-example').children().removeClass("disable");
            monstrHP = 210;
            monstrHealthBar.style.width = monstrHP + 'px';
            aliveMonster();
            newUser.setNumberKilledMonster(); // add dead monster;
            if (currentLevel < 3) {
                $('.game-panel').css('background-image', `url(${bacgroundLevel[currentLevel]})`);
            } else {
                win();
            }
        }, 3000);
    } else {
        loseGame();
    }
    monstrDeadAnimation();
}



function win() {
    showResultPage();
    let endGameHeader = document.getElementById('end-header');
    endGameHeader.classList.add('win-header');

    console.log('you win!');

}

function loseGame() {
    rabbitDieAnimation();
    let endGameHeader = document.getElementById('end-header');
    endGameHeader.classList.add('lose-header');

    setTimeout(showResultPage, 1000);



    console.log('you lose!');

}
