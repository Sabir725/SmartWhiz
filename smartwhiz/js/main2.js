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
    if(statsContainer) {
        observer.observe(statsContainer);
    }

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

    // Modal Handling
    const enquiryBtn = document.getElementById('enquiry-now-btn');
    const enquiryModal = document.getElementById('enquiry-modal');
    const thankYouModal = document.getElementById('thank-you-modal');
    const modals = document.querySelectorAll('.modal');
    const closeBtns = document.querySelectorAll('.close-btn');
    const container = document.querySelector('body');

    function openModal(modal) {
        if(modal) {
            modal.style.display = 'block';
            container.classList.add('modal-open');
        }
    }

    function closeModal(modal) {
        if(modal) {
            modal.style.display = 'none';
            const anyModalOpen = Array.from(modals).some(m => m.style.display === 'block');
            if (!anyModalOpen) {
                container.classList.remove('modal-open');
            }
        }
    }

    if(enquiryBtn) {
        enquiryBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(enquiryModal);
        });
    }

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            closeModal(modal);
        });
    });

    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target == modal) {
                closeModal(modal);
            }
        });
    });

    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        const form = event.target;
        const formData = new FormData(form);
        const action = form.getAttribute('action');

        // Send form data in the background
        fetch(action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).catch(error => {
            // Log errors to the console, but don't show an alert to the user.
            console.error('Form submission error:', error);
        });

        // Hide the form's modal
        const parentModal = form.closest('.modal');
        if (parentModal) {
            closeModal(parentModal);
        } else {
            // If the form is not in a modal, we still want to show the thank you message
            openModal(thankYouModal); 
        }

        // Reset the form
        form.reset();

        // Show the thank you pop-up
        openModal(thankYouModal);
    };

    const freeCounselingForm = document.getElementById('free-counseling-form');

    if (freeCounselingForm) {
        freeCounselingForm.addEventListener('submit', handleFormSubmit);
    }

    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    const hero = document.getElementById('hero');
    const images = [
        'smartwhiz/images/Landing1.jpg',
        'smartwhiz/images/Landing2.jpg'
    ];
    let currentImageIndex = 0;

    function changeBackgroundImage() {
        if(hero) {
            hero.style.backgroundImage = `url(${images[currentImageIndex]})`;
            currentImageIndex = (currentImageIndex + 1) % images.length;
        }
    }

    if(hero) {
        setInterval(changeBackgroundImage, 5000);
        changeBackgroundImage();
    }
    
    // Chat Widget
    const whatsappToggle = document.getElementById('whatsapp-toggle');
    const chatWidget = document.getElementById('chat-widget');
    const chatCloseBtn = document.getElementById('chat-close-btn');

    if (whatsappToggle && chatWidget) {
        whatsappToggle.addEventListener('click', (e) => {
            e.preventDefault();
            chatWidget.classList.toggle('open');
        });
    }

    if (chatCloseBtn && chatWidget) {
        chatCloseBtn.addEventListener('click', () => {
            chatWidget.classList.remove('open');
        });
    }
});
