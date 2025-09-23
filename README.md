# Bootstrap Layouts and Components Lab - Overview

## What This Lab Teaches

Transform an unstyled HTML website into a fully responsive, professional web application using Bootstrap 5. Learn Bootstrap's grid system, components, and utilities through hands-on practice.

## Learning Method

**Progressive Discovery Approach:**
1. **Guided Learning**: Copy provided Bootstrap code snippets
2. **Fill-in-the-Blanks**: Complete gaps marked with `****`
3. **Pattern Recognition**: Apply learned patterns independently

## Lab Structure

```
lab/
├── index.html          # Main HTML file with exercise comments and plain HTML to transform
├── README.md           # Detailed step-by-step instructions and Bootstrap concepts
├── package.json        # Dependencies and npm scripts
├── js/
│   └── main.js         # Basic JavaScript functionality
├── scripts/
│   └── test-filter.js  # Custom test runner
└── test/
    ├── bootstrap-exercises.test.js  # Automated tests for each exercise
    └── test-helper.js              # Test utilities
```

## Quick Start

```bash
git clone https://github.com/onja-org/w2_bootstrap_layouts_and_components
cd w2_bootstrap_layouts_and_components/lab
cd lab
npm install
npm run serve
npm test
```

## 8 Exercises Overview

1. **Navigation Bar** - Responsive navbar with mobile menu
2. **Hero Section** - Large header with call-to-action buttons
3. **Grid Layout** - Three-column responsive grid
4. **Cards** - Content containers with headers and actions
5. **Forms** - Contact form with Bootstrap styling
6. **Buttons & Components** - Various button styles and progress bars
7. **Alerts** - User feedback messages
8. **Footer** - Multi-column responsive footer

## Key Bootstrap Concepts

### Grid System
```html
<div class="container">
  <div class="row">
    <div class="col-md-4">1/3 width</div>
    <div class="col-md-8">2/3 width</div>
  </div>
</div>
```

### Color System
- `primary` (blue), `success` (green), `warning` (yellow)
- `danger` (red), `info` (cyan), `secondary` (gray)
- Works across all components: `btn-primary`, `alert-success`, `bg-warning`

### Component Pattern
- Base class: `.btn`, `.card`, `.alert`
- Variant: `.btn-primary`, `.card-header`
- Modifier: `.btn-lg`, `.alert-dismissible`

## What You'll Build

A complete "Community Connection Hub" website featuring:
- Responsive navigation
- Hero section with buttons
- Three-column value proposition
- Feature cards
- Contact form
- Interactive alerts
- Professional footer

All fully responsive and mobile-friendly using Bootstrap classes.
