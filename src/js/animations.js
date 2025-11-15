gsap.registerPlugin(ScrollTrigger);

gsap.from('.hero-bg', {
  scale: 1.1,
  opacity: 0,
  duration: 1.5,
  ease: 'power2.out',
});

// hero section
let heroTl = gsap.timeline();

heroTl
  .from('.hero-title', {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
  })
  .from(
    '.hero-logos',
    {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    },
    '-=0.4'
  )
  .from(
    '.hero-btns',
    {
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
    },
    '-=0.4'
  );
// about section
let aboutTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#about',
    start: 'top 75%',
  },
});
aboutTl.from('.about-img', {
  x: -80,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
});
aboutTl.from(
  '.about-title',
  {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: 'power3.out',
  },
  '-=0.4'
);
aboutTl.from(
  '.about-heading',
  {
    y: 40,
    opacity: 0,
    duration: 0.7,
    ease: 'power3.out',
  },
  '-=0.4'
);
aboutTl.from(
  '.about-text',
  {
    y: 25,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.out',
  },
  '-=0.4'
);
const counters = document.querySelectorAll('.counter');
counters.forEach((counter) => {
  let target = +counter.getAttribute('data-target');

  gsap.fromTo(
    counter,
    { innerText: 0 },
    {
      innerText: target,
      duration: 2,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: counter,
        start: 'top 90%',
      },
      snap: { innerText: 1 },
      onUpdate: function () {
        counter.innerText = `+${Math.floor(counter.innerText)}`;
      },
    }
  );
});
// services section
let servicesTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#services',
    start: 'top 80%',
  },
});

servicesTl.from('.services-title', {
  y: 40,
  opacity: 0,
  duration: 0.7,
  ease: 'power3.out',
});

servicesTl.from(
  '.services-heading',
  {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
  },
  '-=0.5'
);

servicesTl.from(
  '.services',
  {
    y: 60,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out',
  },
  '-=0.6'
);

servicesTl.from('.serviceCard', {
  y: 10,
  duration: 0.8,
  ease: 'power3.out',
});

gsap.from('.service-icon', {
  scale: 0,
  opacity: 0,
  duration: 0.6,
  ease: 'back.out(1.7)',
  stagger: 0.15,
  scrollTrigger: {
    trigger: '#services',
    start: 'top 70%',
  },
});
// gallery section
gsap.from('#gallery .head', {
  opacity: 0,
  duration: 1.2,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '#gallery',
    start: 'top 80%',
  },
});

document.querySelectorAll('#gallery .card').forEach((card) => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card, {
      rotateY: 7,
      rotateX: -4,
      duration: 0.4,
      ease: 'power2.out',
    });
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  });
});
// plan section
gsap.from('#plan h3, #plan h2', {
  scrollTrigger: {
    trigger: '#plan',
    start: 'top 90%',
  },
  y: 30,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: 'power2.out',
});
// team section

gsap.from('#team h3, #team h2, #team p', {
  scrollTrigger: {
    trigger: '#team',
    start: 'top 90%',
  },
  y: 30,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: 'power2.out',
});
// work section

gsap.from('#work h3, #work h2', {
  scrollTrigger: {
    trigger: '#work',
    start: 'top 90%',
  },
  y: 30,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: 'power2.out',
});

gsap.from('.work', {
  scrollTrigger: {
    trigger: '.works',
    start: 'top 80%',
  },
  y: 50,
  opacity: 0,
  scale: 0.95,
  duration: 1,
  stagger: 0.2,
  ease: 'power3.out',
});
document.querySelectorAll('.work i.fa-arrow-right-long').forEach((arrow) => {
  gsap.fromTo(
    arrow,
    { x: -10, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.5,
      repeat: 2,
      yoyo: true,
      ease: 'power1.inOut',
    }
  );
});
// testimonial section

gsap.from('#testimonial h3, #testimonial h2', {
  scrollTrigger: {
    trigger: '#testimonial',
    start: 'top 90%',
  },
  y: 30,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: 'power2.out',
});

gsap.from('.testimonial', {
  scrollTrigger: {
    trigger: '.testimonial',
    start: 'top 80%',
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
});
// quote section

gsap.from('#quote h3, #quote h2', {
  scrollTrigger: {
    trigger: '#quote',
    start: 'top 90%',
  },
  y: 30,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: 'power2.out',
});

gsap.from('#quote form', {
  scrollTrigger: {
    trigger: '#quote form',
    start: 'top 80%',
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
});
