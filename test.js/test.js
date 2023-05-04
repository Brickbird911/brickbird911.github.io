// background animation
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
const animationContainer = document.getElementById('animation-container');

let animationFrameId;

function animateBackground() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	context.clearRect(0, 0, canvas.width, canvas.height);

	const gradient = context.createRadialGradient(
		canvas.width / 2, canvas.height / 2, 0,
		canvas.width / 2, canvas.height / 2, canvas.width
	);

	gradient.addColorStop(0, '#f00');
	gradient.addColorStop(0.5, '#0f0');
	gradient.addColorStop(1, '#00f');

	context.fillStyle = gradient;
	context.fillRect(0, 0, canvas.width, canvas.height);

	animationFrameId = requestAnimationFrame(animateBackground);
}

function stopAnimation() {
	cancelAnimationFrame(animationFrameId);
}

document.getElementById('animate').addEventListener('click', () => {
	animationContainer.appendChild(canvas);
	animateBackground();
});

document.addEventListener('visibilitychange', () => {
	if (document.hidden) {
		stopAnimation();
	} else {
		animateBackground();
	}
});
