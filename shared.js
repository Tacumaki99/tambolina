//navigacija
var linkovi = [
    {name:"Home",      href:"index.html"},
    {name:"Gallery",  href:"Gallery.html"},
    {name:"Contact Us",href:"contact.html"},
    {name:"Author",    href:"author.html"}
];

var divNav = document.querySelector(".main-nav");
var divNavMobile = document.querySelector(".mobile-nav");
var navContent = `<ul class="main-nav__items">`;
var navContentMobile = `<ul class="mobile-nav__items">`;

linkovi.forEach(link =>{
    navContent += `<li class="main-nav__item">
                    <a href="${link.href}">${link.name}</a>
                    </li>`;
    navContentMobile += `<li class="mobile-nav__item">
                    <a href="${link.href}">${link.name}</a>
                    </li>`;
})

navContent += "</ul>";
navContentMobile += "</ul>";
divNav.innerHTML = navContent;
divNavMobile.innerHTML = navContentMobile;



var backdrop = document.querySelector('.backdrop');
var selectPlanButton = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
console.log(backdrop);

backdrop.addEventListener('click',function(){
    //mobileNav.style.display = "none";
    mobileNav.classList.remove('open');
    backdrop.classList.remove('open');
});

toggleButton.addEventListener('click', function() {
    //mobileNav.style.display = 'block';
    //backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});

