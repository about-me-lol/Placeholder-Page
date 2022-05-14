const images = ["bg1.png", "bg2.png", "bg3.png"]
const slideshow = () => images.forEach((e, i) => {
    setTimeout(() => {
        imageDiv = document.querySelector(".bg");
        imageDiv.style.background = `url('assets/slideshow/${e}') center/cover no-repeat`;
    }, i*5000);
});
setInterval(slideshow, images.length*5000)