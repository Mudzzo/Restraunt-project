const animatedElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    root: null,
    threshold: 0.1,
  }
);

animatedElements.forEach((element) => observer.observe(element));
