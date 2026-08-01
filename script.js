document.addEventListener("DOMContentLoaded", () => {

    console.log("Clarascape Portfolio Loaded Successfully!");


    /* ==========================
       STICKY HEADER
    ========================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }

    });



    /* ==========================
       TYPING ANIMATION
    ========================== */

    const typing = document.querySelector(".typing");

    const words = [
        "Web Designer",
        "Front-End Developer",
        "Graphic Designer",
        "Freelancer"
    ];

    let wordIndex = 0;


    function changeWord(){

        if(typing){

            typing.textContent = words[wordIndex];

            wordIndex++;

            if(wordIndex >= words.length){
                wordIndex = 0;
            }

        }

    }


    changeWord();

    setInterval(changeWord, 2000);



    /* ==========================
       SCROLL REVEAL ANIMATION
    ========================== */

    const reveals = document.querySelectorAll(".reveal");


    function revealSections(){

        reveals.forEach(section => {

            const windowHeight = window.innerHeight;

            const revealTop = section.getBoundingClientRect().top;

            const revealPoint = 150;


            if(revealTop < windowHeight - revealPoint){

                section.classList.add("active");

            }

        });

    }


    window.addEventListener("scroll", revealSections);

    revealSections();



    /* ==========================
       ACTIVE NAVIGATION
    ========================== */


    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-links a");


    window.addEventListener("scroll", () => {


        let current = "";


        sections.forEach(section => {


            const sectionTop = section.offsetTop - 120;


            if(window.scrollY >= sectionTop){

                current = section.getAttribute("id");

            }


        });



        navLinks.forEach(link => {


            link.classList.remove("active");


            if(link.getAttribute("href") === "#" + current){

                link.classList.add("active");

            }


        });


    });




    /* ==========================
       MOBILE MENU
    ========================== */


    const menuToggle = document.querySelector(".menu-toggle");

    const navLinksMenu = document.querySelector(".nav-links");



    if(menuToggle){


        menuToggle.addEventListener("click", () => {


            navLinksMenu.classList.toggle("active");


        });


    }





    /* ==========================
       CLOSE MOBILE MENU
    ========================== */


    document.querySelectorAll(".nav-links a").forEach(link => {


        link.addEventListener("click", () => {


            navLinksMenu.classList.remove("active");


        });


    });



});