// const Products = [
// 	{
// 		name: 'milk',
// 		rate: 1,
// 		category: 'food',
// 		price: 30,
// 	},
// 	{
// 		name: 'cow',
// 		rate: 5,
// 		category: 'animal',
// 		price: 80,
// 	},
// 	{
// 		name: 'javascript',
// 		rate: 3,
// 		category: 'Programming',
// 		price: 200,
// 	},
// 	{
// 		name: 'apple',
// 		rate: 1,
// 		category: 'food',
// 		price: 30,
// 	},
// ];

// class Stacks {
// 	constructor(name, rate, category) {
// 		this.name = name;
// 		this.rate = rate;
// 		this.category = category;
// 	}
// }

// const addToStacks = new Stacks('Ball', 7, 'games', 220);

// function displayStack() {
// 	let f = Products.filter((item) => item.category === 'food');
// 	return f;
// }

// let fil = displayStack();
// console.log(fil);

// document.addEventListener('DOMContentLoaded', filteredFunction);

// let btn = document.querySelector('.filtered');

// function filteredFunction() {
// 	const stacks = document.querySelector('#stacks');
// 	const row = document.createElement('tr');
// 	row.innerHTML = `<td>${fil.index}</td>
// 	                 <td>${fil.name}</td>
// 	                 <td>${fil.rate}</td>
// 	                 <td>${fil.price}</td>
// 	                 <td>${fil.categories}</td>
// 					 `;
// 	stacks.appendChild(row);
// }
// // let filtered = Products.filter((item) => item.category === 'food');
// //
// // console.log(filtered);

// // let last = Products.map(item => {
// // return item.price;
// // }).reduce((item, total) => item + total, 0)
// // console.log(last);
// // Products.splice(2, 2)
// // Products.push(addToStacks);
// // console.log(Products);
// //
// // console.log(Products.length);
// //console.log(Products[4].name);

// async function getData() {
// const res = await fetch('https://jsonplaceholder.typicode.com/users');
//
// let data = await res.json();
//
//console.log(data);
//
// displayData(data);
// }
// getData();
//
// function displayData(data) {
// let ids = data.map((name, index) => name.address.geo);
// console.log(ids);
// }
//
// displayData();

//API from POSTMAN website
async function getData() {
	//let res = await fetch('https://api.covid19api.com/summary');
	let res = await fetch('https://api.covid19api.com/summary');
	let data = await res.json();
	//console.log(data);
	displayData(data);
}

getData();

function displayData(data) {
	for (let i = 0; i < data.Countries.length; i++) {
		const stacks = document.querySelector('#stacks');
		const row = document.createElement('tr');

		row.innerHTML = `<td>${i + 1}.</td>
		                <td>${JSON.stringify(data.Countries[i].Country).replace(
									/^["'](.+(?=["']$))["']$/,
									'$1',
								)}</td>
						<td>${JSON.stringify(data.Countries[i].NewConfirmed)}</td>
						<td>${JSON.stringify(data.Countries[i].TotalConfirmed)}</td>
						<td>${JSON.stringify(data.Countries[i].NewDeaths)}</td>
						<td>${JSON.stringify(data.Countries[i].TotalDeaths)}</td>
						<td>${JSON.stringify(data.Countries[i].NewRecovered)}</td>
						<td>${JSON.stringify(data.Countries[i].TotalRecovered)}</td>
					
             	    `;

		stacks.appendChild(row);

		//console.log(JSON.stringify(data.Countries[i]));
		
	}
}
//displayData();

let map;
function initMap() {
	let marker = { lat: -34.397, lng: 150.644 };;
   map = new google.maps.Map(document.getElementById('map'), {
		center: marker,
		zoom: 8,
	});

	new google.maps.Marker({
          position: marker,
          map,
          title: "Hello World!",TIVITY
        });
}
