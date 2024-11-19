
// document.addEventListener('contextmenu', event => event.preventDefault());
// document.addEventListener('keydown', function(event) {
//     if (event.keyCode == 123) { // F12
//         event.preventDefault();
//     }
// });


const header = document.querySelector('header');
header.innerHTML = `<nav>
            <div class="logo-menu-wrapper">
                <div class="logo">
                    <h1>CozyCorner</h1>
                    <button class="menu-button">&#9776;</button>
                </div>
                <ul class="menu-list">
                    <li><a class="nav-item" href="">Shop</a></li>
                    <li><a class="nav-item" href="">About Us</a></li>
                    <li><a class="nav-item" href="">Services</a></li>
                    <li><a class="nav-item" href="">Blogs</a></li>
                    <li><a class="nav-item" href="">Contact Us</a></li>
                    <li><a href="">&#128722;<sup>0</sup> Cart</a></li>
                    <li><a href="">&#128100; My Account</a></li>
                </ul>
            </div>
        </nav>`;


const menuBtn = document.querySelector('.menu-button');
const menuList = document.querySelector('header nav ul');

function toggleMenu() {
    menuList.classList.toggle('active');
}

menuBtn.addEventListener('click', toggleMenu);

window.addEventListener('resize', () => {
    if (window.innerWidth >= 650) {
        menuList.classList.remove('active');
    }
});

const main = document.querySelector('main');


const container = document.createElement('div');
container.classList.add('container');
main.appendChild(container);

container.innerHTML = `
            <div class="hero-content-wrapper">
                <h2>Modern Interiro Design Studio</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora non repellat perspiciatis nobis rerum neque quas porro adipisci at blanditiis alias, aspernatur voluptate reiciendis ratione iusto sequi. Earum, saepe eius?</p>
                <div class="hero-buttons">
                    <button>Shop Now</button>
                    <button>Explore</button>
                </div>
            </div>
            <div class="hero-image">
                <img src="./images/couch.webp" alt="">
            </div>`;


const excellece = document.createElement('div');
excellece.classList.add('excellece-crafted');
main.appendChild(excellece);

excellece.innerHTML = ` <div class="excellence-content-wrapper">
                <h2>Crafted with excellence material</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate cumque aut voluptas enim,
                    accusantium qui. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, consequatur.
                </p>
                <button>Explore</button>
            </div>
            <div class="items">
                <img src="./images/product-1.webp" alt="">
                <h6>Nordic Chair</h6>
                <p>&#8377;8999</p>
                <div class="cart-buttons">
                    <button class="add-to-cart">&#43;</button>
                    <button class="remove-from-cart">&#45;</button>
                </div>
            </div>
            <div class="items">
                <img src="./images/product-2.webp" alt="">
                <h6>Kruzo Aero Chair</h6>
                <p>&#8377;8999</p>
                <div class="cart-buttons">
                    <button class="add-to-cart">&#43;</button>
                    <button class="remove-from-cart">&#45;</button>
                </div>
            </div>
            <div class="items">
                <img src="./images/product-3.webp" alt="">
                <h6>Ergonomic Chair</h6>
                <p>&#8377;8999</p>
                <div class="cart-buttons">
                    <button class="add-to-cart">&#43;</button>
                    <button class="remove-from-cart">&#45;</button>
                </div>
            </div>`;

const cartCount = document.querySelector('header nav ul li a sup');
const addToCart = document.querySelectorAll('.excellece-crafted .items .cart-buttons .add-to-cart');
const removeCart = document.querySelectorAll('.excellece-crafted .items .cart-buttons .remove-from-cart');
let count = 0;

addToCart.forEach(button => {
    button.addEventListener('click', () => {
        count++;
        cartCount.textContent = count;
    });
});
removeCart.forEach(button => {
    button.addEventListener('click', () => {
        if (count <= 0) {
            count = 0;
            cartCount.textContent = count;
        } else {
            count--;
            cartCount.textContent = count;
        }
    });
});


const chooseUs = document.createElement('div');
chooseUs.classList.add('choose-us');
main.appendChild(chooseUs);
chooseUs.innerHTML = `<div class="why-choose-us-wrapper">
                            <h2>Why Choose Us</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, tenetur. Similique ad facilis itaque nobis?</p>
                    <div class="benefits">
                    <div>
                        <span>&#x1F69A;</span>
                        <h6>Fast and Free Shipping</h6>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem temporibus debitis dolor!
                        </p>
                    </div>
                    <div>
                        <span>&#x1F6CD;</span>
                        <h6>Easy to Shop</h6>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem temporibus debitis dolor!</p>
                    </div>
                    </div>
                    <div class="benefits">
                    <div>
                        <span>&#x1F4F1;</span>
                        <h6>24/7 Support</h6>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem temporibus debitis dolor!
                        </p>
                    </div>
                    <div>
                        <span>&#x1F501;</span>
                        <h6>Hassle Free Returns</h6>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem temporibus debitis dolor!</p>
                    </div>
                    </div>
                <button>Explore More</button>
            </div>
            <div class="choose-us-image">
                <img src="./images/why-choose-us-img.webp" alt="">
            </div>`;


const modern = document.createElement('div');
modern.classList.add('mordern-interiors');
main.appendChild(modern);
modern.innerHTML = `<div class="interiors-demo">
                <div class="image-one"><img src="./images/img-grid-1.webp" alt=""></div>
                <div class="image-two"><img src="./images/img-grid-2.webp" alt=""></div>
                <div class="image-three"><img src="./images/img-grid-3.webp" alt=""></div>
            </div>
            <div class="interiors-demo">
                <div class="image-six"><img src="./images/img-grid-3.webp" alt=""></div>
                <div class="image-four"><img src="./images/img-grid-1.webp" alt=""></div>
                <div class="image-five"><img src="./images/img-grid-2.webp" alt=""></div>
            </div>`;

const testimonials = document.createElement('div');
testimonials.classList.add('testimonial-wrapper');
main.appendChild(testimonials);
testimonials.innerHTML = `<div class="heading-reviews">
                <h2>Testimonials</h2>
            </div>
            <div class="carousel-parent">
                <div class="carousel">
                    <img id="carousel-image" src="" alt="">
                    <h6 id="carousel-title"></h6>
                    <blockquote class="carousel-review"></blockquote>
                    <p class="job-des"></p>
                </div>
                <div class="button-boxes">
                    <button id="left">&#8249;</button>
                    <button id="right">&#8250;</button>
                </div>
            </div>`;




const testimonialsArray = [
    {
        image: './images/person_one.webp',
        name: 'Alice Johnson',
        review: 'Working with this team has been a fantastic experience. Their dedication and expertise made our project a success, and their attention to detail was impressive. I highly recommend their services for any web development needs.',
        job: 'Web Developer'
    },
    {
        image: './images/person_two.webp',
        name: 'Bob Smith',
        review: 'The project was completed on time and exceeded our expectations. The level of communication and professionalism was outstanding. The team’s ability to adapt to changes and solve problems was crucial to the project’s success.',
        job: 'Project Manager'
    },
    {
        image: './images/person_three.webp',
        name: 'Charlie Brown',
        review: 'I am thrilled with the results. The team’s creative approach and technical skills helped us build a platform that perfectly meets our needs. They were always available to support and guide us throughout the process.',
        job: 'Product Designer'
    },
    {
        image: './images/person_four.webp',
        name: 'Diana Prince',
        review: 'Exceptional service from start to finish. The team demonstrated a deep understanding of our requirements and delivered a high-quality solution. Their commitment to excellence and user-centric design made all the difference.',
        job: 'Marketing Specialist'
    }
];


const image = document.querySelector('#carousel-image');
const title = document.querySelector('#carousel-title');
const reviews = document.querySelector('.carousel-review');
const jobRole = document.querySelector('.job-des');
const buttonBoxes = document.querySelector('.button-boxes')

const next = document.querySelector('#right');
const prev = document.querySelector('#left');

let countCarousel = 0;
let autoplayInterval;

function updateCarousel(index) {
    image.src = testimonialsArray[index].image;
    title.textContent = testimonialsArray[index].name;
    reviews.textContent = testimonialsArray[index].review;
    jobRole.textContent = testimonialsArray[index].job;
}

function nextSlide() {
    countCarousel = (countCarousel + 1) % testimonialsArray.length;
    updateCarousel(countCarousel);
}

function prevSlide() {
    countCarousel = (countCarousel - 1 + testimonialsArray.length) % testimonialsArray.length;
    updateCarousel(countCarousel);
}

function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 6000); // Change slide every 3 seconds
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Event listeners for manual navigation
next.addEventListener('click', () => {
    // stopAutoplay();
    nextSlide();
    startAutoplay();
});

prev.addEventListener('click', () => {
    // stopAutoplay();
    prevSlide();
    startAutoplay();
});

// Initialize the carousel and start autoplay
window.addEventListener('DOMContentLoaded', () => {
    updateCarousel(countCarousel);
    startAutoplay();
});

buttonBoxes.addEventListener('mouseover', ()=>{
    stopAutoplay();
})

buttonBoxes.addEventListener('mouseout', ()=>{
    startAutoplay();
})

startAutoplay();


const footerWrapper = document.createElement('div');
footerWrapper.classList.add('footer-wrapper')
main.appendChild(footerWrapper);
footerWrapper.innerHTML = `<div class="chair-image">
                <img src="./images/sofa.webp" alt="">
            </div>
            <div class="footer-description">
                <div class="title-and-copy">
                    <h2>CozyCorner</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iure dicta a quas illo
                        aliquid adipisci, blanditiis eligendi. Lorem ipsum dolor sit amet.</p>
                </div>
                <div>
                    <ul>
                        <li><p>About Us</p></li>
                        <li><p>Blogs</p></li>
                        <li><p>Services</p></li>
                        <li><p>Contact Us</p></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <p>Jobs</p>
                        </li>
                        <li>
                            <p>Our Team</p>
                        </li>
                        <li>
                            <p>Privacy Policy</p>
                        </li>
                        <li>
                            <p>leadership</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <p>Support</p>
                        </li>
                        <li>
                            <p>Knowldege</p>
                        </li>
                        <li>
                            <p>Live Chat</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="copyrights">
                <p>Credits for the design to @themewagon.</p>
            </div>`;
