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

## Previous Plans

### Index Page Modifications
The following changes were made to the `index.html` file to adjust the content presentation.
*   **Commented out "Top Ranked Institutions" Section:** The `<section id="top-institutions">...</section>` block was enclosed in HTML comments.
*   **Removed "Read More" Button from "About Us" Section:** The `<a href="about.html" class="cta-button">Read More</a>` link was removed.

### Courses Page Restructuring
*   **`courses.html` Restructuring:** Grouped courses under distinct categories and created individual cards for each course.
*   **Visual Enhancement of Course Cards:** Added icons and descriptions to course cards and updated the corresponding CSS.

## Current Plan: SEO Optimization

The `index.html` file has been optimized for Search Engine Optimization (SEO) to improve its visibility and ranking on search engine results pages.

### 1. **Meta Tags Implementation**
*   **Objective:** To provide search engines with a summary of the page content and relevant search terms.
*   **Action:**
    *   Added a `<meta name="description">` tag with a concise and compelling summary of SmartWhiz Edutech's services.
    *   Added a `<meta name="keywords">` tag with relevant terms such as "education consultants," "study abroad," "career counseling," "MBA admission," etc.

### 2. **Schema Markup (JSON-LD)**
*   **Objective:** To help search engines understand the entity and its properties, which can lead to rich snippets in search results.
*   **Action:**
    *   Implemented `EducationalOrganization` schema markup within a `<script type="application/ld+json">` tag in the `<head>` section.
    *   This schema includes the organization's name, URL, logo, contact information, and address.

### 3. **Image `alt` Attribute Optimization**
*   **Objective:** To improve accessibility and provide search engines with context for the images on the page.
*   **Action:**
    *   Reviewed and updated the `alt` attributes for all images in `index.html`.
    *   Made the `alt` text more descriptive. For example, testimonial images now include the student's name and the institution (e.g., `alt="Testimonial from Shreya Patle, SP Jain, Mumbai"`).

### 4. **Header Tag Review**
*   **Objective:** To ensure a logical and hierarchical structure of content for both users and search engines.
*   **Action:**
    *   Verified that `<h1>`, `<h2>`, and `<h3>` tags are used correctly to structure the page content, with a single `<h1>` for the main heading.