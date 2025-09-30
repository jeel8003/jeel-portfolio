// Dark mode toggle
const btn = document.getElementById('themeBtn');
btn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  if(document.body.classList.contains('light')) {
    document.body.style.background = '#fff';
    document.body.style.color = '#000';
    btn.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    document.body.style.background = '#0f1724';
    document.body.style.color = '#fff';
    btn.innerHTML = '<i class="fas fa-moon"></i>';
  }
});