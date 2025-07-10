# Bootstrap Layouts and Components Lab 🏗️

Welcome to the Community Connection Hub! In this hands-on lab, you'll learn Bootstrap 5 by building a website step-by-step. We'll provide you with all the content and detailed instructions - your job is to learn how to use Bootstrap components and layouts to implement the design.

## 🎯 Learning Objectives

By completing this lab, you will:
- Understand how to include Bootstrap in a project
- Master Bootstrap's grid system for responsive layouts
- Implement common Bootstrap components (navbar, cards, forms, buttons, alerts)
- Create a mobile-first, responsive web application
- Practice semantic HTML structure with Bootstrap classes

## 🚀 Getting Started

### Prerequisites
- Basic knowledge of HTML and CSS
- Node.js installed on your machine
- A text editor or IDE

### Setup
1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run serve
   ```
5. Open your browser to `http://localhost:3000`

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

Bootstrap is already included in this project via CDN (Content Delivery Network). Look at the `<head>` section of `index.html`:

```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Bootstrap JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></script>
```

This method is quick and easy for learning. In real projects, you might install Bootstrap locally using npm.

---

## 📝 Exercises

### Exercise 1: Navigation Bar 🧭

**Goal:** Create a responsive navigation bar using Bootstrap's navbar component.

**What you're building:** A dark navigation bar with the brand "Community Hub" on the left and navigation links on the right. On mobile devices, the links will collapse into a hamburger menu.

**Step-by-step instructions:**

1. **Find the Exercise 1 comment** in `index.html` (around line 17)

2. **Replace the TODO comment** with this navbar structure:

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <!-- Brand -->
    <a class="navbar-brand" href="#">Community Hub</a>
    
    <!-- Mobile menu button -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <!-- Navigation links -->
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#connect">Connect</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

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

**Test your work:** Run `npm test` - the first 5 tests should now pass!

---

### Exercise 2: Hero Section 🌟

**Goal:** Update the existing hero section to be more visually appealing using Bootstrap classes.

**What you're building:** A large, centered hero section with a big heading, descriptive text, and call-to-action buttons.

**Step-by-step instructions:**

1. **Find the existing hero section** (around line 45 in `index.html`)

2. **Replace the entire hero section** with this enhanced version:

```html
<section class="bg-primary text-white py-5" id="home">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8 text-center">
        <h1 class="display-4 fw-bold mb-4">
          Welcome to Our Community
        </h1>
        <p class="lead mb-4">
          Building connections, spreading kindness, creating togetherness in our evolving world. 
          Join us in making a positive difference, one relationship at a time.
        </p>
        <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center">
          <a href="#connect" class="btn btn-light btn-lg">
            Join Our Community
          </a>
          <a href="#about" class="btn btn-outline-light btn-lg">
            Learn More
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Bootstrap classes explained:**
- `.bg-primary` - Blue background color
- `.text-white` - White text color
- `.py-5` - Large padding top and bottom
- `.display-4` - Large display heading
- `.fw-bold` - Bold font weight
- `.mb-4` - Margin bottom (spacing)
- `.lead` - Larger, emphasized text
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

**Step-by-step instructions:**

1. **Find the Exercise 3 comment** (around line 55 in `index.html`)

2. **Replace the existing content** with this grid structure:

```html
<section class="py-5" id="about">
  <div class="container">
    <!-- Section header -->
    <div class="row mb-5">
      <div class="col-12 text-center">
        <h2 class="display-6 fw-bold mb-3">Why Our Community Matters</h2>
        <p class="lead text-muted">
          Discover the values that make our community strong and welcoming
        </p>
      </div>
    </div>

    <!-- Three column layout -->
    <div class="row g-4">
      <div class="col-md-4">
        <div class="text-center">
          <div class="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
               style="width: 80px; height: 80px;">
            <span class="text-white fs-2">❤️</span>
          </div>
          <h4 class="fw-bold mb-3">Kindness First</h4>
          <p class="text-muted">
            We believe that small acts of kindness create ripple effects that transform 
            communities and change lives for the better.
          </p>
        </div>
      </div>
      
      <div class="col-md-4">
        <div class="text-center">
          <div class="bg-success rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
               style="width: 80px; height: 80px;">
            <span class="text-white fs-2">🤝</span>
          </div>
          <h4 class="fw-bold mb-3">Support Network</h4>
          <p class="text-muted">
            No one should face challenges alone. Our community provides support, 
            resources, and connections when you need them most.
          </p>
        </div>
      </div>
      
      <div class="col-md-4">
        <div class="text-center">
          <div class="bg-warning rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
               style="width: 80px; height: 80px;">
            <span class="text-white fs-2">🌱</span>
          </div>
          <h4 class="fw-bold mb-3">Growth Together</h4>
          <p class="text-muted">
            Learning and growing together makes us all stronger. We celebrate 
            every milestone and support each person's journey.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
```

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

**Step-by-step instructions:**

1. **Find the Exercise 4 comment** (around line 65 in `index.html`)

2. **Add this cards section:**

```html
<section class="bg-light py-5" id="connect">
  <div class="container">
    <!-- Section header -->
    <div class="row mb-5">
      <div class="col-12 text-center">
        <h2 class="display-6 fw-bold mb-3">Ways to Get Involved</h2>
        <p class="lead text-muted">
          Choose how you'd like to make a difference in our community
        </p>
      </div>
    </div>

    <!-- Cards row -->
    <div class="row g-4">
      <!-- Volunteer Card -->
      <div class="col-lg-4">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-header bg-primary text-white">
            <h5 class="card-title mb-0">Volunteer Opportunities</h5>
          </div>
          <div class="card-body d-flex flex-column">
            <p class="card-text flex-grow-1">
              Make a direct impact through our volunteer programs. From community 
              cleanup events to mentoring programs, find your perfect way to give back.
            </p>
            <div class="mt-auto">
              <span class="badge bg-secondary me-2">Flexible Schedule</span>
              <span class="badge bg-secondary">All Skills Welcome</span>
            </div>
          </div>
          <div class="card-footer bg-transparent">
            <a href="#volunteer" class="btn btn-primary w-100">Get Started</a>
          </div>
        </div>
      </div>

      <!-- Events Card -->
      <div class="col-lg-4">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-header bg-success text-white">
            <h5 class="card-title mb-0">Community Events</h5>
          </div>
          <div class="card-body d-flex flex-column">
            <p class="card-text flex-grow-1">
              Join workshops, social gatherings, and educational events. From skill-sharing 
              sessions to celebration events, there's always something happening.
            </p>
            <div class="mt-auto">
              <span class="badge bg-secondary me-2">Monthly Events</span>
              <span class="badge bg-secondary">Free to Attend</span>
            </div>
          </div>
          <div class="card-footer bg-transparent">
            <a href="#events" class="btn btn-success w-100">View Schedule</a>
          </div>
        </div>
      </div>

      <!-- Learning Card -->
      <div class="col-lg-4">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-header bg-info text-white">
            <h5 class="card-title mb-0">Learning Together</h5>
          </div>
          <div class="card-body d-flex flex-column">
            <p class="card-text flex-grow-1">
              Expand your skills through community learning programs. From technology 
              workshops to life skills sessions, we learn and grow together.
            </p>
            <div class="mt-auto">
              <span class="badge bg-secondary me-2">All Levels</span>
              <span class="badge bg-secondary">Peer Support</span>
            </div>
          </div>
          <div class="card-footer bg-transparent">
            <a href="#learning" class="btn btn-info w-100">Explore Courses</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

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

**Goal:** Create a contact form using Bootstrap form components.

**What you're building:** A contact form with name, email, message fields and proper Bootstrap styling.

**Step-by-step instructions:**

1. **Find the Exercise 5 comment** (around line 75 in `index.html`)

2. **Add this form section:**

```html
<section class="py-5" id="contact">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <!-- Section header -->
        <div class="text-center mb-5">
          <h2 class="display-6 fw-bold mb-3">Get in Touch</h2>
          <p class="lead text-muted">
            We'd love to hear from you! Send us a message and we'll get back to you soon.
          </p>
        </div>

        <!-- Contact form -->
        <div class="card border-0 shadow">
          <div class="card-body p-4">
            <form>
              <div class="row g-3">
                <!-- Name fields -->
                <div class="col-md-6">
                  <label for="firstName" class="form-label">First Name</label>
                  <input type="text" class="form-control" id="firstName" required>
                </div>
                <div class="col-md-6">
                  <label for="lastName" class="form-label">Last Name</label>
                  <input type="text" class="form-control" id="lastName" required>
                </div>

                <!-- Email field -->
                <div class="col-12">
                  <label for="email" class="form-label">Email Address</label>
                  <input type="email" class="form-control" id="email" required>
                </div>

                <!-- Subject field -->
                <div class="col-12">
                  <label for="subject" class="form-label">How did you hear about us?</label>
                  <select class="form-select" id="subject" required>
                    <option value="">Choose...</option>
                    <option value="friend">Friend or family member</option>
                    <option value="social">Social media</option>
                    <option value="search">Search engine</option>
                    <option value="event">Community event</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <!-- Message field -->
                <div class="col-12">
                  <label for="message" class="form-label">Your Message</label>
                  <textarea class="form-control" id="message" rows="4" 
                            placeholder="Tell us what's on your mind..." required></textarea>
                </div>

                <!-- Checkbox -->
                <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="newsletter">
                    <label class="form-check-label" for="newsletter">
                      I'd like to receive community updates and newsletter
                    </label>
                  </div>
                </div>

                <!-- Submit button -->
                <div class="col-12 text-center pt-3">
                  <button type="submit" class="btn btn-primary btn-lg px-5">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Bootstrap classes explained:**
- `.justify-content-center` - Centers content horizontally
- `.col-lg-8` - 8 columns wide on large screens (centered with remaining space)
- `.form-label` - Styles form labels
- `.form-control` - Styles input fields and textareas
- `.form-select` - Styles select dropdown
- `.form-check` - Container for checkbox/radio
- `.form-check-input` - Styles checkbox/radio input
- `.form-check-label` - Styles checkbox/radio label
- `.p-4` - Padding on all sides
- `.pt-3` - Padding top only
- `.px-5` - Padding left and right

---

### Exercise 6: Buttons and Components 🎯

**Goal:** Create a section showcasing different Bootstrap button styles and components.

**What you're building:** A section with various button styles, progress bars, and badges.

**Step-by-step instructions:**

1. **Find the Exercise 6 comment** (around line 85 in `index.html`)

2. **Add this components section:**

```html
<section class="bg-light py-5">
  <div class="container">
    <!-- Section header -->
    <div class="row mb-5">
      <div class="col-12 text-center">
        <h2 class="display-6 fw-bold mb-3">Take Action Today</h2>
        <p class="lead text-muted">
          Ready to get involved? Choose how you'd like to make a difference.
        </p>
      </div>
    </div>

    <!-- Button groups -->
    <div class="row g-4 mb-5">
      <div class="col-12 text-center">
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-primary btn-lg">Join Community</button>
          <button type="button" class="btn btn-success btn-lg">Start Volunteering</button>
          <button type="button" class="btn btn-info btn-lg">Learn More</button>
        </div>
      </div>
    </div>

    <!-- Different button styles -->
    <div class="row g-3 mb-5">
      <div class="col-md-3">
        <button class="btn btn-outline-primary w-100">Primary Action</button>
      </div>
      <div class="col-md-3">
        <button class="btn btn-outline-secondary w-100">Secondary</button>
      </div>
      <div class="col-md-3">
        <button class="btn btn-outline-warning w-100">Warning</button>
      </div>
      <div class="col-md-3">
        <button class="btn btn-outline-danger w-100">Important</button>
      </div>
    </div>

    <!-- Progress bars and badges -->
    <div class="row">
      <div class="col-md-6">
        <h5 class="fw-bold mb-3">Community Goals Progress</h5>
        
        <div class="mb-3">
          <div class="d-flex justify-content-between mb-1">
            <span>New Members This Month</span>
            <span class="badge bg-primary">85%</span>
          </div>
          <div class="progress">
            <div class="progress-bar bg-primary" role="progressbar" 
                 style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <div class="mb-3">
          <div class="d-flex justify-content-between mb-1">
            <span>Volunteer Hours Goal</span>
            <span class="badge bg-success">92%</span>
          </div>
          <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" 
                 style="width: 92%" aria-valuenow="92" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <h5 class="fw-bold mb-3">Community Stats</h5>
        <div class="d-flex flex-wrap gap-2">
          <span class="badge bg-primary fs-6 p-2">1,247 Active Members</span>
          <span class="badge bg-success fs-6 p-2">3,580 Volunteer Hours</span>
          <span class="badge bg-warning fs-6 p-2">156 Events This Year</span>
          <span class="badge bg-info fs-6 p-2">89% Satisfaction Rate</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

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

**Goal:** Add Bootstrap alerts to provide user feedback and information.

**What you're building:** Different types of alerts for various messages and notifications.

**Step-by-step instructions:**

1. **Find the Exercise 7 comment** (around line 95 in `index.html`)

2. **Add this alerts section:**

```html
<section class="py-5">
  <div class="container">
    <!-- Section header -->
    <div class="row mb-4">
      <div class="col-12 text-center">
        <h2 class="display-6 fw-bold mb-3">Community Updates</h2>
        <p class="lead text-muted">
          Stay informed with the latest news and important information.
        </p>
      </div>
    </div>

    <!-- Alerts -->
    <div class="row">
      <div class="col-12">
        
        <!-- Welcome alert -->
        <div class="alert alert-primary alert-dismissible fade show" role="alert">
          <h4 class="alert-heading">Welcome to Our Community! 🎉</h4>
          <p class="mb-0">
            Thank you for joining us in building a stronger, more connected community. 
            Your participation makes a real difference in the lives of others.
          </p>
          <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>

        <!-- Success alert -->
        <div class="alert alert-success alert-dismissible fade show" role="alert">
          <h4 class="alert-heading">Community Garden Success! 🌱</h4>
          <p>
            Thanks to our amazing volunteers, we've successfully completed our community garden project. 
            Over 50 families now have access to fresh, locally-grown produce.
          </p>
          <hr>
          <p class="mb-0">
            <strong>Impact:</strong> 500+ pounds of fresh vegetables donated to local food banks.
          </p>
          <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>

        <!-- Info alert -->
        <div class="alert alert-info alert-dismissible fade show" role="alert">
          <h4 class="alert-heading">Upcoming Events 📅</h4>
          <p class="mb-2">Don't miss these exciting community events this month:</p>
          <ul class="mb-0">
            <li><strong>March 15:</strong> Community Cleanup Day - Central Park</li>
            <li><strong>March 22:</strong> Skills Workshop - Digital Literacy</li>
            <li><strong>March 29:</strong> Community Potluck & Celebration</li>
          </ul>
          <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>

        <!-- Warning alert -->
        <div class="alert alert-warning" role="alert">
          <h4 class="alert-heading">Important Notice ⚠️</h4>
          <p class="mb-0">
            Our community center will be closed for maintenance on March 10-12. 
            All scheduled activities will be moved to alternative locations. 
            Contact us at <strong>info@communityhub.org</strong> for details.
          </p>
        </div>

      </div>
    </div>
  </div>
</section>
```

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

**Step-by-step instructions:**

1. **Find the Exercise 8 comment** (around line 105 in `index.html`)

2. **Add this footer section:**

```html
<footer class="bg-dark text-light py-5 mt-5">
  <div class="container">
    <div class="row g-4">
      
      <!-- About section -->
      <div class="col-lg-4">
        <h5 class="fw-bold mb-3">Community Hub</h5>
        <p class="mb-3">
          Building bridges of connection, kindness, and support in our evolving world. 
          Together, we create positive change one relationship at a time.
        </p>
        <div class="d-flex gap-3">
          <a href="#" class="text-light">Facebook</a>
          <a href="#" class="text-light">Twitter</a>
          <a href="#" class="text-light">Instagram</a>
        </div>
      </div>

      <!-- Quick links -->
      <div class="col-lg-2 col-md-4">
        <h6 class="fw-bold mb-3">Quick Links</h6>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="#home" class="text-light text-decoration-none">Home</a></li>
          <li class="mb-2"><a href="#about" class="text-light text-decoration-none">About</a></li>
          <li class="mb-2"><a href="#connect" class="text-light text-decoration-none">Get Involved</a></li>
          <li class="mb-2"><a href="#contact" class="text-light text-decoration-none">Contact</a></li>
        </ul>
      </div>

      <!-- Programs -->
      <div class="col-lg-2 col-md-4">
        <h6 class="fw-bold mb-3">Programs</h6>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="#" class="text-light text-decoration-none">Volunteering</a></li>
          <li class="mb-2"><a href="#" class="text-light text-decoration-none">Events</a></li>
          <li class="mb-2"><a href="#" class="text-light text-decoration-none">Learning</a></li>
          <li class="mb-2"><a href="#" class="text-light text-decoration-none">Support</a></li>
        </ul>
      </div>

      <!-- Contact info -->
      <div class="col-lg-4 col-md-4">
        <h6 class="fw-bold mb-3">Contact Us</h6>
        <div class="mb-2">
          <strong>Address:</strong><br>
          123 Community Street<br>
          Kindness City, KC 12345
        </div>
        <div class="mb-2">
          <strong>Phone:</strong> (555) 123-4567
        </div>
        <div class="mb-2">
          <strong>Email:</strong> hello@communityhub.org
        </div>
        <div>
          <strong>Hours:</strong><br>
          Mon-Fri: 9AM-6PM<br>
          Sat-Sun: 10AM-4PM
        </div>
      </div>

    </div>

    <!-- Bottom section -->
    <hr class="my-4">
    <div class="row">
      <div class="col-md-6">
        <p class="mb-0">&copy; 2024 Community Hub. Made with ❤️ for our community.</p>
      </div>
      <div class="col-md-6 text-md-end">
        <a href="#" class="text-light text-decoration-none me-3">Privacy Policy</a>
        <a href="#" class="text-light text-decoration-none">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
```

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

## 🧪 Testing Your Progress

After completing each exercise, run the tests to check your work:

```bash
npm test
```

The tests will tell you:
- ✅ Which exercises you've completed correctly
- ❌ What still needs to be fixed
- 📊 Your overall progress

**Don't worry if you don't pass all tests immediately** - use the feedback to improve your code!

## 🎨 Customization

Once you've completed all exercises, try these enhancements:

1. **Change colors** - Modify the Bootstrap color classes (`.bg-primary` to `.bg-success`, etc.)
2. **Adjust spacing** - Try different padding/margin classes (`.py-3` instead of `.py-5`)
3. **Add content** - Include your own text and information
4. **Experiment with layouts** - Try different column combinations in the grid

## 🔧 Troubleshooting

**Common issues and solutions:**

1. **Content looks unstyled** 
   - Check that Bootstrap CSS is loaded in the `<head>`
   - Verify class names are spelled correctly

2. **Layout doesn't look right**
   - Make sure you're using the grid system properly (`.container` > `.row` > `.col-*`)
   - Check that you have the right column classes

3. **Tests failing**
   - Read the test output carefully - it tells you exactly what's missing
   - Make sure you're using the exact class names from the instructions

4. **Mobile view problems**
   - Test your site at different screen sizes
   - Bootstrap is mobile-first, so start with mobile and work up

## 📚 What You've Learned

By completing this lab, you now know how to:

- ✅ Include Bootstrap in a project via CDN
- ✅ Create responsive navigation with `.navbar` components
- ✅ Build layouts using Bootstrap's grid system (`.container`, `.row`, `.col-*`)
- ✅ Style content with utility classes (`.text-center`, `.mb-3`, `.py-5`, etc.)
- ✅ Implement cards, forms, buttons, alerts, and other components
- ✅ Make websites responsive and mobile-friendly
- ✅ Structure semantic HTML with Bootstrap classes

## 🌟 Next Steps

Now that you understand Bootstrap basics, you can:

- Explore the [Bootstrap documentation](https://getbootstrap.com/docs/5.3/) for more components
- Try customizing Bootstrap with your own CSS
- Build your own projects using Bootstrap
- Learn about CSS frameworks like Tailwind or Bulma

**Congratulations on completing the Bootstrap lab!** 🎉

You've built a complete, responsive website and learned the fundamentals of CSS frameworks. These skills will help you build beautiful, professional websites quickly and efficiently.