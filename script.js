// Manual-only carousel (no auto-advance, no time bar)

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const carousel = document.querySelector('.carousel');
const list = document.querySelector('.list');

const transitionCleanupMs = 1000; // match your CSS transition: 1s

function showSlider(direction) {
  const items = list.querySelectorAll('.item');
  if (!items.length) return;

  if (direction === 'next') {
    list.appendChild(items[0]);
    carousel.classList.add('next');
  } else {
    list.prepend(items[items.length - 1]);
    carousel.classList.add('prev');
  }

  clearTimeout(window._slideCleanup);
  window._slideCleanup = setTimeout(() => {
    carousel.classList.remove('next', 'prev');
  }, transitionCleanupMs);
}

nextBtn.addEventListener('click', () => showSlider('next'));
prevBtn.addEventListener('click', () => showSlider('prev'));

// Optional: keyboard support
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') showSlider('next');
  if (e.key === 'ArrowLeft') showSlider('prev');
});
