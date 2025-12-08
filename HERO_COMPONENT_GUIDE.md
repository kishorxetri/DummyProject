# Complete Guide to Hero.jsx

This document provides a comprehensive breakdown of the `Hero.jsx` component. It covers the logic, the styling strategy, and how to customize it.

## 1. Overview
The **Hero Component** acts as the main landing section of the homepage. usage:
- **Automatic Image Slider**: Cycles through 3 diagnostic center highlights every 6 seconds.
- **Animated Text**: Titles and descriptions slide in with a "staggered" animation effect.
- **Floating Action Buttons**: Includes appointment and learn more buttons with hover effects.
- **Info Cards**: Three cards at the bottom (Emergency, Timetable, Hours) that overlap the main image for a modern look.

---

## 2. Dependencies & Libraries
To use this code, ensuring the following are installed in `package.json`:
- **React**: Core library (`useState`, `useEffect`).
- **React Icons**: For the arrows, WhatsApp logo, and card icons.
  - `npm install react-icons`
- **Tailwind CSS**: For all styling classes.
- **@fontsource/poppins**: For the specific typography used.
  - `npm install @fontsource/poppins`

---

## 3. Code Breakdown

### A. Imports
```javascript
import React, { useState, useEffect } from "react";
// Icons used in the slider and cards
import { FaChevronLeft, FaChevronRight, FaWhatsapp, FaArrowRight, FaPlus, FaClipboardList, FaClock } from "react-icons/fa";
// Typography
import "@fontsource/poppins";
```

### B. State Management
The component allows React to "remember" two things:
1. **`currentSlide`**: An integer (0, 1, or 2) tracking which slide is active.
2. **`isLoaded`**: A boolean (`true/false`) that triggers the initial animation after the component mounts.

### C. The Slider Logic
The auto-play feature is handled by `useEffect`:
```javascript
useEffect(() => {
  setIsLoaded(true); // Tells the component it's ready to animate
  const interval = setInterval(() => {
    // Logic: If at last slide, go to 0; otherwise, add 1.
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, 6000); // 6000ms = 6 seconds
  return () => clearInterval(interval); // Cleanup to prevent memory leaks
}, [slides.length]);
```

---

## 4. Visual & Styling Techniques (Tailwind CSS)

### A. The Fade Effect
Instead of sliding images left/right, this component stacks them on top of each other and changes their **Opacity**.

- **Container**: `relative h-[550px]` (Sets the stage)
- **Slide**: `absolute top-0 left-0 w-full h-full` (Stacks them all in the same spot)
- **Transition**: 
  - Active Slide: `opacity-100 z-10` (Visible, on top)
  - Inactive Slide: `opacity-0 z-0` (Invisible, underneath)
  - Class: `transition-opacity duration-1000` (Takes 1 second to fade)

### B. Staggered Text Animation
The text elements use standard CSS transforms that reset when the slide becomes active.

- **Initial State (Hidden)**: `translate-y-20 opacity-0` (Pushed down 20px and invisible)
- **Active State (Visible)**: `translate-y-0 opacity-100` (Back to normal position and visible)
- **Delays**:
  - Title: `delay-1000` (Waits 1s)
  - Description: `delay-[1200ms]` (Waits 1.2s)
  - Buttons: `delay-[1400ms]` (Waits 1.4s)

### C. The "Get Appointment" Button Hover
This uses a cool clipping trick:
- The pink background is actually **two separate spans** hidden off-screen.
- When you hover the parent (`group-hover`), they slide in from the left and right to meet in the middle.
- Logic: `group-hover:-translate-x-full` and `group-hover:translate-x-full`.

### D. The Bottom Cards (Negative Margin)
The row of 3 cards sits *on top* of the slider bottom edge.
- Code: `-mt-[140px]`
- This pulls the grid up by 140 pixels, creating the overlap effect.
- `relative z-40`: Ensures they sit physically above the slider images (z-index).

---

## 5. Customization Guide

### How to change the slides?
Look for the `const slides = [...]` array variables near the top of the component.
- **Text**: Edit `title` or `description` fields. Note that `title` uses JSX `(<> ... </>)` to support line breaks `<br />` and colors.
- **Images**: Change the `image` URL property.
- **Timing**: Change `6000` in the `useEffect` to your desired milliseconds (e.g., `3000` for 3 seconds).

### How to change colors?
- **Pink Accent**: Search and replace `#be127e`.
- **Dark Blue/Green Text**: Search and replace `#003b46`.
- **Card Backgrounds**: The cards currently use specific hex codes like `bg-[#8e0c60]`.

### How to make it mobile responsive?
Tailwind handles this with the `md:` prefix.
- `text-3xl md:text-[38px]`: Font is 3xl on mobile, 38px on desktop.
- `px-4 md:px-[150px]`: Side padding is small on mobile, huge on desktop.
- `hidden md:block`: The navigation arrows are hidden on mobile phones to save space.
