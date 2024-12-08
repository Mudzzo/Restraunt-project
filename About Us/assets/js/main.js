// Select the button
const button = document.querySelector('.btn-4no');


button.classList.add('custom-style');

// Add hover effect using JavaScript
button.addEventListener('mouseover', () => button.classList.add('hover-effect'));
button.addEventListener('mouseout', () => button.classList.remove('hover-effect'));
