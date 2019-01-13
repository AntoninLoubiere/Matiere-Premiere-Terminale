let listSubject = ['Art', 'Ecologie, agronomie et territoires', 'Histoire geographie', 
'Humanite, litterature et philosophie', 'Langues et litteratures etrangere: anglais', 
'Langues et litteratures etrangere: allemand', 'Langues et litteratures etrangere: espagnol',
'Langues et litteratures etrangere: italien', 'Mathematiques', 
'Numerique et sciences informatique', 'SVT', 'Sciences de l\'ingenieur', 
'Sciences economique et sociales', 'Physique chimie'];

let listToDontRepeat = [['Langues et litteratures etrangere: anglais', 
'Langues et litteratures etrangere: allemand', 'Langues et litteratures etrangere: espagnol',
'Langues et litteratures etrangere: italien']];

let listCheckbox = {};

function createCheckboxInSubjectForm() {
	var form = document.getElementById("chooseSubjectForm");

	for (let i = 0; i < listSubject.length; i++) {
		let subject = listSubject[i]

		let cb = document.createElement('input');
		cb.type = 'checkbox';
		cb.name = subject;
		cb.id = "idCheckbox" + subject;
		cb.checked = true;
		cb.onclick = updateChoice
		form.appendChild(cb);
		listCheckbox[subject] = cb;

		let label = document.createElement('label')
		label.htmlFor = "idLabel" + subject;
		label.appendChild(document.createTextNode(subject));
		form.appendChild(label);

		let br = document.createElement('br')
		form.appendChild(br)
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
				if (choice1 in listToDontRepeat[iDontRepeat] && choice2 in listToDontRepeat[iDontRepeat]) {
					console.log('oui')
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
					console.log('oui')
					alreadyIn = true;
					break;
				}
			}

			if (!alreadyIn) 
				listChoice.push(choice);

		}
	}

	return listChoice;
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

			if (!alreadyIn) 
				listChoice.push(choice);

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
					console.log("continue");
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

				if (!alreadyIn) 
					listChoice.push(choice);

			}

		}
	}

	return listChoice;
}

function isIn(value, list) {
	return list.indexOf(value) >= 0;
}


function updateChoice() {
	let numberChoicePremiere = document.getElementById("premiereNumberChoice");
	let numberChoiceTerminal = document.getElementById("terminalNumberChoice");

	numberChoicePremiere.innerHTML = getChoicePremiere().length;
	numberChoiceTerminal.innerHTML = getChoiceTerminal().length;
}


createCheckboxInSubjectForm();
updateChoice();