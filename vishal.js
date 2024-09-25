// Smooth Scroll for navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Display a message after commission form submission
const form = document.querySelector('.commission-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for your commission request! We will get back to you shortly.');
    form.reset();  // Reset the form after submission
});
document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");

    // Event listener for images
    const images = document.querySelectorAll(".lightbox-trigger");
    images.forEach(image => {
        image.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default anchor behavior
            lightbox.style.display = "flex"; // Show lightbox
            lightboxImg.src = this.href; // Set the src to the clicked image's href
        });
    });

    // Close the lightbox when the close button is clicked
    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    // Close the lightbox when clicking outside the image
    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
