document.addEventListener("DOMContentLoaded", () => {
    // Form Elements
    const form = document.getElementById("contactForm");
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const service = document.getElementById("service");
    const message = document.getElementById("message");

    // Load saved form data from localStorage
    function loadSavedData() {
        firstName.value = localStorage.getItem("first-name") || "";
        lastName.value = localStorage.getItem("last-name") || "";
        email.value = localStorage.getItem("email") || "";
        service.value = localStorage.getItem("service") || "";
        message.value = localStorage.getItem("message") || "";
    }
    loadSavedData(); 

    // Save form data in localStorage when user types
    function saveData() {
        localStorage.setItem("first-name", firstName.value);
        localStorage.setItem("last-name", lastName.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("service", service.value);
        localStorage.setItem("message", message.value);
    }

    [firstName, lastName, email, service, message].forEach(input => {
        input.addEventListener("input", saveData);
    });

    // Form Validation & Submission
    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        // Basic validation
        if (firstName.value.trim() === "" || lastName.value.trim() === "" || email.value.trim() === "" || service.value === "" || message.value.trim() === "") {
            alert("Please fill in all fields before submitting.");
            return;
        }

        //form submission
        alert(`Thank you, ${firstName.value}! We received your request for ${service.value} services.`);
        
        // Clear the form and localStorage
        form.reset();
        localStorage.clear();
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Get a Quote Button Interaction
    document.getElementById("quote-btn").addEventListener("click", () => {
        document.querySelector(".contact-form").scrollIntoView({ behavior: "smooth" });
    });

});

document.addEventListener("DOMContentLoaded", () => {
    //Hamburger Menu Toggle
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    //Close Menu on Link Click (For Mobile)
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            hamburger.classList.remove("active");
        });
    });

    //Footer
    document.getElementById("year").textContent = new Date().getFullYear();
});



