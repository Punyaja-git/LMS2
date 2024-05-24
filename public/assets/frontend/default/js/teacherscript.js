import gsap from "https://esm.sh/gsap";

const images = document.querySelectorAll(".grid img");

const tl = gsap.timeline();

images.forEach((image, index) => {
  tl.fromTo(
    image,
    { x: "120%", opacity: 0, delay: index * 0,width:'2rem' },
    { x: "0%", opacity: 1,width:"100%" }
  );
});