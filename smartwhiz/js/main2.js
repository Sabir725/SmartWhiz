document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li a');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    });

    const courseReadMoreBtns = document.querySelectorAll('.course-read-more-btn');
    courseReadMoreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const description = btn.previousElementSibling;
            description.classList.toggle('expanded');
            if (description.classList.contains('expanded')) {
                btn.textContent = 'Read Less';
            } else {
                btn.textContent = 'Read More';
            }
        });
    });

    const testimonialReadMoreBtns = document.querySelectorAll('.testimonial-read-more-btn');
    testimonialReadMoreBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const testimonialCard = e.target.closest('.testimonial-card');
            const text = testimonialCard.querySelector('.testimonial-text').textContent;

            const modal = document.createElement('div');
            modal.classList.add('testimonial-modal');

            const modalContent = document.createElement('div');
            modalContent.classList.add('testimonial-modal-content');

            const closeBtn = document.createElement('span');
            closeBtn.classList.add('testimonial-close-btn');
            closeBtn.innerHTML = '&times;';

            const modalText = document.createElement('p');
            modalText.textContent = text;

            modalContent.appendChild(closeBtn);
            modalContent.appendChild(modalText);
            modal.appendChild(modalContent);
            document.body.appendChild(modal);

            modal.style.display = 'block';

            closeBtn.onclick = function() {
                modal.style.display = 'none';
                document.body.removeChild(modal);
            }

            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = 'none';
                    document.body.removeChild(modal);
                }
            }
        });
    });

    const statNumbers = document.querySelectorAll('.stat-number');
    const statsContainer = document.querySelector('#why-choose-us');

    const animateStats = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statNumbers.forEach(statNumber => {
                    const target = +statNumber.getAttribute('data-target');
                    const suffix = statNumber.getAttribute('data-suffix') || '';
                    let current = 0;

                    const updateCount = () => {
                        const increment = target / 200;
                        if (current < target) {
                            current += increment;
                            statNumber.innerText = Math.ceil(current) + suffix;
                            setTimeout(updateCount, 1);
                        } else {
                            statNumber.innerText = target + suffix;
                        }
                    };
                    updateCount();
                });
                observer.unobserve(statsContainer);
            }
        });
    };

    const observer = new IntersectionObserver(animateStats, { threshold: 0.5 });
    observer.observe(statsContainer);

    const bankLogos = document.querySelector('.bank-logos');
    if (bankLogos) {
        const logos = bankLogos.querySelectorAll('img');
        logos.forEach(logo => {
            const clone = logo.cloneNode(true);
            bankLogos.appendChild(clone);
        });
    }

    const institutionLogos = document.querySelector('.institution-logos');
    if (institutionLogos) {
        const logos = institutionLogos.querySelectorAll('img');
        logos.forEach(logo => {
            const clone = logo.cloneNode(true);
            institutionLogos.appendChild(clone);
        });
    }

    // Enquiry Form
    const enquiryBtn = document.getElementById('enquiry-now-btn');
    const modal = document.getElementById('enquiry-modal');
    const closeBtn = document.querySelector('.close-btn');
    
    enquiryBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });

    const scrollToTopBtn = document.getElementById("scroll-to-top");

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    scrollToTopBtn.onclick = function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    const hero = document.getElementById('hero');
    const images = [
        '/smartwhiz/images/Landing1.jpg',
        '/smartwhiz/images/Landing2.jpg'
    ];
    let currentImageIndex = 0;

    function changeBackgroundImage() {
        hero.style.backgroundImage = `url(${images[currentImageIndex]})`;
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    setInterval(changeBackgroundImage, 5000);
    changeBackgroundImage();
});