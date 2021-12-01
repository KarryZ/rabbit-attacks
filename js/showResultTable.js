
function showResultPage() {  
		
	let gameScreen = document.getElementById('game-panel');
	gameScreen.style.display = 'none';
	let mainMenuContainer = document.getElementById('main-menu');
	mainMenuContainer.style.visibility = 'visible';
	let startMenuForm = document.querySelector('.form-main');
	startMenuForm.style.display = 'none';
	let endContainer = document.getElementById('end-game');
	endContainer.classList.add('show-end-container');
		
	filterUsers();
	
};

function filterUsers() {
	let users = newUser.getUserFromLocal();
	 let filteredUsers =  users.sort(function (a, b) {
		return b.killedMonsters - a.killedMonsters;
	})
	
	 filteredUsers.length = 10;
	 
	showResultTable (filteredUsers);
	
}

function showResultTable (users) {
	let ul = document.getElementById('game-results-table');
	ul.innerHTML = '';
	
	users.forEach(function (userObj,index) {
			let li = document.createElement('li');
		
		let spanNum = document.createElement('span');
		spanNum.classList.add('number-win');
		spanNum.appendChild(document.createTextNode(index+1));
		li.appendChild(spanNum);
		
			let spanName = document.createElement('span');
			spanName.appendChild(document.createTextNode(userObj.firstName));
			let spanKilledMonsters = document.createElement('span');
			spanKilledMonsters.appendChild(document.createTextNode(userObj.killedMonsters));
			li.appendChild(spanName);
			li.appendChild(spanKilledMonsters);
			ul.appendChild(li);
	})
	
	
}


			