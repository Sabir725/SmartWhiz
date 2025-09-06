# Admission Consultancy Website Blueprint

## Overview

This document outlines the plan for creating a modern, responsive, and user-friendly website for an admission consultancy named "SmartWhiz Edutech". The website will be built using HTML, CSS, and JavaScript, following modern web standards and best practices.

## Project Structure

The project will have the following directory structure:

/
|-- index.html
|-- smartwhiz/
|   |-- css/
|   |-- js/
|   |-- images/
|-- blueprint.md
|-- README.md

## Phase 1: Basic Structure and Content (Completed)

### Plan:

1.  **Create `blueprint.md`:** Document the project's overview, structure, and features.
2.  **Create `smartwhiz` Directory:** Create the main directory for assets.
3.  **Create Subdirectories:** Create `css`, `js`, and `images` subdirectories inside `smartwhiz`.
4.  **Create `index.html`:** Create the main HTML file for the home page.
5.  **Create `style.css`:** Create the main stylesheet.
6.  **Create `main.js`:** Create the main JavaScript file.
7.  **Populate `index.html`:**
    *   Add a header with the company logo and navigation menu.
    *   Add a hero section with a welcoming message and a call-to-action button.
    *   Add an "About Us" section.
    *   Add a "Courses" section with a slider.
    *   Add a "Services" section.
    *   Add a "Contact Us" section.
    *   Add a footer with contact information and social media links.
8.  **Populate `style.css`:**
    *   Add basic styling for the body, header, navigation, sections, and footer.
    *   Use a modern and clean color palette.
    *   Ensure responsive design using media queries.
9.  **Populate `main.js`:**
    *   Add JavaScript for a responsive navigation menu (e.g., a hamburger menu on smaller screens).
    *   Add JavaScript for the course slider.

## Phase 2: Bug Fixes and Image Updates (Completed)

### Plan:

1.  **Fix Broken Course Images:**
    *   Identified that the "Law" course image was referenced as `.jpg` but the file extension was `.jpeg`.
    *   Renamed `law.jpeg` to `law.jpg` to fix the broken image link.
2.  **Fix Broken Hero Image:**
    *   Downloaded a new hero image to `smartwhiz/images/hero-background.jpg`.
    *   Updated the `style.css` to use the new hero image.

## Phase 3: Content Update (Completed)

### Plan:

1.  **Update Service Name:**
    *   Replaced "University Selection" with "Admission Hubs" in the services section of `index.html`.
2.  **Update Service Name:**
    *   Replaced "Application Assistance" with "Scholarships & Education Loan" in the services section of `index.html`.
3.  **Remove Service Card:**
    *   Removed the "Visa Guidance" card from the "Our Services" section in `index.html`.
4.  **Remove Submenu:**
    *   Removed the submenu from the "Courses" link in the header of `index.html`.
5.  **Update Hero Image:**
    *   Updated the background image of the hero section to an image of a graduate girl student.

## Phase 4: Footer Deletion (Completed)

### Plan:

1.  **Remove Footer from `index.html`:**
    *   Deleted the `<footer>` HTML element and all its content from `index.html`.
2.  **Remove Footer Styles from `style.css`:**
    *   Removed the CSS rules related to the footer from `smartwhiz/css/style.css`.

## Phase 5: Form Validation Enhancement (Completed)

### Plan:

1.  **Enquiry Form Validation:**
    *   **Mobile Number:** Implemented a validator to allow only numbers in the mobile number field. On submission, it checks for a 10-digit number.
    *   **Email:** On submission, it validates for a correct email format.
    *   **Name:** Implemented a validator to allow only alphabetic characters and spaces in the name field. On submission, it checks for a non-empty value and the correct format.
    *   **Mailto Link:** On successful submission, the form data is used to generate a `mailto:` link to `smartwhizedu@gmail.com`.

## Phase 6: Contact Us Section Enhancement (Completed)

### Plan:

1.  **Update Button Text:**
    *   Change the "Send Message" button text to "Book free counselling".
2.  **Increase Input Field Width:**
    *   Increase the width of the name and number input fields to match the button's width.
3.  **Responsive Design:**
    *   Make the "Contact Us" section responsive for different screen sizes.

## Phase 7: Form Styling and Field Removal (Completed)

### Plan:

1.  **Remove "Select a Course" Field:**
    *   Remove the "Select a Course" dropdown from the counselling form in `index.html`.
    *   Remove the corresponding validation logic from `smartwhiz/js/main.js`.
2.  **Consistent Form Styling:**
    *   Update `smartwhiz/css/style.css` to ensure all text inputs and the submit button in the counselling form have a consistent width, padding, and border style.

## Phase 8: Remove Book Free Counselling Section (Completed)

### Plan:

1.  **Remove Section from HTML:**
    *   Delete the entire `<section id="contact">` from `index.html`.
2.  **Remove Styles:**
    *   Remove the corresponding CSS for the contact section from `smartwhiz/css/style.css`.
3.  **Remove JavaScript:**
    *   Remove the `counsellingForm()` function and its call from `smartwhiz/js/main.js`.

## Phase 9: Re-create Contact Us Section (Completed)

### Plan:

1.  **Add New Contact Section to `index.html`:**
    *   Create a new `<section id="contact">` with a two-column layout.
    *   One column will contain the "Book Free Counselling" form.
    *   The form will have the following fields: Name, Mobile Number, Email, City, State, and Last Qualification.
    *   The other column will display an attractive, theme-relevant image.
2.  **Style the New Section in `smartwhiz/css/style.css`:**
    *   Add styles for the two-column layout.
    *   Style the form elements for a modern look and feel.
    *   Ensure the section is responsive.
3.  **Add Form Logic to `smartwhiz/js/main.js`:**
    *   Create a new `counsellingForm()` function to handle form validation.
    *   Validate all the new fields, including "Last Qualification".
    *   On successful submission, generate a `mailto:` link with all the form data.

## Phase 10: Enhance "Book Free Counseling" Section (Completed)

### Plan:

1.  **Update Section Styling:**
    *   Add a visually appealing background to the "Book Free Counseling" section.
    *   Improve the layout and spacing of the form elements.
    *   Enhance the typography for better readability.
    *   Add a subtle box-shadow to the form container to make it stand out.
2.  **Restructure HTML (if needed):**
    *   Analyze the existing HTML structure and refactor it for better semantics and styling.
3.  **Review and Refine:**
    *   Ensure the changes are responsive and look good on all screen sizes.

## Phase 11: Hero Background Slider (Completed)

### Plan:

1.  **Create Image Array:**
    *   In `smartwhiz/js/main.js`, create an array of the two hero background images: `Landing1.jpg` and `Landing2.jpg`.
2.  **Implement Slider Logic:**
    *   Write a function to cycle through the images in the array.
    *   Use a `setInterval` to automatically change the background image every 5 seconds.
3.  **Add CSS for Smooth Transitions:**
    *   In `smartwhiz/css/style2.css`, add a CSS transition to the `background-image` property of the hero section for a smooth cross-fade effect.

## Phase 12: Branded "Book Free Counseling" Section (Completed)

### Plan:

1.  **Update `blueprint.md`:** Reflect the change to the "Book Free Counseling" section.
2.  **Modify `smartwhiz/css/style2.css`:**
    *   Update the background color of the `#counseling` section to the primary blue color from the logo (`#3498db`).
    *   Change the text color within the section to white (`#fff`) for better contrast and readability.

## Phase 13: Multi-Step Form Reversion (Completed)

### Plan:

1.  **Revert `index.html`:** Restore the HTML of the "Book Free Counseling" section to its original single-step form.
2.  **Revert `smartwhiz/css/style2.css`:** Remove the CSS styles associated with the multi-step form.
3.  **Revert `smartwhiz/js/main.js`:** Restore the original JavaScript validation logic for the single-step form.
4.  **Update `blueprint.md`:** Document the reversion of the multi-step form.

## Phase 14: Light Background for "Book Free Counseling" Section (Completed)

### Plan:

1.  **Update `blueprint.md`:** Reflect the change to the "Book Free Counseling" section's background color.
2.  **Modify `smartwhiz/css/style2.css`:**
    *   Change the `background` property of the `#counseling` section to a light color (`#f0f8ff`).

## Phase 15: "Read More" for Course Descriptions (Completed)

### Plan:

1.  **Modify `index.html`:**
    *   Wrap the course descriptions in a `div` with a class of `course-description`.
    *   Add a "Read More" button below each description.
2.  **Modify `smartwhiz/css/style2.css`:**
    *   Add CSS to truncate the `course-description` to a maximum height, hiding the rest of the content.
    *   Add an `expanded` class to remove the height restriction.
    *   Style the "Read More" button.
3.  **Modify `smartwhiz/js/main.js`:**
    *   Add a `readMore()` function.
    *   Add an event listener to the "Read More" buttons that toggles the `expanded` class on the `course-description` and changes the button text.
4.  **Update `blueprint.md`:** Document the new "Read More" functionality.

## Phase 16: "Read More" Bug Fix (Completed)

### Plan:

1.  **Update `blueprint.md`:** Reflect the bug fix for the "Read More" functionality.
2.  **Modify `smartwhiz/js/main.js`:**
    *   Update the `readMore()` function to ensure that only the description of the clicked course is expanded or collapsed.

## Phase 17: Add Testimonial Section (Completed)

### Plan:

1.  **Modify `index.html`:**
    *   Add a new "Testimonials" section after the "Why Choose Us" section.
    *   The section will include student images, names, college names, and their reviews.
2.  **Modify `smartwhiz/css/style2.css`:**
    *   Add CSS to style the new "Testimonials" section, including the testimonial cards and a slider.
3.  **Modify `smartwhiz/js/main.js`:**
    *   Add the JavaScript logic for the testimonial slider.
4.  **Update `blueprint.md`:**
    *   Document the addition of the new "Testimonials" section.

## Phase 18: Add "Services" to Navigation (Completed)

### Plan:

1.  **Modify `index.html`:**
    *   Add a "Services" link to the navigation menu, pointing to the "beyond-admissions" section.
2.  **Update `blueprint.md`:**
    *   Document the addition of the "Services" link to the navigation menu.
