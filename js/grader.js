function gradeResult() {
	var myResult = parseInt(document.getElementById("value1").value);
	var englishGrade;
	
	if (!myResult) {
		alert("Please enter a result.");
	} else if(myResult > 100) {
		alert("Grade cannot be higher than 100");
	}
	else{
		if(myResult >= 90) {
			englishGrade = 'A';
		} else if(myResult >= 80) {
			englishGrade = 'B';
		} else if(myResult >= 70) {
			englishGrade = 'B-';
		} else  if(myResult >= 60) {
			englishGrade = 'C';
		} else if(myResult >= 50) {
			englishGrade = 'C-';
		} else if(myResult >= 40) {
			englishGrade = 'D';
		} else {
			englishGrade = 'F';
		}
		
		var message1 = 'You got a result of: ' + englishGrade + ' in English';
		console.log(message1);
		document.getElementById("resultsentence1").innerHTML = message1;
	}
	
	var myIrishResult = parseInt(document.getElementById("value2").value);
	var irishGrade;
	
	if (!myIrishResult) {
		alert("Please enter a result.");
	} else if(myIrishResult > 100) {
		alert("Grade cannot be higher than 100");
	}
	else{
		if(myIrishResult >= 90) {
			irishGrade = 'A';
		} else if(myIrishResult >= 80) {
			irishGrade = 'B';
		} else if(myIrishResult >= 70) {
			irishGrade = 'B-';
		} else  if(myIrishResult >= 60) {
			irishGrade = 'C';
		} else if(myIrishResult >= 50) {
			irishGrade = 'C-';
		} else if(myIrishResult >= 40) {
			irishGrade = 'D';
		} else {
			irishGrade = 'F';
		}
		
		var message2 = 'You got a result of: ' + irishGrade + ' in Irish';
		console.log(message2);
		document.getElementById("resultsentence2").innerHTML = message2;
	}
	
	var myMathsResult = parseInt(document.getElementById("value3").value);
	var mathsGrade;
	
	if (!myMathsResult) {
		alert("Please enter a result.");
	} else if(myMathsResult > 100) {
		alert("Grade cannot be higher than 100");
	}
	else{
		if(myMathsResult >= 90) {
			mathsGrade = 'A';
		} else if(myMathsResult >= 80) {
			mathsGrade = 'B';
		} else if(myMathsResult >= 70) {
			mathsGrade = 'B-';
		} else  if(myMathsResult >= 60) {
			mathsGrade = 'C';
		} else if(myMathsResult >= 50) {
			mathsGrade = 'C-';
		} else if(myMathsResult >= 40) {
			mathsGrade = 'D';
		} else {
			mathsGrade = 'F';
		}
		
		var message3 = 'You got a result of: ' + mathsGrade + ' in Maths';
		console.log(message3);
		document.getElementById("resultsentence3").innerHTML = message3;
	}
}