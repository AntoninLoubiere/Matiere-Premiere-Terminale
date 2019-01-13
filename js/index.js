let listSubject = ["Math", "Physique"];

function createCheckboxInSubjectForm() {
	var form = document.getElementById("chooseSubjectForm");

	for (let i = 0; i < listSubject.length; i++) {
		let subject = listSubject[i]
		console.log(subject);
	}
}

createCheckboxInSubjectForm();