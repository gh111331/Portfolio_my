# Yuchen Huang portfolio

A lightweight, static portfolio made with semantic HTML, CSS, and browser JavaScript. It has no runtime dependencies or build step; shared layouts and editable content live in `assets/app.js` and `assets/styles.css`.

The page shells use relative base URLs and the shared script derives the site root from them. This supports both root hosting and GitHub Pages project URLs such as `https://username.github.io/repository/`.

## Preview locally

From the project folder, run:

```sh
python -m http.server 8000
```

Open `http://localhost:8000/`. The static server serves the home page, `/cv/`, and each page in `/projects/` directly.

## Update content

- Edit the project records near the top of `assets/app.js` to update project facts, descriptions, tools, process, or recognition.
- Update the CV sections in `cvPage()` in `assets/app.js`.
- Project cover images live in `assets/`; update each project's `coverPath` and descriptive `coverAlt` fields when changing them.
- Serenity and Star Thief demo videos are stored in `assets/` and embedded by each project's `videoPath` in `assets/app.js`.
- Edit a project's `links` array to update its external game or store link.
- Replace `assets/resume_Yuchen_H_AI.pdf` when the resume changes; the CV download links already point to it.
- Update the contact email in `assets/app.js` if Yuchen prefers a different address.

The CV and project details were transcribed from the provided one-page resume. The supplied cover images, Serenity and Star Thief demos, and game/store links are included. Additional screenshots and expanded case-study material remain available to add.
