// mobile menu start
// sidenav script
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("overlay").style.display = "block"; // Show the overlay
    document.getElementById("open-btn").style.display = "none";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("overlay").style.display = "none"; // Hide the overlay
    document.getElementById("menu-icon").style.display = "block";
    document.getElementById("open-btn").style.display = "block";
}

function toggleNav() {
    var sidenavWidth = document.getElementById("mySidenav").style.width;
    if (sidenavWidth === "0px" || sidenavWidth === "") {
        openNav();
    } else {
        closeNav();
    }
}
// dropdown script
function toggleHomeSubMenu() {
    var homeSubmenu = document.getElementById("home-submenu");
    var homeIcon = document.getElementById("home-icon");

    if (homeSubmenu.style.display === "block") {
        homeSubmenu.style.display = "none";
        homeIcon.classList.remove("fa-minus");
        homeIcon.classList.add("fa-plus");
    } else {
        homeSubmenu.style.display = "block";
        homeIcon.classList.remove("fa-plus");
        homeIcon.classList.add("fa-minus");
    }
}

function toggleServicesSubMenu() {
    var servicesSubmenu = document.getElementById("services-submenu");
    var servicesIcon = document.getElementById("services-icon");

    if (servicesSubmenu.style.display === "block") {
        servicesSubmenu.style.display = "none";
        servicesIcon.classList.remove("fa-minus");
        servicesIcon.classList.add("fa-plus");
    } else {
        servicesSubmenu.style.display = "block";
        servicesIcon.classList.remove("fa-plus");
        servicesIcon.classList.add("fa-minus");
    }
}

// sidenav script
// mobile menu end

// counter script
function animateCounter(finalValue, elementId, symbol = '') {
    let current = 0;
    const counter = document.getElementById(elementId);
    const increment = finalValue / 100; // Increment rate

    const interval = setInterval(() => {
        current += increment;
        if (current >= finalValue) {
            clearInterval(interval);
            current = finalValue;
        }

        if (symbol === '%' && finalValue === 100) {
            counter.textContent = Math.round(current) + '%';
        } else if (symbol === 'k+' && finalValue >= 1000) {
            counter.textContent = Math.round(current / 1000) + 'k+';
        } else if (symbol === '+' && finalValue > 1) {
            counter.textContent = Math.round(current) + '+';
        } else {
            counter.textContent = Math.round(current);
        }
    }, 50); // Change the interval duration for smoother or faster animation
}

document.addEventListener('DOMContentLoaded', () => {
    // Call the animateCounter function for each counter
    animateCounter(79, 'counter1', '%'); // Counter 1: 0% to 100%
    animateCounter(2000, 'counter2', 'k+'); // Counter 2: 0k to 3000+
    animateCounter(33, 'counter3'); // Counter 3: 0 to 78
    animateCounter(20, 'counter4', '+'); // Counter 4: 0 to 35+
});


// counter script


// form script 



// flip box 
function showContent(element) {
    element.querySelector('.additional-content').style.display = 'block';
}

function hideContent(element) {
    element.querySelector('.additional-content').style.display = 'none';
}

