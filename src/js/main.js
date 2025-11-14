const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const slides = document.getElementById('slides');
const dots = document.querySelectorAll('.dots span');
const arrowLeft = document.querySelector('.arrows span:first-child');
const arrowRight = document.querySelector('.arrows span:last-child');
let index = 0;
const totalSlides = 3;
const users = document.querySelectorAll('.user');
const nameEl = document.getElementById('name');
const roleEl = document.getElementById('role');
const textEl = document.getElementById('text');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  menuToggle.classList.toggle('fa-bars');
  menuToggle.classList.toggle('fa-xmark');
});

function updateSlider() {
  slides.style.transform = `translateX(-${index * 420}px)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle('bg-[#FF8C00]', i === index);
    dot.classList.toggle('bg-white', i !== index);
    dot.style.width = i === index ? '50px' : '10px';
  });
}

arrowRight.onclick = () => {
  index = (index + 1) % totalSlides;
  updateSlider();
};

arrowLeft.onclick = () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlider();
};

dots.forEach((dot, i) => {
  dot.onclick = () => {
    index = i;
    updateSlider();
  };
});

users.forEach((user) => {
  user.addEventListener('click', () => {
    users.forEach((u) => u.classList.remove('border-4', 'border-[#FF8C00]'));
    user.classList.add('border-4', 'border-[#FF8C00]');
    nameEl.textContent = user.dataset.name;
    roleEl.textContent = user.dataset.role;
    textEl.textContent = user.dataset.text;
  });
});
