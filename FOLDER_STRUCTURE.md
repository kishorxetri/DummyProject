# Project Folder Structure

This document describes the organized folder structure of the project.

## Directory Structure

```
src/
├── components/
│   ├── layout/              # Layout components (Header, Footer)
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   │
│   ├── sections/            # Home page sections and reusable sections
│   │   ├── Hero.jsx
│   │   ├── WhoWeAre.jsx
│   │   ├── CTASection.jsx
│   │   ├── ReadyToHelp.jsx
│   │   ├── Stats.jsx
│   │   ├── Services.jsx
│   │   ├── HygieneSection.jsx
│   │   ├── FacilitiesGallery.jsx
│   │   ├── KeyServices.jsx
│   │   ├── Packages.jsx
│   │   ├── Specialists.jsx
│   │   ├── Updates.jsx
│   │   ├── BlogArticleGrid.jsx
│   │   ├── ClientLogos.jsx
│   │   ├── AppointmentSection.jsx
│   │   ├── MapLocation.jsx
│   │   └── Newsletter.jsx
│   │
│   ├── shared/              # Shared components used across pages
│   │   └── ContactInfoCards.jsx
│   │
│   └── ui/                  # Reusable UI components (buttons, cards, etc.)
│       └── (empty - ready for future UI components)
│
├── pages/
│   ├── Home/                # Home page
│   │   └── index.jsx
│   ├── ChairmanMessage.jsx
│   ├── Blogs.jsx
│   └── ContactUs.jsx
│
├── assets/                  # Static assets (images, fonts, etc.)
├── App.jsx                  # Main app component with routing
├── main.jsx                 # Entry point
└── index.css                # Global styles
```

## Component Categories

### 1. Layout Components (`components/layout/`)
Components that define the overall layout structure of the application:
- **Header.jsx** - Navigation header with menu
- **Footer.jsx** - Footer with links and information

### 2. Section Components (`components/sections/`)
Reusable sections that can be used across different pages:
- All home page sections (Hero, Stats, Services, etc.)
- Blog and article sections
- Newsletter and appointment sections

### 3. Shared Components (`components/shared/`)
Components that are shared across multiple pages but don't fit into layout or sections:
- **ContactInfoCards.jsx** - Contact information cards

### 4. UI Components (`components/ui/`)
Reusable UI elements like buttons, cards, inputs, etc.
- Currently empty, ready for future components

### 5. Pages (`pages/`)
Full page components that combine multiple sections:
- **Home/** - Home page with all sections
- **ChairmanMessage.jsx** - Chairman message page
- **Blogs.jsx** - Blogs listing page
- **ContactUs.jsx** - Contact page with form

## Import Examples

### Importing Layout Components
```javascript
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
```

### Importing Section Components
```javascript
import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
```

### Importing Shared Components
```javascript
import ContactInfoCards from '../components/shared/ContactInfoCards';
```

### Importing Pages
```javascript
import HomePage from './pages/Home';
import ChairmanMessage from './pages/ChairmanMessage';
```

## Benefits of This Structure

1. **Clear Organization** - Easy to find components based on their purpose
2. **Scalability** - Easy to add new components in appropriate folders
3. **Maintainability** - Clear separation of concerns
4. **Reusability** - Shared components can be easily reused across pages
5. **Clean Imports** - Organized import statements that are easy to understand

## Future Additions

The `components/ui/` folder is ready for reusable UI components such as:
- Buttons
- Cards
- Inputs
- Modals
- Tooltips
- etc.
