# JavaScript Fundamentals Quiz App

## Overview

A dynamic, interactive quiz application designed to test foundational knowledge of JavaScript. This project demonstrates proficiency in DOM manipulation, event handling, state management, and CSS-in-JS styling.

## Features

- **Dynamic Question Loading:** Questions are generated from a data array, meaning no hardcoded HTML for every question.
- **Randomized Experience:** The question pool is shuffled using a randomizing algorithm every time the quiz starts or restarts.
- **Immediate Feedback:** Users receive instant visual cues (Green for Correct, Red for Incorrect) upon selection.
- **Score Tracking:** Real-time calculation of correct answers.
- **Progress Indicator:** Displays current question progress (e.g., "Question 3 of 10").
- **Responsive Controls:** The "Next" button remains disabled until an answer is selected to ensure a guided user experience.
- **Restart Functionality:** Allows users to reset their progress and shuffle the questions for a fresh attempt.

## Technologies Used

- **HTML5:** Semantic structure for quiz and score containers.
- **CSS3:** Flexbox layout, custom color palette (#141b41 and #ff6d00), and dynamic visibility classes.
- **JavaScript (ES6):**
  - Arrays and Objects for data storage.
  - `forEach` loops for dynamic element creation.
  - Event Listeners for user interaction.
  - `classList` for managing UI states and visibility.
  - `Math.random()` for shuffling data.

## How to Run

1. Download the project files.
2. Open `index.html` in any modern web browser.
3. Select an answer for each question and click "Next Question" to proceed.
4. View your final score and restart the quiz as desired.

## Technical Highlights

- **DRY Principle:** Used combined CSS selectors and reusable functions to keep the codebase efficient.
- **Specificity Management:** Handled CSS ID vs. Class priority to ensure smooth transitions between quiz and score screens.
- **Boolean Logic:** Implemented button state toggling using pure Boolean values to manage the "Next Question" button availability.

---

_Created as part of the DOMination Assignment - April 2026_
