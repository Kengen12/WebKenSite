/*========toggle icon nav=======*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector ('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}





/*========scroll selection active link=======*/


let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll= () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');

            });
        };

    });


    /*========sticky nav=======*/
    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY> 100);

    /*========remove toggle icon and navbar when click navbar link (scroll)=======*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

 /*========type js=======*/
 const typed = new Typed('.multiple-text',{
    strings: ['Web Developer','Artist','CSS NCII Holder'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
 });


 /*========send email=======*/

 function sendMail() {
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_orrjtuh","template_cyzld5f",parms).then(alert("Email Sent!"))
 };

