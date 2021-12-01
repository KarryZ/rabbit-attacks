class User {
	constructor(firstName, killedMonsters = 0) {
		this.firstName = firstName.value || 'anonym';
		this.killedMonsters = killedMonsters;
		this.id = Math.floor(Math.random() * 1000000);
		this.currentLevel = 0;
		
	}
	
	setUserInLocal() {
		localStorage.setItem(this.id, JSON.stringify(this));
	}
	
	getUserFromLocal() {
		let allUsers = [];
		for (let i = 0, len = localStorage.length; i < len; ++i) {
			allUsers.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
		}
		return allUsers;
	}
	
	returnCurrentUser() {
		return localStorage.getItem(this.id);
	}
	
	setNextLevel() {
		return ++this.currentLevel;
	}
	
	returnCurrentLevel() {
		return this.currentLevel;
	}
	
	showCurrentName(){
		let userNameDiv = document.querySelector('.user-name');
		let name = JSON.parse(this.returnCurrentUser()).firstName;
		userNameDiv.appendChild(document.createTextNode(name));
		
	}
	
	setNumberKilledMonster() {
		let current = JSON.parse(this.returnCurrentUser());
		console.log(typeof current);
		this.killedMonsters = ++current.killedMonsters;
		this.setUserInLocal();
	}
	
}




