const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');


const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  duration: 6000,
  triggerElement: intro,
  triggerHook: 0
})
.setPin(intro)
.addTo(controller);

const tweneAnim = TweenMax.fromTo(text, 3, {opacity: 1}, {opacity: 0});

const scene2 = new ScrollMagic.Scene({
  duration: 4000,
  triggerElement: intro,
  triggerHook: 0
})
.setTween(tweneAnim)
.addTo(controller);

let scrollPos = 0;
let accelAmount = 0.1;
let delay = 0;

scene.on('update', e => {
  scrollPos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollPos - delay) * accelAmount;
  console.log('delay', delay, scrollPos);

  video.currentTime = delay;
}, 15)