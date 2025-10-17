# Project Blueprint: SmartWhiz Edutech Website

## Overview

This document outlines the structure, features, and ongoing development plan for the SmartWhiz Edutech website. The primary goal of this project is to create a professional, user-friendly, and informative web presence that effectively showcases the company's educational consulting services and drives student inquiries.

## Project Outline

### Core Technologies
*   **HTML:** Main structure for all web pages.
*   **CSS:** Custom styling for layout, typography, and visual effects.
*   **JavaScript:** Powers interactive elements like sliders, modals, and form submissions.
*   **Font Awesome:** Used for iconography throughout the site.
*   **jQuery:** Utilized for simplifying DOM manipulation and event handling.

### Key Pages & Features
*   **`index.html` (Home Page):** The main landing page featuring a hero section, overview of services, course highlights, testimonials, and contact information.
*   **`about.html` (About Us):** Provides detailed information about the company's mission, vision, values, and team.
*   **`courses.html` (Courses):** Lists the various fields of study for which the company provides admission guidance.
*   **Course-Specific Pages:** (e.g., `management-course.html`, `medical-course.html`): Detailed pages for each academic stream.
*   **`blogs.html` (Blogs):** A section for articles and updates.
*   **Interactive Forms:** "Enquiry Now" and "Contact Us" forms that submit data via Formsubmit.co.
*   **Responsive Design:** The layout adapts to various screen sizes for a consistent experience on desktop and mobile devices.

### Design & Aesthetics
*   **Color Palette:** A professional blend of dark blues, whites, and accent colors to convey trust and expertise.
*   **Typography:** Clean, sans-serif fonts for readability.
*   **Layout:** Modern, card-based design with clear sectioning and ample white space.
*   **Imagery:** High-quality, relevant images for courses and testimonials.

## Current Plan: Restructure and Enhance Courses Page

The following steps have been taken to improve the organization and visual appeal of the courses page, making it more intuitive and engaging for users.

### 1. **`courses.html` Restructuring**
*   **Objective:** To move from a general, category-based card layout to a more granular design where each specific course has its own card.
*   **Actions:**
    *   Modified the `courses.html` file to group courses under distinct category titles (e.g., "Management," "Medical").
    *   Within each category, created individual, clickable cards for each course (e.g., MBA, PGDM, MBBS).

### 2. **Visual Enhancement of Course Cards**
*   **Objective:** To make the course cards more informative and visually appealing.
*   **Actions:**
    *   Added a relevant Font Awesome icon to each course card to provide a quick visual reference.
    *   Included a short, descriptive paragraph within each card to give users a better understanding of the course.
    *   Updated the `smartwhiz/css/courses-style-v2.css` stylesheet to style the new icons and descriptions, ensuring a clean, modern, and visually balanced layout.
    *   The new design centers the content, adds more padding, and uses a light grey background to make the cards stand out.
