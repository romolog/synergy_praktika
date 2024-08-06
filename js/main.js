// create static node list for buttons


//DOGS CAROUSEL //DOGS CAROUSEL //DOGS CAROUSEL //DOGS CAROUSEL //DOGS CAROUSEL //DOGS CAROUSEL

// get buttons 
// const leftButton = document.getElementsByClassName("dogsCarouselButton.left");
// const rightButton = document.getElementsByClassName("dogsCarouselButton.right");

const leftButton = document.getElementById("lbtn");
const rightButton = document.getElementById("rbtn");

leftButton.addEventListener("click", nextSlide);
rightButton.addEventListener("click", prevSlide);

function nextSlide()
{ 
    const slidesElements = document.querySelectorAll(".slide");

    let slidesArray = [];
    slidesArray = [...slidesElements];
    
    const currentSlide = document.querySelector("[data-current]");
    let currentIndex = slidesArray.indexOf(currentSlide);

    delete currentSlide.dataset.current;
    currentIndex = (currentIndex - 1 + slidesArray.length) % slidesArray.length;
    slidesArray[currentIndex].dataset.current = true;

    document.getElementById("dogsPhotoIndex").innerHTML = currentIndex + 1;
}

function prevSlide()
{
    const slidesElements = document.querySelectorAll(".slide");

    let slidesArray = [];
    // slidesArray м= slidesArray.concat(slidesElements);
    slidesArray = [...slidesElements];
    
    const currentSlide = document.querySelector("[data-current]");
    let currentIndex = slidesArray.indexOf(currentSlide);

    delete currentSlide.dataset.current;
    currentIndex = (currentIndex + 1) % slidesArray.length;
    slidesArray[currentIndex].dataset.current = true;

    document.getElementById("dogsPhotoIndex").innerHTML = currentIndex + 1;
}


// const buttonsNodeList = document.querySelectorAll("[data-dogs_carousel_slide_button]"); 
// buttonsNodeList.forEach(button => {

//     button.addEventListener("click", () => {
//         const offset = button.dataset.dogs_carousel_slide_button === "right" ? 1 : -1
        
//         //get "ul" element
//         const slides = button
//             .closest("[data-carousel]")
//             .querySelector("[data-slides]")

//         //get "li" element with custom tag "data-active"
//         const activeSlide = slides.querySelector("[data-active]")

//         //slides.children provides an pseudo-array of html elements, which in our case are "li" elements
//         //[...pseudoArray] provides real array based on pseudoArray

//         let newIndex = [...slides.children].indexOf(activeSlide) + offset

//         if(newIndex < 0) newIndex = slides.children.length - 1
//         if(newIndex >= slides.children.length) newIndex = 0

//         slides.children[newIndex].dataset.active = true
//         delete activeSlide.dataset.active
//     })
// })