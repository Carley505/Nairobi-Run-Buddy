# Nairobi Run Buddy

> "Your Pace. Your Goals. Never Alone on the Run."

A professional, mobile-first, single-page marketing website for **Nairobi Run Buddy**, a personal running-companionship and accountability pacer service based in Karen, Nairobi, Kenya.

This website is lightweight, static, super fast, and optimized for immediate deployment on **GitHub Pages**, **Netlify**, or **Vercel**.

---

## Features

- **Mobile-First Layout**: Fully responsive, optimized for smartphones since most traffic comes directly from WhatsApp/Instagram.
- **WhatsApp Click-to-Chat Integration**: Fully configured CTAs that open pre-filled messages on WhatsApp targeting the buddy phone number (+254 746 714789).
- **Smooth Navigation Scroll**: Navigates smoothly to section anchors with automatic offsets, preventing sticky header overlaps.
- **Scroll Spy Active Highlight**: Dynamic active underline updates on the header links as the user scrolls through page sections.
- **Modern Performance Brand**: Built with raw semantic HTML5, CSS custom properties, lightweight Javascript, Google Fonts (Montserrat & Inter), and Lucide SVG Icons.
- **SEO & Social Preview Cards**: Pre-configured title tags, description tags, and Open Graph meta properties for WhatsApp and Instagram link sharing.

---

## File Structure

```text
fitness-runner-app/
├── index.html          # Main HTML5 page structure & content
├── style.css           # Custom responsive styles & CSS design tokens
├── app.js              # Header animations, mobile menu, & scrollspy logic
├── README.md           # Documentation and maintenance guide
└── assets/
    └── images/
        ├── logo.png           # Nairobi Run Buddy brand logo
        ├── hero_runner.png    # Hero section mockup runner image
        └── running_coach.png   # About section coach portrait image
```

---

## Tech Stack

- **Markup**: HTML5 (Semantic Structure)
- **Styling**: Vanilla CSS3 (Custom Variables, CSS Grid, Flexbox, Transitions)
- **Scripting**: Vanilla JS (ES6 Core DOM Operations)
- **Iconography**: [Lucide Icons](https://lucide.dev/) (loaded via CDN)
- **Typography**: Google Fonts (Montserrat & Inter)

---

## How to Customize

This template has been built with clean, commented sections to make customization straightforward for Callistus as the business grows.

### 1. Update Session Prices
Search for the pricing section inside [index.html](file:///c:/Users/ADMIN/Desktop/CLOSET/Antigravity/fitness-runner-app/index.html) and replace the placeholder value `"___"`:
```html
<!-- Single Session Price -->
<span class="price-val">KES 2,000</span>

<!-- Monthly Package Price -->
<span class="price-val">KES 15,000</span>
```

### 2. Replace Placeholder Images
Once you have real action shots of yourself running on Karen trails, simply save your images in the `assets/images/` directory with the following names to replace them:
- `hero_runner.png`: Main hero runner photo.
- `running_coach.png`: Portrait shot of Callistus in the About section.
- `logo.png`: Main company logo.

### 3. Transition to Personal Training (Future certification)
A soft mention of structured Personal Training is currently styled in a green notice under the **Services** section. When certification is complete:
- Remove the notice bar in [index.html](file:///c:/Users/ADMIN/Desktop/CLOSET/Antigravity/fitness-runner-app/index.html).
- Duplicate one of the service cards and label it **Personal Training**, adding details for strength-and-conditioning routines.

---

## Local Development & Preview

To run the project locally and view changes in real-time, you can spin up a simple web server. 

### Using Node.js (Recommended)
If you have Node.js installed, run:
```bash
# Start a live local server on port 8080
npx http-server -p 8080 -c-1
```
Then open [http://localhost:8080](http://localhost:8080) in your web browser.

### Using Python
Alternatively, if you have Python installed, run:
```bash
python -m http.server 8080
```
Then open [http://localhost:8080](http://localhost:8080) in your web browser.

---

## Deployment

### GitHub Pages (Free)
1. Push the code to a public GitHub repository.
2. Go to the repository **Settings** tab.
3. Scroll down to **Pages** on the left menu.
4. Under **Build and deployment**, select **Deploy from a branch** and choose the `main` branch (root folder).
5. Click Save. Your website will be live in minutes under `https://yourusername.github.io/your-repo-name/`.

### Custom Domain
If you want to map a custom domain (e.g. `nairobi-runbuddy.com`), you can use free hosting providers like Netlify or Vercel, drag and drop the folder, and configure domain DNS settings accordingly.
