const slides = document.querySelectorAll(".slide");

let index = 0;

function changeSlide(){

slides[index].classList.remove("active");

index++;

if(index >= slides.length){
index = 0;
}

slides[index].classList.add("active");

}

setInterval(changeSlide,3000);



const images = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

images.forEach(img => {

img.addEventListener("click", () => {

lightbox.style.display="flex";
lightboxImg.src = img.src;

});

});

closeLightbox.onclick = () => {
lightbox.style.display="none";
};

lightbox.onclick = () => {
lightbox.style.display="none";
};