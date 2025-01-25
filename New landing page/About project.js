var typed=new typed(".text",{
    string:["Fronted Developer", "Web Developer"],
    typedSpeed:100,
    backSpeed:100,
    backDalay:1000,
    loop:true
})
const nav__bar = document.getElementById('nav-bar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show navbar')
        })
    }

    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show navbar')
        })
    }
    const navLink = document.querySelectorAll('.nav__link')

    function linkAction(){
        const navMenu = document.getElementById('nav bar')
        // When we click on each nav__link, we remove the show-menu class
        navMenu.classList.remove('show navbar')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))


    const hamburger=document.querySelector('.hamburger menu');
    const navbar=document.querySelector('.nav-bar');

    hamburger.addEventListener('click' , () =>{
        navbar.classList.toggle('');
    });




    









    





