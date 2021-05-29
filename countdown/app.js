let slidesNumber = 0;
let dateInterval;

const countDown = () => {
	const countDate = new Date('December 16, 2021 00:00:00').getTime();
	const today = new Date().getTime();
	const gap = countDate - today;
	//console.log(gap);

	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	const textDay = Math.floor(gap / day);
	const textHour = Math.floor((gap % day) / hour);
	const textMinute = Math.floor((gap % hour) / minute);
	const textSecond = Math.floor((gap % minute) / second);

	if (textDay < 10) {
		document.querySelector('.day').innerHTML = '0' + textDay;
	} else {
		document.querySelector('.day').innerText = textDay;
	}
	if (textHour < 10) {
		document.querySelector('.hour').innerHTML = '0' + textHour;
	} else {
		document.querySelector('.hour').innerText = textHour;
	}

	if (textSecond < 10) {
		document.querySelector('.second').innerHTML = '0' + textSecond;
	} else {
		document.querySelector('.second').innerText = textSecond;
	}

	if (textMinute < 10) {
		document.querySelector('.minute').innerHTML = '0' + textMinute;
	} else {
		document.querySelector('.minute').innerText = textMinute;
	}
	if (textDay === 0) {
		document.querySelector('.expiredDate').classList.add('show');
		clearInterval(dateInterval);
	}

	//for image slider functions
	let images = document.querySelectorAll('.img-container img');
	let i;
	slidesNumber++;
	for (i = 0; i < images.length; i++) {
		images[i].style.display = 'none';
	}
	for (i = 0; i < images.length; i++) {
		images[i].style.animation = 'fade 1s ease-out';
	}
	images[slidesNumber - 1].style.display = 'block';

	if (slidesNumber >= images.length) {
		slidesNumber = 0;
	}

	//console.log(images.length)
};

dateInterval = setInterval(countDown, 1000);
