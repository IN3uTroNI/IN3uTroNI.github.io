
// Select the main_slider div
const slider = document.getElementById('main_slider');

const el1 = document.getElementById('1');
const el2 = document.getElementById('2');
const el3 = document.getElementById('3');
const el4 = document.getElementById('4');

const elements = [el1, el2, el3, el4];
// Array of images for the slideshow
const images = [
    'img/gpu_1.webp',
    'img/rtx-io-4.webp',
    'img/cpu.webp',
];

// Current slide index
let currentIndex = 0;
let tempIndex = 0;
let tempIndex1 = 0;
// Create an img element to display the slides
const imgElement = document.createElement('img');
imgElement.src = images[currentIndex];
imgElement.style.width = '100svw';
imgElement.style.height = '92svh';
imgElement.style.objectFit = 'none';
imgElement.style.objectPosition = 'center';
slider.prepend(imgElement);

// Function to change the slide
function changeSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];
    tempIndex = (tempIndex + 1) % elements.length;
    if (elements[tempIndex].classList.contains('progresBox_default')) {
        elements[tempIndex].classList.add('progresBox_curent');
        elements[tempIndex1].classList.remove('progresBox_curent');
    }
    console.log(tempIndex);
    tempIndex1 = tempIndex;
}

// Set interval to change slides every 3 seconds
setInterval(changeSlide, 3000);