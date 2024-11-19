
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
