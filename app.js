let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');

// Increment counter when clicked on slide button
let counter = 1;

nextBtn.addEventListener('click', () => {
	counter++;
	if (counter > 5) {
		counter = 1;
	}
	checkCounter();
	console.log(counter);
});

prevBtn.addEventListener('click', () => {
	counter--;
	if (counter < 1) {
		counter = 5;
	}
	checkCounter();
	console.log(counter);
});

// Check counter number and change slider output

function checkCounter() {
	one.classList.toggle('active', counter === 1);
	two.classList.toggle('active', counter === 2);
	three.classList.toggle('active', counter === 3);
	four.classList.toggle('active', counter === 4);
	five.classList.toggle('active', counter === 5);
}
