const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
// console.log(images);

/* images.forEach(image => {
    for (const key in image) {
        console.log(image[key]);
    }
    console.log("");
}) */

const slidesEl = document.querySelector(".slides");
const thumbsEl = document.querySelector(".thumbs")
images.forEach(image => {
    const imgMarkup = '<img src="./assets/' + image.image + '" alt="">';
    // console.log(imgMarkup);
    slidesEl.insertAdjacentHTML("beforeend", imgMarkup);
    thumbsEl.insertAdjacentHTML("beforeend", imgMarkup);
});
document.querySelector(".slides > img").classList.add("active");
document.querySelector(".thumbs > img").classList.add("active_thumb");

let activeSlide = 0;
let currentSlide = document.querySelector(".active");
let currentThumb = document.querySelector(".active_thumb");
// console.log(currentSlide, currentThumb);

const prevSlide = document.querySelector(".prev_img");
// console.log(prevSlide);
prevSlide.addEventListener("click", goPrevSlide);

const nextSlide = document.querySelector(".next_img");
// console.log(nextSlide);
nextSlide.addEventListener("click", goNextSlide);

const startEl = document.querySelector(".start");
const stopEl = document.querySelector(".stop");
// console.log(startEl);
startEl.addEventListener("click", function () {
    const interval = setInterval(goNextSlide, 3000);

    startEl.classList.add("d-none");
    stopEl.classList.remove("d-none");

    stopEl.addEventListener("click", function () {
        startEl.classList.remove("d-none");
        stopEl.classList.add("d-none");
        clearInterval(interval);
    })
})

function goPrevSlide() {
    // console.log("prev");
    if (activeSlide === 0) {
        activeSlide = images.length - 1;
    } else {
        activeSlide--;
    }
    // console.log(activeSlide);
    currentSlide.classList.remove("active");
    currentSlide = document.querySelector(`.slides img:nth-child(${activeSlide + 1})`);
    currentSlide.classList.add("active");

    currentThumb.classList.remove("active_thumb");
    currentThumb = document.querySelector(`.thumbs img:nth-child(${activeSlide + 1})`);
    currentThumb.classList.add("active_thumb");
}

function goNextSlide() {
    // console.log("next");
    if (activeSlide === images.length - 1) {
        activeSlide = 0;
    } else {
        activeSlide++;
    }
    // console.log(activeSlide);
    currentSlide.classList.remove("active");
    currentSlide = document.querySelector(`.slides img:nth-child(${activeSlide + 1})`);
    currentSlide.classList.add("active");

    currentThumb.classList.remove("active_thumb");
    currentThumb = document.querySelector(`.thumbs img:nth-child(${activeSlide + 1})`);
    currentThumb.classList.add("active_thumb");
}