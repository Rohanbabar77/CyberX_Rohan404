
window.addEventListener('scroll', () => {
  document.querySelectorAll('.scroll-type').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add('show');
    }
  });
});
function toggleDarkMode() {
  document.body.classList.toggle('dark');
}
