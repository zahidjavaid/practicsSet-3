// 3.3
// UIT wants you to write a program to tell if it is closed due to heat wave or not. 
// If the temperature is greater than 40, it should print 
// IMPORTANT ANNOUNCEMENT!!! UIT is closed tomorrow due to heat wave.
// Otherwise, it should do nothing.

let highTemperature = 40;
let normalTemperature = 39;

if(normalTemperature>highTemperature){
	console.log("IMPORTANT ANNOUNCEMENT!!! UIT is closed tomorrow due to heat wave");
} else {
	console.log("UIT open tomorrow");
}