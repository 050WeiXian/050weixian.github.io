//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
var allpages=document.querySelectorAll(".page");
const flourID = document.getElementById("flourID");
const eggID = document.getElementById("eggID");
//select all subtopic pages
function hideall(){ //function to hide all pages
	for(let onepage of allpages){ //go through all subtopic
		onepage.style.display="none"; //hide it
	}
}
function show(pgno){ //function to show selected page no
	hideall();
	//select the page based on the parameter passed in
	let onepage=document.querySelector("#page"+pgno);
	onepage.style.display="block";
	//show the page
}
function flour2bowl(){
	flourID.style.bottom = "-200px";
	flourID.style.left = "148px";
}
function egg2bowl(){
	eggID.style.bottom = "-200px";
	eggID.style.left = "-148px";
}
/*Listen for clicks on the buttons, assign anonymous eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
	show(1);
});
page2btn.addEventListener("click", function () {
	show(2);
});
page3btn.addEventListener("click", function () {
	show(3);
});
show(1);
flourID.addEventListener("click",flour2bowl);
eggID.addEventListener("click",egg2bowl);