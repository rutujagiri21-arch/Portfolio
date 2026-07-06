/*=========================
    ACTIVE NAVBAR
==========================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=========================
    SCROLL REVEAL
==========================*/

const revealElements = document.querySelectorAll("section");

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 120) {

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/*=========================
    OPTIONAL FOOTER YEAR
==========================*/

const year = document.getElementById("year");

if(year){

    year.textContent = new Date().getFullYear();

}