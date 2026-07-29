//target all elements to save to constants
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
var allpages = document.querySelectorAll(".page");

const flourID = document.getElementById("flourID");
const eggID = document.getElementById("eggID");
const bowlID = document.getElementById("bowlID");
const doughID = document.getElementById("doughID");
const pinID = document.getElementById("pinID");
const flatID = document.getElementById("flatID");
const knifeID = document.getElementById("knifeID");
const cutID = document.getElementById("cutID");
const potID = document.getElementById("potID");
const cookedID = document.getElementById("cookedID");

const resetbtn = document.querySelector("#resetbtn");
const popAudio = new Audio("audio/popsound.mp3");
// https://pixabay.com/sound-effects/film-special-effects-bubble-pop-06-351337/
const eggcrackAudio = new Audio("audio/eggcrack.mp3");
// https://pixabay.com/sound-effects/film-special-effects-egg-crack-362042/
const knifecutAudio = new Audio("audio/knifecut.mp3");
// https://pixabay.com/sound-effects/household-knife-cut-veggies-foley-4-211705/
const boilingAudio = new Audio("audio/boiling.mp3");
// https://pixabay.com/sound-effects/household-boiling-water-sound-62556/
const dingAudio = new Audio("audio/ding.mp3");
// https://pixabay.com/sound-effects/film-special-effects-ding-101492/


const btnFS = document.querySelector("#btnFS");
const btnWS = document.querySelector("#btnWS");

var flour = false; var egg = false; var fs = false;

var up = "10vh"; var down = "25vh";
if (window.innerWidth < 800) {
	//mobile size
	var left = "0vw"; var mid = "20vw"; var right = "40vw";
} else {
	//desktop size
	var left = "17.2vw"; var mid = "27.2vw"; var right = "37.2vw";
}

//select all subtopic pages
function hideall(){ //function to hide all pages
	for(let onepage of allpages){ //go through all subtopic
		onepage.style.display = "none"; //hide it
	}
}
function show(pgno){ //function to show selected page no
	hideall();
	//select the page based on the parameter passed in
	let onepage = document.querySelector("#page" + pgno);
	onepage.style.display = "block";
	//show the page
}

function flour2bowl(){ //put flour in bowl
	flourID.style.transition = "all 0.5s";
	flourID.style.top = up;
	flourID.style.left = mid;
	flour = true;
	setTimeout(function() {
		flourID.style.top = down; popAudio.play(); //play sound effect
		if (flour && egg) {makedough();}
	}, 500);
	setTimeout(function() {flourID.style.display = "none";}, 1000);
	
}
function egg2bowl(){ //put egg in bowl
	eggID.style.transition = "all 0.5s";
	eggID.style.top = up;
	eggID.style.left = mid;
	egg = true;
	setTimeout(function() {
		eggID.style.top = down; eggcrackAudio.play(); //play sound effect
		if (flour && egg) {makedough();}
	}, 500);
	setTimeout(function() {eggID.style.display = "none";}, 1000);
	
}
function makedough(){ //show dough & rolling pin, hides bowl
	doughID.style.display = "block";
	doughID.style.transition = "all 0.5s";
	setTimeout(function() {
		doughID.style.top = up; 
		document.getElementById("text").innerHTML = "You made the dough!<br>Now use the rolling pin to flatten the dough.";
	}, 1500); //change instruction text
	setTimeout(function() {
		pinID.style.transition = "all 0.5s"; pinID.style.opacity = 1; // fade in pin
		bowlID.style.transition = "all 0.5s"; bowlID.style.opacity = 0; // fade out bowl
		setTimeout(function() {pinID.addEventListener("click", pin2dough);}, 500); //click on pin
	}, 2000);
}
function pin2dough(){ //use pin on dough
	popAudio.play(); //play sound effect
	pinID.style.left = mid;
	setTimeout(function() {
		pinID.style.opacity = 0; knifeID.style.transition = "all 0.5s";
		doughID.style.display = "none"; flatID.style.display = "block"; //changes dough
		setTimeout(function() {
			knifeID.style.opacity = 1; document.getElementById("text").innerHTML = "Now use the knife to cut the dough to strips.";
			setTimeout(function() {knifeID.addEventListener("click", knife2dough);}, 500);
		}, 500);
	}, 500);
}
function knife2dough(){ //use knife on flat dough
	knifecutAudio.play(); //play sound effect
	knifeID.style.left = mid;
	setTimeout(function() {
		knifeID.style.opacity = 0; potID.style.transition = "all 0.5s";
		flatID.style.display = "none"; cutID.style.display = "block"; //changes dough
		setTimeout(function() {
			potID.style.opacity = 1; document.getElementById("text").innerHTML = "You made your pasta noodles (this being spaghetti)!<br>Now cook the pasta using the pot of water.";
			setTimeout(function() {
				potID.addEventListener("click", dough2pot);
			}, 500);
		}, 1000);
	}, 500);
}
function dough2pot(){ //put cut dough in pot and cooks it
	boilingAudio.play(); //play sound effect
	cutID.style.transition = "all 0.5s";
	cutID.style.top = down;
	setTimeout(function() {
		cutID.style.opacity = 0;
		setTimeout(function() {cutID.style.display = "none"; cookedID.style.display = "block"; cookedID.style.transition = "all 0.5s";}, 500);
		setTimeout(function() {
			dingAudio.play(); //play sound effect
			cookedID.style.top = up; pinID.removeEventListener("click", pin2dough); knifeID.removeEventListener("click",knife2dough);
			document.getElementById("text").innerHTML = "You made cooked pasta!<br>You can now add whatever sauces you like, from tomato sauce to garlic and olive oil!<br>The possibilities are endless!";
		}, 3000);
	}, 500);
}

btnFS.addEventListener("click", enterFullscreen);
btnWS.addEventListener("click", exitFullscreen);

function enterFullscreen() { //must be called by user generated event
	fs = true;
	if (document.documentElement.requestFullscreen) {
		document.documentElement.requestFullscreen();
	} else if (document.documentElement.mozRequestFullScreen) { // Firefox
		document.documentElement.mozRequestFullScreen();
	} else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
		document.documentElement.webkitRequestFullscreen();
	} else if (document.documentElement.msRequestFullscreen) { // IE/Edge
		document.documentElement.msRequestFullscreen();
	}
	up = "5vh"; down = "20vh";
	btnWS.style.display = "block";
	btnFS.style.display = "none";
	resetb();
}
function exitFullscreen() {
	fs = false;
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.mozCancelFullScreen) { // Firefox
		document.mozCancelFullScreen();
	} else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
		document.webkitExitFullscreen();
	} else if (document.msExitFullscreen) { // IE/Edge
		document.msExitFullscreen();
	}
	up = "10vh"; down = "25vh";
	btnWS.style.display = "none";
	btnFS.style.display = "block";
	resetb();
}
btnWS.style.display = "none";
function resetb(){ //resets game
	document.getElementById("text").innerHTML = "Combine the flour and egg to make the dough.";
	flourID.style.left = left; flourID.style.top = down;
	eggID.style.left = right; eggID.style.top = down;
	bowlID.style.left = mid; bowlID.style.top = down;
	doughID.style.left = mid; doughID.style.top = down;
	pinID.style.left = right; pinID.style.top = up;
	flatID.style.left = mid; flatID.style.top = up;
	knifeID.style.left = left; knifeID.style.top = up;
	cutID.style.left = mid; cutID.style.top = up;
	potID.style.left = mid; potID.style.top = down;
	cookedID.style.left = mid; cookedID.style.top = down;
	
	flourID.style.display = "block";
	eggID.style.display = "block";
	doughID.style.display = "none";
	flatID.style.display = "none";
	cutID.style.display = "none";
	cookedID.style.display = "none"; 
	
	flourID.style.transition = "all 0s";
	eggID.style.transition = "all 0s";
	pinID.style.opacity = 0;
	pinID.style.transition = "all 0s";
	knifeID.style.opacity = 0;
	knifeID.style.transition = "all 0s";
	potID.style.opacity = 0;
	potID.style.transition = "all 0s";
	bowlID.style.opacity = 1;
	bowlID.style.transition = "all 0s";
	cutID.style.opacity = 1;
	cutID.style.transition = "all 0s";
	cookedID.style.opacity = 1;
	cookedID.style.transition = "all 0s";
	
	pinID.removeEventListener("click", pin2dough);
	knifeID.removeEventListener("click", knife2dough);
	
	flour = false; egg = false;
	
}
const btnSubmit = document.querySelector("#btnSubmit");
const scorebox = document.querySelector("#scorebox");
var q1, q2, score = 0;
function checkAns(){
	score = 0; //reset score to 0, check ans and give score if correct
	//read the value of the selected radio button for q1
	q1 = document.querySelector("input[name='q1']:checked").value;
	//console.log(q1); //check q1 value retrieved
	if(q1 == "Su Filindeu") score++;
	//read the value of the selected radio button for q2
	q2 = document.querySelector("input[name='q2']:checked").value;
	//console.log(q2); //check q2 value retrieved
	if(q2 == "Salt") score++;
	scorebox.innerHTML = "Score: " + score + "/2";
}
resetb();
/*Listen for clicks on the buttons, assign anonymous eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {show(1);});
page2btn.addEventListener("click", function () {show(2);});
page3btn.addEventListener("click", function () {show(3);});
show(1);
flourID.addEventListener("click", function () {flour2bowl();});
eggID.addEventListener("click", function () {egg2bowl();});
resetbtn.addEventListener("click", function () {resetb();});
btnSubmit.addEventListener("click",checkAns);
