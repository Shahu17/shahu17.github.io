// Typing Effect
const text = ["C Developer", "Python Programmer", "Web Developer", "AI Enthusiast"];
let i = 0, j = 0, current = "", deleting = false;

function type() {
    if (i < text.length) {
        if (!deleting && j <= text[i].length) {
            current = text[i].substring(0, j++);
        } else if (deleting && j >= 0) {
            current = text[i].substring(0, j--);
        }

        document.querySelector(".typing").innerHTML = current;

        if (j == text[i].length) deleting = true;
        if (j == 0) {
            deleting = false;
            i++;
        }

        setTimeout(type, deleting ? 50 : 100);
    } else {
        i = 0;
        type();
    }
}

type();
