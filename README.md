# Rahul Moganati — Cloud & DevOps Engineer Portfolio

A modern, responsive, performance-optimized personal portfolio website built with HTML5, CSS3, and Vanilla JavaScript. Designed specifically for a Cloud & DevOps Engineer profile, showcasing AWS architectures, Terraform automation, CI/CD pipelines, and systems administration skills.

---

## 📁 Project Directory Structure

```text
rahul-portfolio/
│
├── index.html                   # Main semantic HTML5 webpage with OpenGraph & SEO tags
├── style.css                    # Modern CSS3 stylesheet (variables, responsive grids, dark cyber theme)
├── script.js                    # Interactive JS (Scrollspy, mobile drawer, resume modal, copy-to-clipboard)
├── README.md                    # Project documentation & deployment guide
│
└── assets/
    ├── images/
    │   └── profile.jpg          # Rahul's official profile photograph (circular glowing avatar)
    └── resume/
        └── Rahul_Resume.pdf     # Official 2-page Resume (interactive modal viewer & download)
```

---

## 🚀 Key Features

* **Real Profile Photo & Resume Integration:** Seamlessly integrated profile picture and resume with built-in modal viewer + instant download.
* **Modern Dark Cyber Theme:** Designed with a deep navy/slate backdrop (`#060b13`), glowing cyan highlights (`#38bdf8`), and smooth card hover animations.
* **Accurate Resume Alignment:** Fully harmonized with Rahul's real qualifications, internships (VCube Software Solutions & AICTE/ExcelR), education (Ramachandra College of Engineering / JNTUK), and certifications.
* **Architecture Diagrams:** High-quality SVG visualizations representing 3-Tier AWS Architecture, Web Deployments, and End-to-End CI/CD workflows.
* **One-Click Email Copy:** Visitors can click to copy email directly to their clipboard with interactive toast notification.
* **Mobile-First Responsive Design:** Fully tested across desktop, tablet, and mobile viewports with an accessible hamburger menu.

---

## 💻 How to Run Locally

You can preview the portfolio using any local web server:

### Option 1: Python HTTP Server
```bash
# Navigate to the portfolio directory
cd "C:\Users\kadali bharat\.gemini\antigravity\scratch\rahul-portfolio"

# Start the server
python -m http.server 8000
```
Open `http://localhost:8000` in your web browser.

### Option 2: VS Code Live Server
1. Open the `rahul-portfolio` folder in Visual Studio Code.
2. Right-click on `index.html` and select **"Open with Live Server"**.

---

## 🌐 Free Deployment Options

### 1. GitHub Pages (Recommended)
1. Initialize a git repository and commit the files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Rahul Moganati portfolio"
   ```
2. Create a repository on GitHub (e.g., `rahul-portfolio` or `rahulmoganati.github.io`).
3. Push to GitHub and enable **GitHub Pages** under `Settings > Pages > Branch: main / root`.

### 2. AWS S3 + CloudFront (DevOps Best Practice)
1. Create an S3 bucket configured for Static Website Hosting.
2. Upload the `index.html`, `style.css`, `script.js`, and `assets/` directory.
3. Configure AWS CloudFront distribution for HTTPS and global CDN caching.
