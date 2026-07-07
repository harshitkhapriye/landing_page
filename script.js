// ================================
// Just Udhari Website Script
// ================================

document.addEventListener("DOMContentLoaded", () => {

    // ============================
    // Sticky Navbar on Scroll
    // ============================

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";
            header.style.background = "#ffffff";

        } else {

            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";
        }

    });

    // ============================
    // Smooth Scroll
    // ============================

    document.querySelectorAll('a[href="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    });

    // ============================
    // Get Free Demo Button
    // ============================

    const demoBtn = document.getElementById("demoBtn");
    const demoSection = document.getElementById("demoSection");

    demoBtn.addEventListener("click", () => {

    demoSection.classList.toggle("show");

    if (demoSection.classList.contains("show")) {

        demoSection.scrollIntoView({
            behavior: "smooth"
        });

    }

});

    // ============================
    // Form Validation
    // ============================

    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = form.querySelector('input[type="text"]').value.trim();

        const email = form.querySelector('input[type="email"]').value.trim();

        const phone = form.querySelector('input[type="tel"]').value.trim();

        const checkbox = form.querySelector('input[type="checkbox"]');

        if (name === "") {

            alert("Please enter your name.");
            return;

        }

        if (email === "") {

            alert("Please enter your email.");
            return;

        }

        if (!email.includes("@")) {

            alert("Please enter a valid email.");
            return;

        }

        if (phone.length < 10) {

            alert("Please enter a valid phone number.");
            return;

        }

        if (!checkbox.checked) {

            alert("Please accept the terms.");
            return;

        }

        alert("Thank you! Our team will contact you soon.");

        form.reset();

    });

    // ============================
    // Active Navigation Link
    // ============================

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {

        link.addEventListener("click", function () {

            navLinks.forEach(item => item.classList.remove("active"));

            this.classList.add("active");

        });

    });

    // ============================
    // Fade In Animation
    // ============================

    const sections = document.querySelectorAll(
        ".hero, .about, .products, .features, .mobile, .demo, footer"
    );

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {
        threshold: 0.15
    });

    sections.forEach(section => {

        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        section.style.transition = "all 0.8s ease";

        observer.observe(section);

    });

});

// feature animation

// ==========================
// Feature Slider
// ==========================

const cards=document.querySelectorAll(".feature-card");

let current=0;

let interval;

function showSlide(index){

cards.forEach(card=>{

card.classList.remove("active");

});

cards[index].classList.add("active");

}

function startSlider(){

interval=setInterval(()=>{

current++;

if(current>=cards.length){

current=0;

}

showSlide(current);

},2000);

}

showSlide(0);

startSlider();

const slider=document.querySelector(".feature-slider");

slider.addEventListener("mouseenter",()=>{

clearInterval(interval);

});

slider.addEventListener("mouseleave",()=>{

startSlider();

});
