// Typing effect
const text = ["C Developer", "Python Programmer", "Web Developer", "AI Enthusiast"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
    if (i < text.length) {
        if (!isDeleting && j <= text[i].length) {
            currentText = text[i].substring(0, j++);
        } else if (isDeleting && j >= 0) {
            currentText = text[i].substring(0, j--);
        }

        document.querySelector(".typing").innerHTML = currentText;

        if (j == text[i].length) isDeleting = true;
        if (j == 0) {
            isDeleting = false;
            i++;
        }

        setTimeout(type, isDeleting ? 50 : 100);
    } else {
        i = 0;
        type();
    }
}

type();

// Scroll animation
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            card.classList.add("show");
        }
    });
});
