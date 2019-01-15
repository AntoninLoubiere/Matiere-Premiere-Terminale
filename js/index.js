let listSubject = ['Mathématiques', 'LCA Latin Grec', 'Histoire géographie géopolitique et sciences politiques', 'Humanité, littérature et philosophie',
            'Langue et littérature étrangère Anglais', 'Langue et littérature étrangère Espagnol',  'Langue et littérature étrangère Allemand','Langue et littérature étrangère Italien','Sciences économique et sociales', 
               'Physique chimie','SVT','Biologie-écologie','Numérique et science informatique ','Science de l’ingénieur','Cinéma-audiovisuel ','Histoire des arts','Théâtre','Musique','Arts du cirque','Danse','Arts plastiques'];

let listToDontRepeat = [['Langue et littérature étrangère Espagnol', 'Langue et littérature étrangère Allemand', 'Langue et littérature étrangère Anglais','Langue et littérature étrangère Italien'],
						['Cinéma-audiovisuel ','Histoire des arts','Théâtre','Musique','Arts du cirque','Danse','Arts plastiques']];

let listCheckbox = {};

let listPossibility = document.getElementById("listPossibility");

let ratioPremiere = document.getElementById("ratioPremiere");
let ratioTerminale = document.getElementById("ratioTerminale");

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

function createCheckboxInSubjectForm() {
	var form = document.getElementById("chooseSubjectForm");

	for (let i = 0; i < listSubject.length; i++) {
		let subject = listSubject[i]

		let cb = document.createElement('input');
		cb.type = 'checkbox';
		cb.name = subject;
		cb.id = "idCheckbox" + subject;
		cb.checked = false;
		cb.onclick = updateChoice;
		form.appendChild(cb);
		listCheckbox[subject] = cb;

		let label = document.createElement('label')
		label.htmlFor = "idLabel" + subject;
		label.appendChild(document.createTextNode(subject));
		form.appendChild(label);

		let br = document.createElement('br')
		form.appendChild(br)
	}

	let checkboxAutoChecked = findGetParameter("checkbox");
	if (checkboxAutoChecked != null) {
		for (let i = 0; i < checkboxAutoChecked.length; i++) {
			if (checkboxAutoChecked[i] == '1') {
				listCheckbox[listSubject[i]].checked = true;
			}
		}
	}
}

function getChoiceTerminal() {

	listChoice = [];

	listSubjectCheck = [];

	for (var key in listCheckbox) {
		if (listCheckbox[key].checked)
			listSubjectCheck.push(key);
	}

	for (let i1 = 0; i1 < listSubjectCheck.length; i1++) {
		for (let i2 = 0; i2 < listSubjectCheck.length; i2++) {

			choice1 = listSubjectCheck[i1];
			choice2 = listSubjectCheck[i2];

			if (choice1 == choice2)
				continue;

			_continue = false;

			// verify don't repeat
			for (let iDontRepeat = 0; iDontRepeat < listToDontRepeat.length; iDontRepeat++) {
				if (isIn(choice1, listToDontRepeat[iDontRepeat]) && isIn(choice2, listToDontRepeat[iDontRepeat])) {
					_continue = true;
					break;
				}
			}

			if (_continue) {
				continue;
			}

			choice = [choice1, choice2];

			choice.sort();

			alreadyIn = false;

			for (let iChoice = 0; iChoice < listChoice.length; iChoice++) {
				if (listChoice[iChoice].toString() === choice.toString()) {
					alreadyIn = true;
					break;
				}
			}

			if (!alreadyIn) {
				listChoice.push(choice);
				addTerminalePossibility(listChoice.length, choice);
			}

		}
	}

	return listChoice;
}

function getChoicePremiere() {

	listChoice = [];

	listSubjectCheck = [];

	for (var key in listCheckbox) {
		if (listCheckbox[key].checked)
			listSubjectCheck.push(key);
	}

	for (let i1 = 0; i1 < listSubjectCheck.length; i1++) {
		for (let i2 = 0; i2 < listSubjectCheck.length; i2++) {

			choice1 = listSubjectCheck[i1];
			choice2 = listSubjectCheck[i2];

			if (choice1 == choice2)
				continue;

			_continue = false;

			// verify don't repeat
			for (let iDontRepeat = 0; iDontRepeat < listToDontRepeat.length; iDontRepeat++) {
				if (isIn(choice1, listToDontRepeat[iDontRepeat]) && isIn(choice2, listToDontRepeat[iDontRepeat])) {
					_continue = true;
					break;
				}
			}

			if (_continue) {
				continue;
			}

			for (let i3 = 0; i3 < listSubjectCheck.length; i3++) {

				choice3 = listSubjectCheck[i3];

				if (choice1 == choice3 || choice2 == choice3)
				continue;

				_continue = false;

				// verify don't repeat
				for (let iDontRepeat = 0; iDontRepeat < listToDontRepeat.length; iDontRepeat++) {
					// console.log(choice1);
					// console.log(isIn(choice1, listToDontRepeat[iDontRepeat]));
					if ((isIn(choice1, listToDontRepeat[iDontRepeat]) && isIn(choice3, listToDontRepeat[iDontRepeat])) ||
							(isIn(choice2, listToDontRepeat[iDontRepeat]) && isIn(choice3, listToDontRepeat[iDontRepeat])) ) {
						_continue = true;
						break;
					}
				}

				if (_continue) {
					continue;
				}

				choice = [choice1, choice2, choice3];

				choice.sort();

				alreadyIn = false;

				for (let iChoice = 0; iChoice < listChoice.length; iChoice++) {
					if (listChoice[iChoice].toString() === choice.toString()) {
						alreadyIn = true;
						break;
					}
				}

				if (!alreadyIn) {
					listChoice.push(choice);

					addPremierePossibility(listChoice.length, choice);
				}

			}

		}
	}

	return listChoice;
}

function addPremierePossibility(index, listChoice) {

	if (!ratioPremiere.checked)
		return;

	let possibility = document.createElement('div');
	listPossibility.appendChild(possibility);
	possibility.classList.add('possibility');

	let textChoice = document.createElement('p')
	possibility.appendChild(textChoice);
	textChoice.classList.add('center');
	textChoice.appendChild(document.createTextNode("Choix n°" + index + ":"));

	let possibilityP = document.createElement('p');
	possibility.appendChild(possibilityP);
	possibilityP.classList.add('possibility');
	possibilityP.appendChild(document.createTextNode("1. " + listChoice[0]));
	possibilityP.appendChild(document.createElement('br'));
	possibilityP.appendChild(document.createTextNode("2. " + listChoice[1]));
	possibilityP.appendChild(document.createElement('br'));
	possibilityP.appendChild(document.createTextNode("3. " + listChoice[2]));

}

function addTerminalePossibility(index, listChoice) {

	if (!ratioTerminale.checked)
		return;

	let possibility = document.createElement('div');
	listPossibility.appendChild(possibility);
	possibility.classList.add('possibility');

	let textChoice = document.createElement('p')
	possibility.appendChild(textChoice);
	textChoice.classList.add('center');
	textChoice.appendChild(document.createTextNode("Choix n°" + index + ":"));

	let possibilityP = document.createElement('p');
	possibility.appendChild(possibilityP);
	possibilityP.classList.add('possibility');
	possibilityP.appendChild(document.createTextNode("1. " + listChoice[0]));
	possibilityP.appendChild(document.createElement('br'));
	possibilityP.appendChild(document.createTextNode("2. " + listChoice[1]));

}

function removeAllPossibility() {
	while (listPossibility.hasChildNodes()) {
		listPossibility.removeChild(listPossibility.lastChild);
	}
}

function isIn(value, list) {
	return list.indexOf(value) >= 0;
}


function updateChoice() {
	removeAllPossibility();

	let numberChoicePremiere = document.getElementById("premiereNumberChoice");
	let numberChoiceTerminal = document.getElementById("terminalNumberChoice");

	numberChoicePremiere.innerHTML = '???'
	numberChoiceTerminal.innerHTML = '???'

	numberChoicePremiere.innerHTML = getChoicePremiere().length;
	numberChoiceTerminal.innerHTML = getChoiceTerminal().length;
}

function saveButton() {
	let url = "https://antoninloubiere.github.io/Matiere-Premiere-Terminale/?checkbox="

	for (let i = 0; i < listSubject.length; i++) {
		if (listCheckbox[listSubject[i]].checked) {
			url += "1"
		} else {
			url += "0"
		}
	}

	console.log(url)
	alert("Lien vers cet page:\n" + url);
}


createCheckboxInSubjectForm();
updateChoice();