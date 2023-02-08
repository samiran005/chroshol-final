const chrousol = document.querySelector(".chrousol");
const slide = document.getElementsByClassName("slide");
const prevBtn = document.querySelector("#prevBtn")
const nextBtn = document.querySelector("#nextBtn")
const radios = document.querySelectorAll(".chrousol-container input[type='radio']");

const imgWidth = slide[0].clientWidth;
chrousol.style.transform = `translateX(-${imgWidth}px)`;

const transitionSpeed = 1.5;

//for listen click next or prev
let counter = 1;
nextBtn.addEventListener("click", () => {
    if (counter > slide.length - 2) return; //for fixing bug
    counter += 1;
    chrousol.style.transition = `${transitionSpeed}s`; //tansition effect time
    chrousol.style.transform = `translateX(-${imgWidth * counter}px)`;
    radios[counter].checked = true; //for radio
})

prevBtn.addEventListener("click", () => {
    if (counter <= 0) return; //for fixing bug
    counter -= 1;
    chrousol.style.transition = `${transitionSpeed}s`; //tansition effect time
    chrousol.style.transform = `translateX(-${imgWidth * counter}px)`;
    radios[counter].checked = true; //for radio
})


//for listen transition end
chrousol.addEventListener("transitionend", () => {
    if (slide[counter].classList.contains("first--clone")) {
        counter = 1;
        chrousol.style.transition = "none"; //tansition effect time
        chrousol.style.transform = `translateX(-${imgWidth}px)`;
        radios[counter].checked = true; //for radio
    }
    if (slide[counter].classList.contains("last--clone")) {
        counter = slide.length - 2;
        chrousol.style.transition = "none"; //tansition effect time
        chrousol.style.transform = `translateX(-${(imgWidth * counter)}px)`;
        
        radios[counter].checked = true; //for radio
    }
})

// for automation
// setInterval(()=>{
//     if (counter > slide.length - 2) return; //for fixing bug
//     counter += 1;
//     chrousol.style.transition = `${transitionSpeed}s`; //tansition effect time
//     chrousol.style.transform = `translateX(-${imgWidth * counter}px)`;
//     radios[counter].checked = true; //for radio
// },3000)

// woriking slide with radio
const radiosContainer = document.querySelector(".chrousol-container");
radiosContainer.addEventListener("click", (e) => {
    if (e.target.id === "radio1") {
        chrousol.style.transition = `${transitionSpeed}s`;
        chrousol.style.transform = `translateX(-${imgWidth}px)`;
        counter = 1;
    } else if (e.target.id === "radio2") {
        chrousol.style.transition = `${transitionSpeed}s`;
        chrousol.style.transform = `translateX(-${imgWidth * 2}px)`;
        counter = 2;
    } else if (e.target.id === "radio3") {
        chrousol.style.transition = `${transitionSpeed}s`;
        chrousol.style.transform = `translateX(-${imgWidth * 3}px)`;
        counter = 3;
    } else if (e.target.id === "radio4") {
        chrousol.style.transition = `${transitionSpeed}s`;
        chrousol.style.transform = `translateX(-${imgWidth * 4}px)`;
        counter = 4;
    }
})
