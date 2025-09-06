document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    readMoreBtns.forEach(btn => {
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
        const firstClone = bankLogos.cloneNode(true);
        bankLogos.parentNode.appendChild(firstClone);
    }

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