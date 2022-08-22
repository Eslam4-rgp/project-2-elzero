function toggleMenu() {
    const toggleMenu = document.querySelector(".taggleMenu");
    const navigation = document.querySelector(".navigation");
        toggleMenu.classList.toggle('active');
        navigation.classList.toggle('active');
    }

    const navigationselector = document.querySelector(".navigation");
    navigationselector.onclick = function() {
    const toggleMenu = document.querySelector(".taggleMenu");
    const navigation = document.querySelector(".navigation");
    navigation.classList.toggle('active');
    toggleMenu.classList.toggle('active');
    }
// start button up  and hidden header
let buttonup = document.querySelector(".button-up");
let head = document.querySelector("header");
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
    head.style.top = "0";
} else {
    head.style.top = "-70px";
}
// start number count
if (window.scrollY >= section.offsetTop) {
    if (!started) {
        box.forEach((number) => startCount(number));
    }
    started = true;
}
// End number count
// start skills
if (window.scrollY >= sectio.offsetTop) {
    spans.forEach((span) => {
        span.style.width = span.dataset.width;
    });
}
// End skills
this.scrollY >= 1000 ? buttonup.classList.add("show") : buttonup.classList.remove("show");
prevScrollpos = currentScrollPos;
}
buttonup.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
//end button up and hiddem header

// get slider items img | Array.from [es6 features]
var sliderImage = Array.from(document.querySelectorAll('.slider-container img'));
// get number of slidser
var slidesCount = sliderImage.length;
// set current slide
var currentSlide = 1;
// slide number element
var slideNumberElement = document.getElementById('slide-number');
// get prev & next
var nextButton = document.getElementById('next');
var prevtButton = document.getElementById('prev');
// handle click on prefv & next button
nextButton.onclick = nextSlide;
prevtButton.onclick = prevSlide;
// credat the main ul
var ulElement = document.createElement('ul');
// set id on ulElement
ulElement.setAttribute('id', 'pagination-ul');
// creat list items based on slides count 
for (var i = 1;i <= slidesCount; i++) {
    // creat the li 
    var liItems = document.createElement('li');
    // set custom Attribute
    liItems.setAttribute('data-index', i);
    // set items content 
    liItems.appendChild(document.createTextNode(i))
    // append item li to the main ul
    ulElement.appendChild(liItems)
}
// Add the create ul to the page in [span indecators]
document.getElementById('indecators').appendChild(ulElement);

// get the new created ul
var paginationul = document.getElementById('pagination-ul');

// get pagination polites items img | Array.from [es6 features]
var paginationulli = Array.from(document.querySelectorAll('#pagination-ul li'));

// loop throught All bullets items 
for (var i = 0; i < paginationulli.length; i++) {
    paginationulli[i].onclick = function() {
        currentSlide = parseInt(this.getAttribute('data-index'))
        theCheker();    
    }
}

// trigger the checker function
theCheker();
// next slide function
function nextSlide() {
    if (nextButton.classList.contains('disable')) {
        return false;
    } else {
        currentSlide++;
        theCheker();
    }
}
// prev slide function
function prevSlide() {
    if (prevtButton.classList.contains('disable')) {
        return false;
    } else {
        currentSlide--;
        theCheker();
    }
}
// creadt the cheker function
function theCheker() {
    // remve All active classes
    removeAllactive();
    // set Active class on current slide 
    sliderImage[currentSlide - 1].classList.add('active');
    // set Active class on current polite slide 
    paginationul.children[currentSlide - 1].classList.add('active');
    // check if current slide is the first
    if (currentSlide == 1) {
        prevtButton.classList.add('disable');
    } else {
        prevtButton.classList.remove('disable');
    }
    // check if current slide is the last
    if (currentSlide == slidesCount) {
        nextButton.classList.add('disable');
    } else {
        nextButton.classList.remove('disable');
    }  
}


// remove All Active classess from images and polites
function removeAllactive() {
    // loop through images
    sliderImage.forEach(img => {
        img.classList.remove('active');
    });
    // loop through images
    paginationulli.forEach(bullit => {
        bullit.classList.remove('active');
    });
}

// start number count
let box = document.querySelectorAll(".box .number");
let section = document.querySelector(".stats");
let started = false; // Function Started ? No
function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
        clearInterval(count);
    }
}, 2000 / goal);
}
// End number count

// start skills 
let sectio = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".prog span");
// End skills 