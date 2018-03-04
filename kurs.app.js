console.log("działa!");
let a = 17;
let b = 10;
if (a>b) {
	console.log("a jest większe od b");
}
else if (a<b) {
	console.log("b jest większe od a");
}

let weather = "sun";
switch (weather) {
	case "sun":
	console.log("It's sunny!");
	break;
	case "rain":
	console.log("It's rainy!");
	break;
	case "wind":
	console.log("It's windy!");
	break;
}

weather = "rain";
switch (weather) {
	case "sun":
	console.log("It's sunny!");
	break;
	case "rain":
	console.log("It's rainy!");
	break;
	case "wind":
	console.log("It's windy!");
	break;
}
weather = "wind";
switch (weather) {
	case "sun":
	console.log("It's sunny!");
	break;
	case "rain":
	console.log("It's rainy!");
	break;
	case "wind":
	console.log("It's windy!");
	break;
}

for (let i = 0; i <= 5; i += 1) {
	console.log("cześć, miło nam Cie powitać na girls.js");

}

for (let i = 10; i > 0; i -= 1) {
	console.log("cześć, miło nam Cie powitać na girls.js");
}

for (let i = 1; i <= 50; i += 1) {
	console.log("id-"+i);
}

let counter = 0;
while(counter < 10){

	console.log("JS jest super!");
	counter += 1;
}

let group = ["Iza", "Ida", "Monika"];
console.log(group[0]);

group.push("Kasia");
console.log(group);
group[3] = "Janek";
console.log(group);
console.log(group[3]);

let partyFriends = ["Justa", "Aga", "Kama"];
console.log(partyFriends);

let allFriends = group.concat(partyFriends);
console.log(allFriends);

let part = allFriends.slice(1,4);
console.log(part);

let part2 = allFriends.slice(0,2);
console.log(part2);

allFriends.splice(2,1);
console.log(allFriends);

allFriends.splice

group.splice(0, 1, "Kate");
console.log(group);

group.indexOf("Monika");
console.log(group.indexOf("Monika"));

for (let i = 0; i < group.length; i+=1) {

	console.log("cześć " + group[i] + "! miło Cię powitać");
}

let zdanie = "Nad rzeczką opodal krzaczka, mieszkała kaczka-dziwaczka, lecz zamiast trzymać się rzeczki, robiła piesze wycieczki."
console.log(zdanie[0]);
let samogloski = ["a","e","i","o","u", "y"];
for (let i = 0; i < zdanie.length ;i+=1) {

	if(samogloski.includes(zdanie[i])) {
		console.log(zdanie[i]);
	}

}

function powitanie() {
	console.log("Hello World!");
}
powitanie();


function powitanie(name) {
	console.log("Hello" + name);
}

powitanie (" "+"Mon");

function helloGirlsJS (name) {


	console.log("Cześć,"+ name +" Witaj na girls.js!")
}

helloGirlsJS ("Ar");

function getRandomColor() {

	var letters = "0123456789ABCDEF";
	var color = "#";


	for (var i = 0; i < 6; i++){

		var randomNumber = Math.floor(Math.random()*16);

		var randomLetter = letters[randomNumber];

		color += randomLetter;
		
	}
	return color;
}


console.log(getRandomColor());

var title = document.getElementById("magic");

function changeColor(text) {

	text.style.color = getRandomColor();
}
changeColor(title);

function alertHello(){
	alert("Hello");
}

setInterval(function() {

	changeColor(title);

}, 3000);







