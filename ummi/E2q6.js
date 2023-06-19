// const form = document.querySelector('form');
// form.addEventListner('submit',(event)=>{
// 	event.preventDefault();
// 	const username = document.getElementById('username').value;
// 	const password = document.getElementById('password').value;
// 	if (username === 'admin'&& password=== 'password') {
// 		alert('login successful');
// 		window.location.href ='Ex2q2.html';
// 	}
// 	else{
// 		alert('Invalid username or password');
// 	}
// });

// console.log("nnnn");


 
function mmanga() {
	let names = document.querySelector('#fname').value;
 	let Address = document.querySelector('#Address').value;
 	let email = document.querySelector('#email').value;
 	let maoni = document.querySelector('#Comments').value;
 	localStorage.setItem("name",names);
 	localStorage.setItem("fname",Address);
 	localStorage.setItem("mname",email);
 	localStorage.setItem("lname",maoni);
}
let name = localStorage.getItem('names');
let Address = localStorage.getItem('Address');
let email = localStorage.getItem('email');
let maoni = localStorage.getItem('maoni');


let bobo = document.getElementById('myn');
let bob = document.getElementById('mya');
let bbo = document.getElementById('mye');
let bb = document.getElementById('myc');
if (name && Address ) {
	if (email && maoni) {
		bobo.innerHTML = `name:${name}`;
		bob.innerHTML = `name:${Address}`;
		bbo.innerHTML = `name:${email}`;
		bb.innerHTML = `name:${maoni}`;

	}
}



