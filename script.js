// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");

// function setGradient() {
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// }

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);



// STEP 1. grab the things you want to change
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
// V^makes sure this works^V
// console.log(body);
var randomBtn = document.getElementById("random");



// STEP 5 Continued
function setGradient(){
body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
	// css.innerHTML = body.style.background + ";";
		// css.createTextNode = body.style.background + ";"; idk how to make this one work GOOGLE


}


// B3
function randomColor (){
	return ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
}



function setRandomGradient(){
	// console.log("HELLO");
	body.style.background = 
	"linear-gradient(to right, "
		+ '#' + randomColor()
		+ ", "
		+ '#' + randomColor()
		+ ")";
	css.textContent = body.style.background + ";";
}






// rem we can change the body of the background by using the style. css property
// body.style.background = "red";

//STEP 2 check that things are working
// console.log(css);
// console.log(color1);
// console.log(color2);


//STEP 3 we want to listen to an event where we notice the user's actions
// use the input event listener
// make a function that logs the colors the user picked


// color1.addEventListener("input", function(){
// // V^makes sure this works^V
//	console.log(color1.value);
// })

// color2.addEventListener("input", function(){
// 	// V^makes sure this works^V
//console.log(color2.value);
// })

// STEP 4
// we want to change the background color using the input values
// 

// color1.addEventListener("input", function(){
// 	body.style.background = "linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";
// })

// color2.addEventListener("input", function(){
// 	body.style.background = "linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";
// })

// STEP 5 (see above function declartion is part of set 5 also)
// Make the code DRY

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


// STEP 6 we want to have the css content on the bottom of the webpage
// above! add this to the setGradient function
// 	css.textContent = body.style.background + ";";


// BONUS STUFF

// B1. Write code so that the colour inputs match the background generated on the first page load. 
// ^DONE^
// B2. Display the initial CSS linear gradient property on page load.
// ^DONE^???
// B3. BONUS-BONUS: Add a random button which generates two random numbers for the colour inputs.


// B1
// body.addEventListener("load", body.style.background = "red");
// window.addEventListener(document.onload, setGradient());
 body.addEventListener(document.onload, setGradient());


// B3


randomBtn.addEventListener("click", setRandomGradient);













// https://github.com/zero-to-mastery/background-generator/blob/master/script.js



















