// active links 
// let section = document.querySelectorAll('section')
// let navLinks = document.querySelectorAll('header nav a');
// window.onscroll = () => {
//     section.forEach(sec =>{
//         let top = window.scrollY;
//         let offset = sec.offsetTop-150;
//         let height = sec.offsetHeight;
//         let id = see.getAttribute('id');

//         if ( top >= offset && top < offset + height){
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelectorAll(`header nav a[href*=` + id + `]`).classList.add('active');

//             });

//         };

//     });
// };
let header = document.querySelector("header");
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}



let links = document.querySelector(".link");
let link2 = document.querySelector(".link2");
let link3 = document.querySelector(".link3");
let link4 = document.querySelector(".link4");
let link5 = document.querySelector(".link5");




let toggleNevbar = ()=>{
    link4.classList.remove("active");
    link2.classList.remove("active");
    link3.classList.remove("active");
    link5.classList.remove("active");
    links.classList.add("active");
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
};
let toggleNevbar2 = ()=>{
    links.classList.remove("active");
    link4.classList.remove("active");
    link3.classList.remove("active");
    link5.classList.remove("active");
    link2.classList.add("active");
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
let toggleNevbar3 = ()=>{
    links.classList.remove("active");
    link2.classList.remove("active");
    link4.classList.remove("active");
    link5.classList.remove("active");
    link3.classList.add("active");
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
let toggleNevbar4 = ()=>{
    links.classList.remove("active");
    link2.classList.remove("active");
    link3.classList.remove("active");
    link5.classList.remove("active");
    link4.classList.add("active");
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
let toggleNevbar5 = ()=>{
    links.classList.remove("active");
    link2.classList.remove("active");
    link3.classList.remove("active");
    link4.classList.remove("active");
    link5.classList.add("active");
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

links.addEventListener("click",()=>toggleNevbar());
link2.addEventListener("click",()=>toggleNevbar2());
link3.addEventListener("click",()=>toggleNevbar3());
link4.addEventListener("click",()=>toggleNevbar4());
link5.addEventListener("click",()=>toggleNevbar5());
// navigation menu


header.classList.toggle('sticky', window.scrollY > 100);

// Animation scroll reveal

ScrollReveal({
     distance:'80px',
     duration:2000,
     delay:200,
    });
 ScrollReveal().reveal('.home-container ,.about-content p ,.heading',{origin:'top'});
 ScrollReveal().reveal('.projects-container,.home-img , .web-components ,.contact form',{origin:'bottom'});
 ScrollReveal().reveal('.home-container h1 , .about-img',{origin:'left'});
 ScrollReveal().reveal('.about-content ul ,.home-container p,.about-content h3 ,projects-container',{origin:'right'});

// Typed js multiple text

    let typed = new Typed(".text-slider", {
        strings:['Web Development.', 'Frontend Development.', 'UX / UI designer.'],
        typeSpeed: 50,
        backDelay: 900,
        backSpeed: 30,
        loop: true,
    });  
    
