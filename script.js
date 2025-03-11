document.addEventListener("DOMContentLoaded", function () {
    const scrollTopButton = document.getElementById("scrollTop");
    const typewriterText = "Hey, I’m Taarush Vashisht";
    let i = 0;
    
    function typeEffect() {
        if (i < typewriterText.length) {
            document.getElementById("typewriter").innerHTML += typewriterText.charAt(i);
            i++;
            setTimeout(typeEffect, 100);
        }
    }
    
    typeEffect();
    
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollTopButton.style.display = "block";
        } else {
            scrollTopButton.style.display = "none";
        }
    });

    scrollTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    document.getElementById("copyEmail").addEventListener("click", function () {
        navigator.clipboard.writeText(document.getElementById("email").innerText);
        alert("Email copied to clipboard!");
    });
});

let lastScrollTop = 0;
const header = document.querySelector("header");

