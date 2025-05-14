
// selectare main
const slider = document.getElementById('main_slider');

const el1 = document.getElementById('1');
const el2 = document.getElementById('2');
const el3 = document.getElementById('3');
const el4 = document.getElementById('4');

const elements = [el1, el2, el3, el4];
// lista de elemente


const images = [
    'img/background_4.webp',
    'img/gpu_1.webp',
    'img/gpu2.webp',
    'img/background_2.webp'
];


// index
let currentIndex = 0;
let tempIndex = 0;
let tempIndex1 = 0;
// img creare
const imgElement = document.createElement('img');
imgElement.src = images[currentIndex];
imgElement.style.width = '100%';
imgElement.style.height = '92svh';
imgElement.style.objectFit = 'cover';
imgElement.style.objectPosition = 'center';
slider.prepend(imgElement);

// slide
function changeSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];

    elements.forEach(element => {
        element.classList.remove('progresBox_curent');
    });

    elements[currentIndex].classList.add('progresBox_curent');
}


function changeSlide_byIndex(index) {
    currentIndex = index-1; 
    changeSlide();
}

// delay de 3 secunde
setInterval(changeSlide, 3000);





//carousel
function slideTo(value) {
    const slides = document.querySelector('.slides1');
    slides.style.transform = `translateX(-${value * 100 / 10}%)`;
}

//menu

Menu.style.display = "none";
function ShowHide(x) {
  x.classList.toggle("change");
  var Menu = document.getElementById("Menu");
  if (Menu.style.display === "none") {
    Menu.style.display = "block";
  } else {
    Menu.style.display = "none";
  }
}  

var elementes = document.querySelectorAll('#element');
elementes.forEach(element =>
    element.addEventListener("click", function() {
    var element = document.getElementById("Menu");
    var element1 = document.getElementById("this");
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
        element1.classList.remove("change");
    }
}));