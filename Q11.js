// 3.11
// Hogwarts School of Witchcraft and Qizardry follows the following 
// grading system for its Final Exams:

// Total Marks = 100


const totalMarks = 100;
let obtainMarks = 60;

if(obtainMarks>91 || obtainMarks===100){
	console.log("A+");
} else if (obtainMarks>=86 || obtainMarks===90){
	console.log("A");
} else if (obtainMarks>=80 || obtainMarks===85){
	console.log("A-");
} else if(obtainMarks>=70 || obtainMarks===79){
	console.log("B");
} else if(obtainMarks>=60 || obtainMarks===69){
	console.log("C");
} else if (obtainMarks>=50 || obtainMarks===59){
	console.log("D");
} else if (obtainMarks>=40 || obtainMarks===49){
	console.log("E");
} else if (obtainMarks<=39){
	console.log("F");
}