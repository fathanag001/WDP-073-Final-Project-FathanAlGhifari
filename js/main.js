// 1. Toggle Menu for Mobile
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.navbar ul.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// 2. Pop-up for "Order Now" Button
const orderNowButton = document.getElementById('order-now');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const closePopupButton = document.getElementById('close-popup');

// Show Pop-up on Button Click
orderNowButton.addEventListener('click', () => {
    popup.style.display = 'flex';
    overlay.style.display = 'block';
});

// Close Pop-up on Close Button Click
closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

// Close Pop-up on Overlay Click
overlay.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

// 3. Animations for Elements
document.addEventListener('DOMContentLoaded', () => {
    // Fade-in Animation for Hero Banner
    const heroContent = document.querySelector('#hero-banner .banner-content');
    setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 500);

    // Fade-in Animation for Services Section
    const serviceCards = document.querySelectorAll('#services .card');
    serviceCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 500 + index * 200); // Delay each card slightly
    });

    // Fade-in Animation for Testimonials Section
    const testimonialCards = document.querySelectorAll('#testimonials .card');
    testimonialCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 500 + index * 200); // Delay each card slightly
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".carousel-wrapper");
    const cards = document.querySelectorAll(".testimonial-cards .card");

    // Buat duplikasi kartu agar animasi berjalan tanpa jeda
    cards.forEach(card => {
        let clone = card.cloneNode(true);
        wrapper.appendChild(clone);
    });
});


// Animate Progress Bars and Percent Text
document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach(bar => {
        const percentText = bar.closest('.skill-card').querySelector('.percent');
        const percentValue = bar.getAttribute('data-percent');

        // Animate the progress bar
        setTimeout(() => {
            bar.style.width = percentValue;
        }, 100);

        // Animate the percent text
        let currentPercent = 0;
        const interval = setInterval(() => {
            if (currentPercent >= parseInt(percentValue)) {
                clearInterval(interval);
            } else {
                currentPercent++;
                percentText.textContent = `${currentPercent}%`;
            }
        }, 20); // Adjust speed of the animation
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Get all buttons with the class 'view-details'
    const viewDetailsButtons = document.querySelectorAll('.view-details');

    // Add click event to each button
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal'); // Get the modal ID
            const modal = document.getElementById(modalId); // Find the corresponding modal
            if (modal) {
                modal.style.display = 'block'; // Show the modal
            }
        });
    });

    // Close modal when clicking the close button or outside the modal
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        const closeButton = modal.querySelector('.close');
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none'; // Hide the modal
        });

        // Close modal when clicking outside the modal content
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});