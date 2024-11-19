// mobile menu start
// sidenav script
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("overlay").style.display = "block"; // Show the overlay
    // document.getElementById("open-btn").style.display = "none";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("overlay").style.display = "none"; // Hide the overlay
    // document.getElementById("menu-icon").style.display = "block";
    // document.getElementById("open-btn").style.display = "block";
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


// form script 



// flip box 
function showContent(element) {
    element.querySelector('.additional-content').style.display = 'block';
}

function hideContent(element) {
    element.querySelector('.additional-content').style.display = 'none';
}


const heroContent = document.querySelector('.hero-content');
const nav = document.querySelector('.desktop-nav');

const stcikyNav = function(entries){
    const [entry] = entries;
    
    if(!entry.isIntersecting){
        nav.classList.add('fixed')
    } else {
        nav.classList.remove('fixed')
    }
}

const heroObserver = new IntersectionObserver(stcikyNav, {root:null, threshold : 0, rootMargin : `-${nav.getBoundingClientRect().height}px`})

heroObserver.observe(heroContent);