
document.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('.animated-discount-details');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            console.log(entry.isIntersecting); 
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(image);
});


document.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('.animated-image-right');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            console.log(entry.isIntersecting); 
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(image);
});



document.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('.animated-image-left');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            console.log(entry.isIntersecting); 
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(image);
});

