const title = document.querySelector('#title');
const cover = document.querySelector('#cover');
const progressBar = document.querySelector('.progress-container .progress-bar');
const btnPlay = document.querySelector('#play');
const btnPause = document.querySelector('#pause');
const btnPrev = document.querySelector('#prev');
const btnNext = document.querySelector('#next');
const audio = document.querySelector('#audio');
const musicContainer = document.querySelector('.music-container');
const progressContainer = document.querySelector('.progress-container');
//
const mySongs = ['littlemix', 'paramore', 'slapshock', 'xb'];
let songIndex = 0;
//
loadSong(mySongs[songIndex]);
//
function loadSong(song) {
	audio.src = `../songs/${song}.mp3`;
	cover.src = `../images/${song}.jpg`;
	title.innerText = song;
	//audio.play();
}
//
function PauseSong() {
	console.log('PAUSE');
	document.querySelector('.music-container').classList.remove('play');
	//document.querySelector('.fa-play').style.display = 'none';
	document.querySelector('#play').className = 'fa fa-play';
	audio.pause();
}
//
function playSong() {
	document.querySelector('.music-container').classList.add('play');
	// document.querySelector('.fa-play').style.display = 'block';
	document.querySelector('#play').className = 'fa fa-pause';
	console.log('Play');
	audio.play();
}

function nextSong() {
	songIndex++;
	if (songIndex > mySongs.length - 1) {
		songIndex = 0;
	}
	//
	loadSong(mySongs[songIndex]);
	playSong();
}
function prevSong() {
	songIndex--;
	if (songIndex < 0) {
		songIndex = mySongs.length - 1;
	}
	//
	loadSong(mySongs[songIndex]);
	playSong();
}
function updateTIme(e) {
	const { duration, currentTime } = e.srcElement;
	const progressPercent = (currentTime / duration) * 100;
	progressBar.style.width = `${progressPercent}%`;
}
//
function setProgress(e) {
	const width = this.clientWidth;
	const choseTime = e.offsetX;
	const duration = audio.duration;
	//
	audio.currentTime = (choseTime / width) * duration;
}
//
btnPlay.addEventListener('click', () => {
	const isPlaying = musicContainer.classList.contains('play');
	//
	if (isPlaying) {
		PauseSong();
	} else {
		playSong();
	}
});
//
btnNext.addEventListener('click', nextSong);
btnPrev.addEventListener('click', prevSong);
audio.addEventListener('timeupdate', updateTIme);
progressContainer.addEventListener('click', setProgress);
audio.addEventListener('ended', nextSong);
//
document.body.addEventListener('keyup', pausedSong);
let i = 0;
function pausedSong(e) {
	if (i % 2 == 0) {
		musicContainer.classList.remove('play');
		PauseSong();
	} else {
		musicContainer.classList.add('play');
		playSong();
	}
	console.log(i);
	i++;
	console.log(e.arrowLeft);
}
let yearNine = [];
let yearTen = [];
let arr = [1991, 1999, 2001, 2003, 2020, 2010, 1890, 1960, 1975, 2018, 2019];
function iterator(arrs) {
	let today = new Date().getFullYear();

	arrs.forEach((arr) => {
		let computedYear = today - arr;
		if (Number(computedYear <= 90)) {
			yearTen.push(computedYear);
		} else {
			yearNine.push(computedYear);
		}
	});
	console.log("Year 20's", yearTen);
	console.log("Year 19's", yearNine);
}

iterator(arr);
//
function generateHex() {
	let storedHexValues = [];
	let hexLetters = [
		0,
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
	];
	let hex = '#';
	for (let i = 0; i < 6; i++) {
		let random = Math.floor(Math.random() * hexLetters.length);
		document.body.style.backgroundColor = hex += `${hexLetters[random]}`;

		storedHexValues.push(hex);
	}
}
document.addEventListener('mousedown', generateHex);
