let listSubject = ['Art', 'Ecologie, agronomie et territoires', 'Histoire geographie', 
'Humanite, litterature et philosophie', 'Langues et literatures etrangere', 'Mathematiques', 
'Numerique et sciences informatique', 'SVT', 'Sciences de l\'ingenieur', 
'Sciences economique et sociales', 'Physique chimie'];

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

		let label = document.createElement('label')
		label.htmlFor = "idLabel" + subject;
		label.appendChild(document.createTextNode(subject));
		form.appendChild(label);

		let br = document.createElement('br')
		form.appendChild(br)
	}
}

createCheckboxInSubjectForm();