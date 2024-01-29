//navigacija
var arrayHref = ["index.html", "products.html", "contact.html", "autor.html"];
var arrayName = ["Home", "Product", "Contact", "Autor"];

var divNav = document.querySelector(".main-nav");
var divNavMobile = document.querySelector(".mobile-nav");
var navContent = `<ul class="main-nav__items">`;
var navContentMobile = `<ul class="mobile-nav__items">`;

for(let i = 0 ; i<arrayHref.length; i++){
    navContent += `<li class="main-nav__item">
                    <a href="${arrayHref[i]}">${arrayName[i]}</a>
                    </li>`;
    navContentMobile += `<li class="mobile-nav__item">
                    <a href="${arrayHref[i]}">${arrayName[i]}</a>
                    </li>`;
}

navContent += "</ul>";
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

