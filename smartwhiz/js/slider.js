document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll(".slider-container");

    sliders.forEach(slider => {
        const courseCards = slider.querySelector(".course-cards");
        const prevButton = slider.querySelector(".slider-button.prev");
        const nextButton = slider.querySelector(".slider-button.next");

        if (courseCards && prevButton && nextButton) {
            const card = courseCards.querySelector(".card");
            if(card) {
                const cardWidth = card.offsetWidth;
                const scrollAmount = cardWidth + 30; // card width + margin

                nextButton.addEventListener("click", () => {
                    courseCards.scrollBy({
                        left: scrollAmount,
                        behavior: "smooth"
                    });
                });

                prevButton.addEventListener("click", () => {
                    courseCards.scrollBy({
                        left: -scrollAmount,
                        behavior: "smooth"
                    });
                });
            }
        }
    });

    const testimonialSlider = document.querySelector(".testimonial-slider-container");

    if (testimonialSlider) {
        const testimonialCards = testimonialSlider.querySelector(".testimonial-cards");
        const prevButton = testimonialSlider.querySelector(".testimonial-slider-button.prev");
        const nextButton = testimonialSlider.querySelector(".testimonial-slider-button.next");

        if (testimonialCards && prevButton && nextButton) {
            const card = testimonialCards.querySelector(".testimonial-card");
            if(card){
                const cardWidth = card.offsetWidth;
                const scrollAmount = cardWidth + 30; // card width + gap

                nextButton.addEventListener("click", () => {
                    testimonialCards.scrollBy({
                        left: scrollAmount,
                        behavior: "smooth"
                    });
                });

                prevButton.addEventListener("click", () => {
                    testimonialCards.scrollBy({
                        left: -scrollAmount,
                        behavior: "smooth"
                    });
                });
            }
        }
    }
});