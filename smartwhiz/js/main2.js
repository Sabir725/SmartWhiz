document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
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
    const enquiryForm = document.getElementById('free-counseling-form');
    
    const enquiryNameInput = enquiryForm.querySelector('input[name="student-name"]');
    const enquiryMobileInput = enquiryForm.querySelector('input[name="mobile-number"]');
    const enquiryCityInput = enquiryForm.querySelector('input[name="city"]');
    const enquiryStateInput = enquiryForm.querySelector('input[name="state"]');

    enquiryNameInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    });

    enquiryMobileInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\d]/g, '');
    });

    enquiryCityInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    });

    enquiryStateInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    });

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

    enquiryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = enquiryForm.querySelector('input[name="student-name"]');
        const mobile = enquiryForm.querySelector('input[name="mobile-number"]');
        const email = enquiryForm.querySelector('input[name="email-id"]');
        const city = enquiryForm.querySelector('input[name="city"]');
        const state = enquiryForm.querySelector('input[name="state"]');
        const qualification = enquiryForm.querySelector('input[name="last-qualification"]');

        if (!name.value || !/^[a-zA-Z\s]+$/.test(name.value)) {
            alert('Please enter a valid name (letters and spaces only).');
            return;
        }

        if (!mobile.value || !/^[\d]{10}$/.test(mobile.value)) {
            alert('Please enter a valid 10-digit mobile number.');
            return;
        }

        if (!email.value || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!city.value || !/^[a-zA-Z\s]+$/.test(city.value)) {
            alert('Please enter a valid city (letters and spaces only).');
            return;
        }

        if (!state.value || !/^[a-zA-Z\s]+$/.test(state.value)) {
            alert('Please enter a valid state (letters and spaces only).');
            return;
        }

        if (!qualification.value) {
            alert('Please enter your last qualification.');
            return;
        }

        const subject = 'New Enquiry from SmartWhiz Website';
        const body = `
            Name: ${name.value}
            Mobile: ${mobile.value}
            Email: ${email.value}
            City: ${city.value}
            State: ${state.value}
            Last Qualification: ${qualification.value}
        `;
        
        window.open(`mailto:smartwhizedu@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`);

        const successMessage = document.createElement('p');
        successMessage.textContent = 'Thank you for your enquiry! We will get back to you shortly.';
        successMessage.style.color = 'green';
        successMessage.style.marginTop = '10px';
        enquiryForm.appendChild(successMessage);

        setTimeout(() => {
            enquiryForm.reset();
            successMessage.remove();
            modal.style.display = 'none';
        }, 3000);
    });

    // Contact Us Form
    const contactForm = document.getElementById('counselling-form');
    const contactNameInput = contactForm.querySelector('input[name="name"]');
    const contactPhoneInput = contactForm.querySelector('input[name="phone"]');

    contactNameInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    });

    contactPhoneInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\d]/g, '');
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = contactForm.querySelector('input[name="name"]');
        const email = contactForm.querySelector('input[name="email"]');
        const phone = contactForm.querySelector('input[name="phone"]');
        const message = contactForm.querySelector('textarea[name="message"]');

        if (!name.value || !/^[a-zA-Z\s]+$/.test(name.value)) {
            alert('Please enter a valid name (letters and spaces only).');
            return;
        }

        if (!email.value || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!phone.value || !/^[\d]{10}$/.test(phone.value)) {
            alert('Please enter a valid 10-digit mobile number.');
            return;
        }

        if (!message.value) {
            alert('Please enter your message.');
            return;
        }

        const subject = 'New Message from SmartWhiz Website Contact Form';
        const body = `
            Name: ${name.value}
            Email: ${email.value}
            Phone: ${phone.value}
            Message: ${message.value}
        `;

        window.open(`mailto:smartwhizedu@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`);

        const successMessage = document.createElement('p');
        successMessage.textContent = 'Thank you for your message! We will get back to you shortly.';
        successMessage.style.color = 'green';
        successMessage.style.marginTop = '10px';
        contactForm.appendChild(successMessage);

        setTimeout(() => {
            contactForm.reset();
            successMessage.remove();
        }, 3000);
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