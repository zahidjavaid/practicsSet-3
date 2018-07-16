// 3.10
// TechKaro wants you to write a program that tells whether a student qualifies 
// for the monthly awards or not. Students who have been 
// absent 0, 1 or 2 times in a certain month are eligible for the award in that month.
// Otherwise they are not eligible.



const maxAbsent = 2; 
let studentAbsent = 1;

if(studentAbsent<=maxAbsent){
	console.log("Eligible for the award");
} else {
	console.log("Not eligible");
}