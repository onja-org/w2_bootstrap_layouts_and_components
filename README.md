# Bootstrap Layouts and Components Lab 🏗️

Welcome to the Community Connection Hub! In this hands-on lab, you'll learn Bootstrap 5 by rebuilding an unstyled website step-by-step with Bootstrap.

## 👢 What is Bootstrap?

Bootstrap provides ready-made CSS classes which help you create a consistent user interface across different devices and screen sizes without having to write custom CSS.

## 🎯 Learning Objectives

We are going to take a basic HTML webpage and transform it into a fully responsive, mobile-first web application using Bootstrap. You will learn how to use Bootstrap's grid system, components, and utilities to create a visually appealing and functional layout.

By completing this lab, you will:
- Understand how to include Bootstrap in a project
- Master Bootstrap's grid system for responsive layouts
- Implement common Bootstrap components (navbar, cards, forms, buttons, alerts)
- Create a mobile-first, responsive web application
- Practice semantic HTML structure with Bootstrap classes
- Learn to recognize and apply Bootstrap class patterns

## 🚀 Getting Started

### Prerequisites
- Basic knowledge of HTML and CSS
- Node.js installed on your machine
- A text editor or IDE

### Setup
1. Clone or download this repository
    ```bash
    git clone [TODO: REPLACE WITH ACTUAL REPOSITORY URL ONCE IT IS HOSTED IN THE ONJA ORGANIZATION]
    ```
2. Navigate to the project directory
    ```bash
    cd w2_bootstrap_layouts_and_components
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run serve
    ```
5. Open your browser to `http://localhost:3000`

You now have the basic website up and running. Check out the website in your browser -- it is pretty boring at the moment! We will see it transform as you complete the exercises.

### Running Tests
To check your progress and ensure you're completing exercises correctly:
```bash
npm test
```

For continuous testing while you work:
```bash
npm run test:watch
```



## 📚 Understanding Bootstrap Integration

Including Bootstrap in your project is easy!
Bootstrap is included by adding a `link` and a `script` tag so that the library is downloaded and included in your website. Look at the `<head>` section of `index.html`:

```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Bootstrap JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></script>
```

This has already been done in this project -- Bootstrap classes and components are ready to use in your HTML!

This direct linking method is quick and easy for learning. In real projects, you might want to install Bootstrap using other methods, but you don't need to worry about that at the moment.

## 🧩 How This Lab Works

As you progress through the exercises, you'll notice three types of learning:

1. **🎯 Guided Code**: Read through the provided Bootstrap code snippets in the comments for each exercise, and then copy it to replace the plain HTML
2. **🔍 Fill-in-the-Blanks**: Strategic gaps in the provided code marked with `****` for you to figure out
3. **💡 Pattern Recognition**: Using Bootstrap class patterns you've already learned

> Make sure that you are reading through the code in the `index.html` exercise comments as you are completing the exercises. Reading through the Bootstrap HTML is how you will learn the patterns and how to use the classes. Just pasting it without reading it will not help you learn!

> Each exercise in the readme contains information about the Bootstrap classes being used. These classes are the foundation of styling with Bootstrap, and it is the purpose of this lab to familiarize you with them.

### Bootstrap Classes Cheat Sheet

Keep this handy as you work through the exercises:

**Color Classes:**
- `bg-primary` (blue), `bg-success` (green), `bg-warning` (yellow), `bg-danger` (red), `bg-info` (cyan), `bg-secondary` (gray), `bg-light` (light gray), `bg-dark` (dark)
- `text-primary`, `text-success`, `text-warning`, `text-danger`, `text-info`, `text-secondary`, `text-light`, `text-dark`, `text-white`, `text-muted`

**Button Classes:**
- `btn-primary`, `btn-success`, `btn-warning`, `btn-danger`, `btn-info`, `btn-secondary`, `btn-light`, `btn-dark`
- `btn-outline-primary`, `btn-outline-success`, etc.
- `btn-lg` (large), `btn-sm` (small)

**Alert Classes:**
- `alert-primary`, `alert-success`, `alert-warning`, `alert-danger`, `alert-info`, `alert-secondary`

**Column Classes:**
- `col-12` (full width), `col-6` (half width), `col-4` (one third), `col-3` (one quarter)
- `col-md-6` (half width on medium screens+), `col-lg-4` (one third on large screens+)

---

## 📝 Exercises

### Exercise 1: Navigation Bar 🧭

**Goal:** Create a responsive navigation bar using Bootstrap's navbar component.

**What you're building:** A dark navigation bar with the brand "Community Hub" on the left and navigation links on the right. On mobile devices, the links will collapse into a hamburger menu.

**Bootstrap Concepts Introduced In This Exercise**:
- [Navbar](https://getbootstrap.com/docs/5.3/components/navbar/): Bootstrap's navigation bar component. It is the container which holds the brand, navigation links, and other elements which generally appears at the top of the page. Items such as the navbar-brand (which is used to display the brand/logo), and navbar-nav (which is used to display the navigation links) go inside of the navbar component. The navbar can be made to collapse into a hamburger menu by adding the `navbar-expand-lg` class, which requires the use of the `Collapse` component, explained below.
- [Collapse](https://getbootstrap.com/docs/5.3/components/collapse/): Bootstrap's Collapse component is used to show and hide any content. Here, we will use it to collapse the navigation links into a hamburger menu on smaller screens.
- [Container](https://getbootstrap.com/docs/5.3/layout/containers/): Bootstrap's container component is used to wrap content and provide padding.

**Step-by-step instructions:**

1. **Find the Exercise 1 comment** in `index.html` (around line 17)

2. **Replace the TODO comment** with provided navbar structure.

3. **🔍 Fill in the blanks:**
- **Hint 1:** `nav-****` - What class marks a navigation item? (Think "nav-____")

4. **Test your work:** Run `npm test` - the first 5 tests should now pass! Try opening the developer tools (press F12) and using the "Responsive Design Mode" (ctrl+shift+m when the developer tools are open) to test your navbar's responsiveness. Shrink the size of the screen and watch the hamburger menu appear.

**Bootstrap classes explained:**
- `.navbar` - Base navbar component
- `.navbar-expand-lg` - Navbar expands to full width on large screens and up
- `.navbar-dark bg-dark` - Dark color scheme
- `.container` - Centers content with responsive padding
- `.navbar-brand` - Styles the brand/logo
- `.navbar-toggler` - Mobile hamburger button
- `.navbar-collapse` - Container for collapsible content
- `.navbar-nav` - Navigation list container
- `.nav-item` - Individual navigation item
- `.nav-link` - Navigation link styling
- `.ms-auto` - Pushes navigation to the right (margin-start: auto)


---

### Exercise 2: Hero Section 🌟

**Goal:** Update the existing hero section (a hero section is a big section at the top of the page which serves as an introduction to the website) to be more visually appealing using Bootstrap classes.

**What you're building:** A large, centered hero section with a big heading, descriptive text, and call-to-action buttons.

**Bootstrap Concepts Introduced In This Exercise**:
- [Grid](https://getbootstrap.com/docs/5.3/layout/grid/): In this exercise, we only use the grid system (including rows and columns) to help us style the hero section width. We are not actually using its full power yet! In the next exercise we will learn more about the grid system and how to use it to create more complex layouts.
- [Bootstrap Utilities](https://getbootstrap.com/docs/5.3/layout/utilities/): Bootstrap provides convenient classes to add margin and padding such as `.mb-4`, which stands for "margin-bottom 4", and `py-5`, which stands for "padding in the y dimension 5". It also has useful utilities for applying classes only on certain screen sizes: when we add a breakpoint class like `.flex-sm-row`, this means that on small screens the flex direction will be vertical, but on larger screens this class will be ignored.
- [Button](https://getbootstrap.com/docs/5.3/components/buttons/): Bootstrap's button class can be used on `<button>` elements or on `<a>` elements as we are doing in this exercise.

**Step-by-step instructions:**

1. **Find the existing hero section**

2. **Replace the entire hero section** with the code provided in the comment.

3. **🔍 Fill in the blanks:**
- **Hint 1:** `justify-content-****` - What class centers flex items? (It is used earlier in the hero section on the row)

3. **Test your work:** Run `npm test` - Make sure the Hero Section tests are passing. Notice how if you make the screen smaller, the buttons will stack vertically.

**Bootstrap classes explained:**
- `.bg-primary` - Blue background color
- `.text-white` - White text color
- `.py-5` - Large padding top and bottom
- `.display-4` - Large display heading
- `.fw-bold` - Bold font weight
- `.mb-4` - Margin bottom (spacing)
- `.lead` - Larger, emphasized text
- `.row` - Row container for column items
- `.col-lg-8` - 8 columns wide on large screens
- `.text-center` - Center-aligned text
- `.d-flex` - Display as flexbox
- `.flex-column` - Stack vertically
- `.flex-sm-row` - Stack horizontally on small screens and up
- `.gap-3` - Space between flex items
- `.justify-content-center` - Center flex items
- `.btn btn-light btn-lg` - Large light button
- `.btn-outline-light` - Outlined light button

---

### Exercise 3: Main Content Grid 📐

**Goal:** Create a responsive grid layout showcasing community values.

**What you're building:** A section with a header and three columns that stack on mobile devices.

**🔍 Discovery Challenge:** In this exercise, you'll fill in some blanks based on patterns you learned in Exercise 2!

**Bootstrap Concepts Introduced In This Exercise**:
- [Grid](https://getbootstrap.com/docs/5.3/layout/grid/): Bootstrap's grid system is a responsive layout system built with flexbox. The grid does not have to be explicitly defined, you can just create a container and add rows and columns as needed.
- [Rows](https://getbootstrap.com/docs/5.3/layout/rows/): A horizontal group of columns that make up a Bootstrap grid. You can think of this as a horizontal flexbox container, with each column being a flex item (and this is how it actually works behind the scenes). Rows are created by adding the `.row` class to an element.
- [Columns](https://getbootstrap.com/docs/5.3/layout/columns/): Bootstrap's columns are the building blocks of the grid system. They are used to create horizontal groups of content. Columns are created by adding the `.col` class to an element.

**Step-by-step instructions:**

1. **Find the Exercise 3 comment**

2. **Replace the existing content** with this grid structure included in the comment.

3. **🔍 Fill in the blanks:**
- **Hint 1:** `****-muted` - What class makes text gray? (Used in Exercise 2)
- **Hint 2:** `****-md-4` - What class makes a column take 1/3 width on medium screens? (Look at the complete example)
- **Hint 3:** `****-primary` - What class gives a blue background? (Used in Exercise 2)
- **Hint 4:** `****-success` - What class gives a green background? (Check the cheat sheet)
- **Hint 5:** `****-white` - What class makes text white? (Used in Exercise 2)
- **Hint 6:** `****-bold` - What class makes text bold? (Used in Exercise 2)

4. **Test your work:** Run `npm test` - The Main Content Grid tests should now pass!


**Bootstrap classes explained:**
- `.py-5` - Padding top and bottom
- `.mb-5` - Large margin bottom
- `.col-12` - Full width column
- `.col-md-4` - 4 columns wide (1/3) on medium screens and up, full width on mobile
- `.g-4` - Gutters (space between columns)
- `.text-center` - Center-aligned text
- `.text-muted` - Gray text color
- `.rounded-circle` - Makes element circular
- `.d-inline-flex` - Inline flex display
- `.align-items-center` - Vertically center flex items
- `.justify-content-center` - Horizontally center flex items
- `.fs-2` - Font size level 2

---

### Exercise 4: Cards Section 🃏

**Goal:** Create a section with Bootstrap cards showcasing ways to get involved.

**What you're building:** Three cards in a row (stacking on mobile) with headers, content, and action buttons.

**Bootstrap Concepts Introduced in This Exercise**:
- [Cards](https://getbootstrap.com/docs/5.3/components/card/): Bootstrap's cards are helpful for displaying a series of items in a consistent way.
- [Badges](https://getbootstrap.com/docs/5.3/components/badge/): Styles badges with different colors.

**🔍 Discovery Challenge:** You'll use the color patterns you've learned to style the card headers and buttons!

**Step-by-step instructions:**

1. **Find the Exercise 4 comment**

2. **Add the cards section** found in the comment.

3. **🔍 Fill in the blanks:**
- **Hint 1:** `****-primary` - What class gives a blue background? (You used this in Exercise 3)
- **Hint 2:** `****-secondary` - What class gives a gray background? (Check the complete example)
- **Hint 3:** `****-primary` - What button class makes a blue button? (Look at the pattern)
- **Hint 4:** `****-white` - What class makes text white? (You used this multiple times)
- **Hint 5:** `****-success` - What button class makes a green button? (Follow the color pattern)
- **Hint 6:** `****-secondary` - What badge class makes a gray badge? (Same pattern as backgrounds)

4. **Test your work:** Run `npm test` - The Cards Section tests should now pass!

**Bootstrap classes explained:**
- `.bg-light` - Light gray background
- `.col-lg-4` - 4 columns wide (1/3) on large screens, full width on smaller screens
- `.card` - Bootstrap card component
- `.h-100` - Height 100% (makes all cards same height)
- `.border-0` - No border
- `.shadow-sm` - Subtle shadow
- `.card-header`, `.card-body`, `.card-footer` - Card sections
- `.card-title`, `.card-text` - Card content elements
- `.d-flex flex-column` - Vertical flexbox layout
- `.flex-grow-1` - Grows to fill available space
- `.mt-auto` - Margin top auto (pushes to bottom)
- `.badge` - Small status indicators
- `.me-2` - Margin end (right spacing)
- `.bg-transparent` - Transparent background
- `.w-100` - Width 100%

---

### Exercise 5: Forms 📝

> Forms require JavaScript to perform actions when submitted. The submit button has some JavaScript code to pretend to send the message, but you don't need to worry about it for this exercise.

**Goal:** Create a contact form using Bootstrap form components.

**What you're building:** A contact form with name, email, message fields and proper Bootstrap styling.

**🔍 Discovery Challenge:** You'll apply text color patterns and use new form classes!


**Bootstrap Concepts Introduced In This Exercise**:
- [Forms](https://getbootstrap.com/docs/5.3/forms/overview/): Bootstrap's form components provide a consistent way to style forms, including labels, inputs, selects, and checkboxes.
- [Form Control](https://getbootstrap.com/docs/5.3/forms/form-control/): The `.form-control` class is used to style input fields, and textareas.
- [Select](https://getbootstrap.com/docs/5.3/forms/select/): The `.form-select` class is used to style select dropdowns.
- [Checkboxes](https://getbootstrap.com/docs/5.3/forms/checks-radios/): The `.form-check` class is used to style checkboxes and radio buttons.

**Step-by-step instructions:**

1. **Find the Exercise 5 comment**

2. **Replace the plain HTML with the form section** found in the exercise 5 comment

3. **🔍 Fill in the blanks:**
- **Hint 1:** `****-muted` - What class makes text gray? (You've used this several times)
- **Hint 2:** `****-label` - What class styles form labels? (Think "form-____")
- **Hint 3:** `****-control` - What class styles input fields? (Think "form-____")
- **Hint 4:** `****-select` - What class styles select dropdowns? (Follow the form pattern)
- **Hint 5:** `****-check` - What class contains checkboxes? (Think "form-____")
- **Hint 6:** `****-check-input` - What class styles checkbox inputs? (Follow the pattern)
- **Hint 7:** `****-primary` - What button class makes a blue button? (You used this in Exercise 4)

4. **Test your work:** Run `npm test` - The Forms Section tests should now pass!

**Bootstrap classes explained:**
- `.form-label` - Styles form labels
- `.form-control` - Styles input fields and textareas
- `.form-select` - Styles select dropdown
- `.form-check` - Container for checkbox/radio
- `.form-check-input` - Styles checkbox/radio input
- `.form-check-label` - Styles checkbox/radio label

---

### Exercise 6: Buttons and Components 🎯

**Goal:** Create a section showcasing different Bootstrap button styles and components.

**What you're building:** A section with various button styles, progress bars, and badges.

**💡 Pattern Recognition Challenge:** Now you'll use the color patterns you've mastered to style buttons and components!

**Bootstrap Concepts Introduced In This Exercise**:
- [Progress Bars](https://getbootstrap.com/docs/5.3/components/progress/): Styles the colored part of a progress bar.

**Step-by-step instructions:**

1. **Find the Exercise 6 comment**

2. *Replace the plain HTML with the take-action section** found in the exercise 6 comment.

3. **💡 Pattern Recognition Challenge - Fill in the blanks:**
- **Challenge 1:** `****-primary`, `****-success`, `****-info` - What's the pattern for button colors?
- **Challenge 2:** `****-outline-primary`, `****-outline-warning` - What's the pattern for outline buttons?
- **Challenge 3:** `****-primary` - What's the pattern for badge colors? (Same as buttons!)
- **Challenge 4:** `****-bar` - What class creates the colored part of a progress bar?
- **Challenge 5:** `****` - What class creates the progress bar container?
- **Challenge 6:** `****-success` - What class makes a green progress bar?
- **Challenge 7:** `****-bg-primary`, `****-success`, `****-info` - What's the pattern for badge backgrounds?

4. **Test your work:** Run `npm test` - The Buttons and Components tests should now pass!

**Bootstrap classes explained:**
- `.btn-group` - Groups buttons together
- `.btn-lg` - Large button size
- `.btn-outline-*` - Outlined button variants
- `.progress` - Progress bar container
- `.progress-bar` - Progress bar element
- `.d-flex justify-content-between` - Flexbox with space between items
- `.flex-wrap` - Allows flex items to wrap
- `.gap-2` - Space between flex items
- `.fs-6` - Font size
- `.p-2` - Padding on all sides

---

### Exercise 7: Alerts and Messages 💬

> Alerts require some JavaScript to allow the user to get rid of them. You'll notice in the original HTML that the buttons have an `onclick` attribute which has some JavaScript code. Don't worry about the JavaScript part for now, just focus on the HTML structure and the CSS classes. In the Bootstrap version, you'll notice that we don't have to have an onclick attribute. The JavaScript to handle the alerts is already included in the Bootstrap library, all we have to do is add the `data-bs-dismiss="alert"` button to the correct HTML elements!

**Goal:** Add Bootstrap alerts to provide user feedback and information.

**What you're building:** Different types of alerts for various messages and notifications.

**💡 Master Challenge:** You've learned all the color patterns - now apply them to alerts!

**Bootstrap Concepts Introduced In This Exercise**:
- [Alerts](https://getbootstrap.com/docs/5.3/components/alerts/): Bootstrap alerts create a colored background for messages. They can also provide a close button and be dismissible.

**Step-by-step instructions:**

1. **Find the Exercise 7 comment**

2. **Replace the plain HTML with the alerts section** found in the exercise 7 comment.

3. **💡 Master Challenge - Fill in the blanks:**
- **Challenge 1:** `****-primary` - What alert class makes a blue alert? (Follow the color pattern!)
- **Challenge 2:** `****-heading` - What class styles alert headings? (Think "alert-____")
- **Challenge 3:** `****-success` - What alert class makes a green alert? (Same pattern as buttons!)
- **Challenge 4:** `****-close` - What class styles the close button? (Think "btn-____")
- **Challenge 5:** `****-dismissible` - What class makes alerts closeable? (Think "alert-____")
- **Challenge 6:** `data-bs-dismiss="****"` - What word goes here to dismiss alerts?
- **Challenge 7:** `****-warning` - What alert class makes a yellow alert? (You know this pattern!)

4. **Test your work:** Run `npm test` - The Alerts and Messages tests should now pass!

**Bootstrap classes explained:**
- `.alert` - Base alert component
- `.alert-primary`, `.alert-success`, `.alert-info`, `.alert-warning` - Alert color variants
- `.alert-dismissible` - Makes alert closeable
- `.fade show` - Fade animation when closing
- `.alert-heading` - Styles alert headings
- `.btn-close` - Close button for dismissible alerts
- `data-bs-dismiss="alert"` - JavaScript behavior for closing
- `role="alert"` - Accessibility attribute

---

### Exercise 8: Footer 🏁

**Goal:** Create a comprehensive footer with multiple columns and useful links.

**What you're building:** A dark footer with company info, links, and contact details in a responsive grid.

**🔍 Final Challenge:** Apply everything you've learned about colors, text, and layout!

**Step-by-step instructions:**

1. **Find the Exercise 8 comment**

2. **Add this footer section:**

3. **🔍 Final Challenge - Fill in the blanks:**
- **Challenge 1:** `****-dark`, `****-light` - What classes make a dark background with light text?
- **Challenge 2:** `****-lg-4` - What class makes a column 4 units wide on large screens?
- **Challenge 3:** `****-light` - What class makes text light colored?
- **Challenge 4:** `****-md-4` - What class makes a column 4 units wide on medium screens?
- **Challenge 5:** `****-unstyled` - What class removes default list styling? (Think "list-____")
- **Challenge 6:** `****-decoration-none` - What class removes underlines from links? (Think "text-____")
- **Challenge 7:** `****-bold` - What class makes text bold?
- **Challenge 8:** `****-2`, `****-3` - What classes add margin bottom? (Think "mb-____")
- **Challenge 9:** `****-md-6` - What class makes a column half-width on medium screens?
- **Challenge 10:** `****-md-end` - What class right-aligns content on medium screens? (Think "text-____")

4. **Test your work:** Run `npm test` - All of the tests should now be passing!

**Bootstrap classes explained:**
- `.bg-dark text-light` - Dark background with light text
- `.py-5` - Padding top and bottom
- `.mt-5` - Margin top
- `.col-lg-4`, `.col-lg-2`, `.col-md-4` - Responsive column sizes
- `.list-unstyled` - Removes default list styling
- `.text-decoration-none` - Removes underline from links
- `.my-4` - Margin top and bottom
- `.text-md-end` - Right-align text on medium screens and up
- `.me-3` - Margin end (right spacing)

---

## 🔍 Answer Key for Discovery Challenges

**Stuck on the fill-in-the-blanks?** Here are the answers:

<details>
    <summary>Exercise 1 Answers (Click to reveal)</summary>

- `nav-item` (navigation item)
</details

<details>
    <summary>Exercise 2 Answers (Click to reveal)</summary>

- `justify-content-center` (centers content)
</details

<details>
<summary>Exercise 3 Answers (Click to reveal)</summary>

- `text-muted` (gray text)
- `col-md-4` (1/3 width on medium screens)
- `bg-primary` (blue background)
- `bg-success` (green background)
- `text-white` (white text)
- `fw-bold` (bold text)

</details>

<details>
<summary>Exercise 4 Answers (Click to reveal)</summary>

- `bg-primary` (blue background)
- `bg-secondary` (gray background)
- `btn-primary` (blue button)
- `text-white` (white text)
- `btn-success` (green button)
- `bg-secondary` (gray badge)

</details>

<details>
<summary>Exercise 5 Answers (Click to reveal)</summary>

- `text-muted` (gray text)
- `form-label` (form label styling)
- `form-control` (input styling)
- `form-select` (select dropdown styling)
- `form-check` (checkbox container)
- `form-check-input` (checkbox input styling)
- `btn-primary` (blue button)

</details>

<details>
<summary>Exercise 6 Answers (Click to reveal)</summary>

- `btn-primary`, `btn-success`, `btn-info` (button colors)
- `btn-outline-primary`, `btn-outline-warning` (outline buttons)
- `bg-primary` (badge color)
- `progress-bar` (progress bar element)
- `progress` (progress container)
- `bg-success` (green progress bar)
- `badge bg-primary`, `bg-success`, `bg-info` (badge backgrounds)

</details>

<details>
<summary>Exercise 7 Answers (Click to reveal)</summary>

- `alert-primary` (blue alert)
- `alert-heading` (alert heading styling)
- `alert-success` (green alert)
- `btn-close` (close button)
- `alert-dismissible` (dismissible alert)
- `alert` (dismiss target)
- `alert-warning` (yellow alert)

</details>

<details>
<summary>Exercise 8 Answers (Click to reveal)</summary>

- `bg-dark`, `text-light` (dark background, light text)
- `col-lg-4` (4 columns on large screens)
- `text-light` (light text)
- `col-md-4` (4 columns on medium screens)
- `list-unstyled` (no list styling)
- `text-decoration-none` (no underline)
- `fw-bold` (bold text)
- `mb-2`, `mb-3` (margin bottom)
- `col-md-6` (half width on medium screens)
- `text-md-end` (right align on medium screens)

</details>

## 🎨 What You've Learned

By completing this lab, you now understand:

### 🎯 Bootstrap Patterns
- **Component Variants**: How the same color names work across buttons, alerts, badges, backgrounds, and text
- **Responsive Grid**: How `col-*` classes create flexible layouts
- **Utility Classes**: How spacing (`mb-3`), text (`text-center`), and display (`d-flex`) classes work
- **Color System**: `primary` (blue), `success` (green), `warning` (yellow), `danger` (red), `info` (cyan), `secondary` (gray)

### 🛠️ Technical Skills
- ✅ Include Bootstrap in a project via CDN
- ✅ Create responsive navigation with `.navbar` components
- ✅ Build layouts using Bootstrap's grid system (`.container`, `.row`, `.col-*`)
- ✅ Style content with utility classes (`.text-center`, `.mb-3`, `.py-5`, etc.)
- ✅ Implement cards, forms, buttons, alerts, and other components
- ✅ Make websites responsive and mobile-friendly
- ✅ Structure semantic HTML with Bootstrap classes

## 🌟 Next Steps

Now that you understand Bootstrap patterns, you can:

- Explore the [Bootstrap documentation](https://getbootstrap.com/docs/5.3/) and recognize the patterns
- Try customizing Bootstrap with your own CSS
- Build your own projects using Bootstrap

**Congratulations on completing the Bootstrap Layouts and Components lab!** 🎉
