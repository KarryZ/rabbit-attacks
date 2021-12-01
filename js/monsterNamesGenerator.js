let firstName = ['Silly', 'Fat', 'Terrible', 'Angry'];
let secondName = ['Ogre', 'Goblin', 'Troll', 'Orc'];
let thirdName = ['Groron', 'Ughdum', 'Lurkku', 'Drabor'];

function randomName() {
    let randomFirstName = firstName[Math.floor(Math.random() * firstName.length)];
    let randomSecondName = secondName[Math.floor(Math.random() * secondName.length)];
    let randomThirdName = thirdName[Math.floor(Math.random() * thirdName.length)];

    return `${randomFirstName} ${randomSecondName} ${randomThirdName}`;
}

function setMonsterNameInHTML() {
    let name = randomName();
    let monsterNameDiv = document.querySelector('.monstr-name');
    monsterNameDiv.innerHTML = '';
    monsterNameDiv.innerHTML = name;
    /*monsterNameDiv.appendChild(document.createTextNode(name));*/
}
