# Yuchen Huang portfolio

A lightweight, static portfolio made with semantic HTML, CSS, and browser JavaScript. It has no runtime dependencies or build step; shared layouts and editable content live in `assets/app.js` and `assets/styles.css`.

## Preview locally

From the project folder, run:

```sh
python -m http.server 8000
```

Open `http://localhost:8000/`. The static server serves the home page, `/cv/`, and each page in `/projects/` directly.

## Update content

- Edit the project records near the top of `assets/app.js` to update project facts, descriptions, tools, process, or recognition.
- Update the CV sections in `cvPage()` in `assets/app.js`.
- Replace the labeled illustration panels with approved project screenshots or media when available. Add descriptive alt text when doing so.
- Replace `assets/resume_Yuchen_H_AI.pdf` when the resume changes; the CV download links already point to it.
- Update the contact email in `assets/app.js` if Yuchen prefers a different address.

The CV and project details were transcribed from the provided one-page resume. Project imagery, external demos, and expanded case-study material were not included with that source and are identified on the site as items to add.
