const buttons = document.querySelectorAll('.btn-4no');
buttons.forEach((button) => {
  button.classList.add('custom-style'); 

  button.addEventListener('mouseover', () => button.classList.add('hover-effect'));
  button.addEventListener('mouseout', () => button.classList.remove('hover-effect'));
});
