// Toggle Side Menu
const menuBtn = document.querySelector(".menu-btn");
const sideMenu = document.querySelector(".side-menu");

menuBtn.addEventListener("click", () => {
  const isMenuOpen = sideMenu.classList.toggle("open");
  menuBtn.textContent = isMenuOpen ? "✖" : "☰"; // Toggle menu button icon
});

// Line Chart Setup
const canvas = document.getElementById("lineChart");
const ctx = canvas.getContext("2d");
const tooltip = document.getElementById("tooltip");

const data = [50, 70, 40, 90, 60, 80];
const labels = ["Apr 23", "May 23", "Jun 23", "Jul 23", "Aug 23", "Sep 23"];
const tooltipData = [24]; // Percentage annotation
const annotationIndex = 3; // Annotation position

const padding = 50;
const chartWidth = canvas.width - padding * 2;
const chartHeight = canvas.height - padding * 2;
const pointRadius = 5;

const maxData = Math.max(...data);
const normalize = (value) => (value / maxData) * chartHeight;

function drawLineChart() {
  // Draw axes
  ctx.beginPath();
  ctx.moveTo(padding, canvas.height - padding);
  ctx.lineTo(canvas.width - padding, canvas.height - padding); // X-axis
  ctx.lineTo(canvas.width - padding, padding); // Y-axis
  ctx.strokeStyle = "#ddd";
  ctx.stroke();

  // Add labels on X-axis
  ctx.font = "12px Arial";
  ctx.textAlign = "center";
  ctx.fillStyle = "#888";
  labels.forEach((label, index) => {
    const x = padding + index * (chartWidth / (data.length - 1));
    ctx.fillText(label, x, canvas.height - padding + 20);
  });

  // Draw line chart and data points
  ctx.beginPath();
  data.forEach((value, index) => {
    const x = padding + index * (chartWidth / (data.length - 1));
    const y = canvas.height - padding - normalize(value);
    ctx.lineTo(x, y);
    ctx.strokeStyle = "#3c59ee";
    ctx.stroke();

    // Draw points
    ctx.beginPath();
    ctx.arc(x, y, pointRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#3c59ee";
    ctx.fill();

    // Tooltip for points
    canvas.addEventListener("mousemove", (event) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      if (Math.abs(mouseX - x) < 10 && Math.abs(mouseY - y) < 10) {
        tooltip.style.left = `${event.pageX + 10}px`;
        tooltip.style.top = `${event.pageY + 10}px`;
        tooltip.style.display = "block";
        tooltip.innerHTML = `Value: ${value}`;
      } else {
        tooltip.style.display = "none";
      }
    });
  });

  // Add annotation
  const annotationX =
    padding + annotationIndex * (chartWidth / (data.length - 1));
  const annotationY =
    canvas.height - padding - normalize(data[annotationIndex]);

  ctx.beginPath();
  ctx.arc(annotationX, annotationY, pointRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#3c59ee";
  ctx.fill();

  ctx.fillStyle = "#333";
  ctx.font = "bold 12px Arial";
  ctx.fillText("Avg new user", annotationX, annotationY - 20);
  ctx.fillStyle = "#3c59ee";
  ctx.fillText(`+${tooltipData[0]}%`, annotationX, annotationY - 8);
}

drawLineChart();

// Tabs
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.remove("active"));
    document
      .querySelectorAll(".tab-panel")
      .forEach((panel) => panel.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

// Horizontal tab scrolling
// document.querySelector(".tabs").addEventListener("wheel", (e) => {
//   if (e.deltaY !== 0) {
//     e.preventDefault();
//     e.currentTarget.scrollLeft += e.deltaY;
//   }
// });

// Accordion
document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const content = accordionItem.querySelector(".accordion-content");
    const toggleIcon = header.querySelector(".accordion-toggle");

    if (content.style.display === "block") {
      content.style.display = "none";
      toggleIcon.classList.remove("active");
    } else {
      document
        .querySelectorAll(".accordion-content")
        .forEach((c) => (c.style.display = "none"));
      document
        .querySelectorAll(".accordion-toggle")
        .forEach((t) => t.classList.remove("active"));

      content.style.display = "block";
      toggleIcon.classList.add("active");
    }
  });
});

// Testimonials
document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  let currentIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.toggle("active", i === index);
    });
  }

  prevButton.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  });

  showTestimonial(currentIndex);
});

// Tab Buttons
const buttons = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content-wrapper");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    contents.forEach((content) => (content.style.display = "none"));

    button.classList.add("active");
    document.getElementById(button.getAttribute("data-tab")).style.display =
      "flex";
  });
});
