//ICT502
// Trip Cost Calculator
function calculateCost() {
    const destinationCost = parseFloat(document.getElementById("destination").value);
    const days = parseInt(document.getElementById("days").value);
    const people = parseInt(document.getElementById("people").value);
    const totalCost = destinationCost * days * people;
    
    document.getElementById("total-cost").textContent = "Total Cost: $" + totalCost.toFixed(2);
}

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    document.getElementById("form-response").textContent = `Thank you, ${name}! We have received your message.`;
    document.getElementById("contact-form").reset();

    // Add a smooth fade-in effect for response message
    document.getElementById("form-response").style.opacity = 0;
    setTimeout(() => {
        document.getElementById("form-response").style.opacity = 1;
    }, 100);
});

// Scroll Animation
function animateOnScroll() {
    const elementsToAnimate = document.querySelectorAll('.animate');
    
    elementsToAnimate.forEach((el) => {
        const position = el.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            if (el.classList.contains('fade-in')) {
                el.classList.add('fade-in-visible');
            } else if (el.classList.contains('slide-in')) {
                el.classList.add('slide-in-visible');
            }
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); 
