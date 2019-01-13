let listSubject = ['Art', 'Ecologie, agronomie et territoires', 'Histoire geographie', 
'Humanite, litterature et philosophie', 'Langues et literatures etrangere', 'Mathematiques', 
'Numerique et sciences informatique', 'SVT', 'Sciences de l\'ingenieur', 
'Sciences economique et sociales', 'Physique chimie'];

let listToDontRepeat = [["Langues et literatures etrangere"]];

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
				if (choice1 in listToDontRepeat[iDontRepeat] && choice2 in listToDontRepeat[iDontRepeat]) {
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
					if ((choice1 in listToDontRepeat[iDontRepeat] && choice3 in listToDontRepeat[iDontRepeat]) ||
							(choice2 in listToDontRepeat[iDontRepeat] && choice3 in listToDontRepeat[iDontRepeat]) ) {
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

				if (!alreadyIn) 
					listChoice.push(choice);

			}

		}
	}

	return listChoice;
}


function updateChoice() {
	
}


createCheckboxInSubjectForm();
console.log(getChoicePremiere());