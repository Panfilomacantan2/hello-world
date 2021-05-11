let slides = document.querySelectorAll('.slides');
let galleryContainer = document.querySelector('.gallery-container');
let sliderCount = 0;
let advanceImage = 0;

function animates() {
    let animation = 'animates 1s ease-in-out forward';
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}

	slides[sliderCount].style.display = 'block';
    slides[sliderCount].style.animation = animation;

	galleryContainer.style.backgroundImage = `url(${slides[advanceImage].src})`;

	sliderCount++;
	advanceImage += 2;

	if (sliderCount >= slides.length) {
		sliderCount = 0;
	}
	if (advanceImage >= slides.length + 1) {
		advanceImage = 0;
	}
	// console.log(sliderCount)
	// console.log(advanceImage)
}


setInterval(animates, 1000);
