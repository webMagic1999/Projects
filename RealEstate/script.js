// sticky nav 

let header = document.getElementById('header');
let initialViewportHeight = window.innerHeight * 0.5; // 50% of initial viewport height
let menuButton = document.querySelector('#hamburger')
let menuList = document.querySelector('.menu-list')

function stickyNavbar() {
    if (window.pageYOffset >= header.offsetTop && window.pageYOffset >= initialViewportHeight) {
        header.classList.add('sticky');
        header.style.backgroundColor = "#ffffff";
        menuButton.style.color = "#000000"
    } else {
        header.classList.remove('sticky');
        header.style.backgroundColor = "transparent";
        menuButton.style.color = "#ffffff"
    }
}

window.addEventListener('scroll', stickyNavbar);


// menuButton.addEventListener('click', ()=>{
//     menuButton.classList.toggle('active')
// })



// hero section background change auto
document.addEventListener("DOMContentLoaded", () => {
    const heroBgSrc = ["./images/slider_hero_home_01_01.jpg", "./images/slider_hero_home_02_02.jpg"];
    const hero = document.querySelector('#hero-section');
    // Set initial background image
    hero.style.backgroundImage = `url(${heroBgSrc[0]})`;

    function changeBackground(element, images, interval) {
        let index = 1; // Start from the second image
        setInterval(() => {
            element.style.backgroundImage = `url(${images[index]})`;
            index = (index + 1) % images.length; // Increment index and wrap around if necessary
        }, interval);
    }

    changeBackground(hero, heroBgSrc, 4000);

});


// sustain
document.addEventListener("DOMContentLoaded", () => {
    const imgSrcs = ["./images/inner_03.jpg", "./images/inner_02.jpg", "./images/inner_01.jpg"];
    const imgElement = document.querySelector('.sustain');

    function changeImageSrc(element, sources, interval) {
        let index = 1; // Start from the second image
        setInterval(() => {
            element.style.opacity = 0; // Start fade out
            setTimeout(() => {
                element.src = sources[index];
                element.style.opacity = 1; // Fade in
                index = (index + 1) % sources.length; // Increment index and wrap around if necessary
            }, 1000); // Match the timeout duration with the CSS transition duration
        }, interval);
    }

    changeImageSrc(imgElement, imgSrcs, 3000);
});












