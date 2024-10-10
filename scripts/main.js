/*let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";*/

let myVariable = 'Ayun';

let res = 0;

let myButton  = document.querySelector("button");
let myHeading = document.querySelector("h1");

function mutiply(num1, num2){
	let result = num1 * num2;
	return result;
}

res = mutiply(4, 7);

if(res !== 28)
{
	alert("Watch out!");
}
/*
document.querySelector("html").addEventListener("click", () => {
	alert("Mouse Click!");
});*/


//let myImage = document.querySelector("img");

//alert("test3.jpg!");

function setUserName(){
	let myName = prompt("请输入你的名字");
	localStorage.setItem("name", myName);
	myHeading.textContent = "You are handsome, " + myName;
}

if(!localStorage.getItem("name")){
	setUserName();
}else{
	let storeName = localStorage.getItem("name");
	myHeading.textContent = "You are handsome, " + myName;
}

myButton.onclick = function(){
	setUserName();
};


/*
myImage.onclick = fuction(){
	let mySrc = myImage.getAttribute("src");
	if(mySrc === "images/test1.jpg"){
		alert("test1.jpg!");
		myImage.setAttribute("src", "images/test2.jpg");
	}else{
		alert("test2.jpg!");
		myImage.setAttribute("src", "images/test1.jpg");
	}
}; */

