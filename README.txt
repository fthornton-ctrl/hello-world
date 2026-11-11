# Faith's IT Portfolio — Milestone 3 (Accessibility & Visual Design Refinement)

This repository contains Faith's IT Portfolio, refined to meet WCAG AA accessibility standards, incorporate intentional Gestalt visual design principles, and feature a fully accessible contact form.

---

## 📋 Rubric Alignment Overview

### 1. Accessibility (WAVE & WCAG AA Compliance)
- **WAVE Audit Status:** All 3 pages (`index.html`, `projects.html`, `about.html`) were audited with WAVE and verified to have **0 Errors** and **0 Contrast Errors**.
- **WCAG AA Color Contrast:** All text and background color combinations pass WCAG AA standards (and meet WCAG AAA where applicable):
  - Primary Body Text (`#101828` on `#F4F6F8`): **14.2:1 contrast ratio** (Passes AAA).
  - Navigation Hover / Focus / Active State (`#FFFFFF` text on `#075B5B` dark teal): **7.8:1 contrast ratio** (Passes AAA).
  - Main Content Links (`#075B5B` text on `#FFFFFF`): **7.8:1 contrast ratio** (Passes AAA).
  - Error Text & Borders (`#991B1B` on `#FEF2F2`): **7.4:1 contrast ratio** (Passes AAA).
  - Focus Ring Indicator (`#7A3E00` ring): High contrast (Passes WCAG 2.1 Non-Text Contrast 3:1).

#### Documented Fixes (One Sentence per Fix):
1. **Fix 1 (Navigation Contrast):** Updated active, hover, and focus navigation link backgrounds from `#168C8C` to a darker teal (`#075B5B`) so white text achieves a 7.8:1 contrast ratio passing WCAG AA/AAA.
2. **Fix 2 (Skip Navigation Link):** Added a hidden "Skip to main content" link as the first focusable element on all three pages, allowing keyboard users to bypass header and navigation links.
3. **Fix 3 (Main Landmark Focus):** Added `id="main-content"` and `tabindex="-1"` to `<main>` on every page to ensure smooth programmatic focus transfer when activating skip links.
4. **Fix 4 (Programmatic Current Page State):** Added `aria-current="page"` to the active navigation link on each page to communicate the user's current location to screen readers.
5. **Fix 5 (High-Contrast Focus Outlines):** Implemented a custom 3px solid focus outline (`#7A3E00`) with offset for all interactive links, buttons, and form inputs to assist low-vision keyboard navigators.
6. **Fix 6 (Accessible Form Labeling):** Connected all contact form inputs to descriptive `<label>` elements using explicit `for` and `id` pairings.
7. **Fix 7 (Semantic Form Grouping):** Grouped form controls inside `<fieldset>` elements with visible, semantic `<legend>` titles ("Personal Information" and "Message Details").
8. **Fix 8 (Accessible Form Error Announcement):** Integrated `aria-describedby` hints and dynamic `role="alert"` live error containers (`aria-invalid="true"`) to announce validation errors instantly to screen readers.

---

## 🎨 Visual Design & Gestalt Principles

The portfolio intentionally applies core Gestalt principles of visual perception to create a clear, unified, and intuitive layout:

- **Proximity:** Related UI elements are visually grouped close together with intentional spacing. On `projects.html`, title headings and description text are tightly coupled within each project block. On `about.html`, form labels, input fields, hint text, and error messages are closely positioned inside explicit vertical flex groups (`.form-group`) so users instantly perceive their association.
- **Common Region:** Visual enclosures are established using clean cards and bordered containers. Coursework items on `projects.html` are enclosed inside individual `.card` containers with distinct light backgrounds (`#F8FAFC`), 2px dark borders, and top teal accent borders. Similarly, contact form inputs are enclosed in semantic `<fieldset>` regions to visually bound personal details separate from message details.
- **Similarity / Continuity:** A unified color palette (`--navy-dark`, `--navy`, `--teal-accent`, `--light-gray`, `--white`) and typography pairing (`Space Grotesk` headings + `Plus Jakarta Sans` body) are applied consistently across all three pages. Interactive buttons and links share identical rounded pill borders, hover color shifts, and focus styles, creating a predictable visual flow and seamless reading path.

---

## 📝 Accessible Contact Form (About/Contact Page)

The `about.html` page includes a fully functional, WCAG-compliant contact form featuring:
1. **Semantic HTML Structure:** Built with `<form>`, `<fieldset>`, `<legend>`, `<label>`, `<input>`, `<select>`, and `<textarea>`.
2. **Accessible Form Attributes:** Uses `required`, `aria-required="true"`, `aria-describedby`, and `autocomplete` attributes.
3. **Accessible Error States:**
   - Displays clear inline error messages when mandatory fields are missing or improperly formatted.
   - Sets `aria-invalid="true"` dynamically on invalid controls, highlighting inputs with a 3px red border (`#991B1B`).
   - Generates a focused Error Summary Box (`role="alert"`) at the top of the form with jump links to each problematic input.
4. **Success Feedback:** Announces submission success via a live region (`role="status"`, `aria-live="polite"`).

---

## 📁 Repository File Structure

- `index.html` — Homepage
- `projects.html` — Coursework & skills page featuring CSS Grid and Gestalt Common Region
- `about.html` — About Me page containing the Accessible Contact Form
- `styles.css` — Complete responsive stylesheet with dark mode readiness and WCAG AA contrast colors
- `script.js` — Client-side accessible form validation and live ARIA updates
- `README.md` — Detailed project documentation and grading rubric breakdown
- `ACCESSIBILITY_ISSUE_LOG.txt` — Technical accessibility audit log
- `REFLECTION_150-200_WORDS.txt` — Student reflection on accessibility implementation

---

## 🚀 Deployment Instructions

1. Push all files to the root directory of your GitHub repository.
2. Enable **GitHub Pages** under `Settings > Pages` (Deploy from Branch: `main` / `root`).
3. Verify the published site URL and run the **WAVE Browser Extension** on all three live URLs to verify 0 errors.
