let images = [
	'images/1.jpg',
	'images/2.jpg',
	'images/3.jpg',
	'images/4.jpg',
	'images/5.jpg',
	'images/6.jpg',
	'images/7.jpg',
	'images/8.jpg',
	'images/9.jpg'
];

let imageWrapper = document.querySelector('.image-wrapper');

let prev = document.createElement('button');
prev.innerText = 'Prev';
imageWrapper.appendChild(prev);

let img = document.createElement('img');
img.src = images[0];
imageWrapper.appendChild(img);

let next = document.createElement('button');
next.innerText = 'Next';
imageWrapper.appendChild(next);



let i = 0;
next.onclick = function () {
	i++;
	img.src = images[i];
	prev.disabled = false;
	prev.style.opacity = 1;
	if (i === images.length - 1) {
		next.style.opacity = 0;
		next.disabled = true;
	}
}

prev.onclick = function () {
	i--;
	img.src = images[i];
	next.disabled = false;
	next.style.opacity = 1;
	if (i === 0) {
		prev.style.opacity = 0;
		prev.disabled = true;
	}
}

if (i === 0) {
	prev.style.opacity = 0;
	prev.disabled = true;
}

