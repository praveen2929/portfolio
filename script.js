// navbar icon

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        console.log(id)

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.screenY > 100);

    // icon and number when click navbar link

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

// scrool revel

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .container', { origin: 'left' });
ScrollReveal().reveal('.about-section', { origin: 'right' });
ScrollReveal().reveal('.about-content, .education, .experience', { origin: 'bottom' });

// typed js
const typed = new Typed('.multiple-text', {
    strings: ['web developer', 'python developer', 'java developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function sendMail() {
    var fullName = document.getElementById("fullName").value
    var email_id = document.getElementById("email_id").value
    var subject = document.getElementById("subject").value
    var number = document.getElementById("number").value
    var message = document.getElementById("message").value

    if (fullName == "" || email_id == "" || subject == "" || number == "" || message == "") {
        var w = document.getElementById("wrong");
        w.innerHTML = "Please Fill The Details First"
    } else {
        var params = {
            fullName: fullName,
            email_id: email_id,
            subject: subject,
            number: number,
            message: message,
        };

        emailjs
            .send("service_nyablhy", "template_qdw3bp5", params)
            .then(function(res) {
                alert("send success!");
            });
    }
}