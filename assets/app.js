const projects = [
  {
    slug: "serenity",
    title: "Serenity",
    kind: "Educational game",
    year: "2023",
    summary:
      "An educational game about stress management and relaxation, made with a team of three.",
    role: "Game designer & developer",
    period: "Jan 2023 – May 2023",
    tools: ["Unity", "C#", "GPT"],
    collaboration: "Team of 3",
    recognition:
      "Nominated for Best Video Game among second-year projects at the 2023 Creative Computing Showcase.",
    process: [
      "Collaborated with two teammates to design an educational game around stress management and relaxation activities.",
      "Implemented gameplay mechanics and player interactions in Unity and C#.",
      "Used GPT to investigate code errors and compare possible implementation approaches during development.",
    ],
    outcome:
      "The project was nominated for Best Video Game among second-year projects at the 2023 Creative Computing Showcase.",
    imageLabel: "Cover art to be added",
    coverPath: "assets/serenity-cover.png",
    coverAlt: "Serenity cover illustration with a character on a pale green background.",
    videoPath: "assets/serenity-demo.mp4",
    links: [
      { label: "Play Serenity on itch.io", href: "https://serenitygamegdp17.itch.io/serenity" },
    ],
    caseStudyNote: "Add gameplay screenshots and more case study detail when they’re ready.",
  },
  {
    slug: "star-thief",
    title: "Star Thief",
    kind: "Rhythm platformer",
    year: "2024–25",
    summary:
      "A rhythm platformer played with a MIDI keyboard, built with a team of five.",
    role: "Game designer & developer",
    period: "Jan 2024 – May 2025",
    tools: ["Unity", "C#", "MIDI input", "GPT", "Claude"],
    collaboration: "Team of 5",
    recognition:
      "Won Best Video Game at the 2025 Creative Computing Showcase.",
    process: [
      "Collaborated with four teammates on a rhythm platformer using a MIDI keyboard as a control scheme.",
      "Integrated a MIDI input detection API with Unity to capture and process real-time input for rhythm detection and gameplay.",
      "Used project documentation and testing to investigate API and code compatibility issues, then adapt an implementation to the project's Unity version.",
    ],
    outcome:
      "Won Best Video Game at the 2025 Creative Computing Showcase.",
    imageLabel: "Cover art to be added",
    coverPath: "assets/star-thief-cover.png",
    coverAlt: "Star Thief title screen with a neon city skyline and a Start prompt.",
    coverPosition: "left center",
    videoPath: "assets/star-thief-demo.mp4",
    caseStudyNote: "Add gameplay screenshots and more case study detail when they’re ready.",
  },
  {
    slug: "shopify-store-support",
    title: "Shopify store support",
    kind: "E-commerce",
    year: "2025–26",
    summary:
      "Storefront updates, browsing improvements, and issue resolution for a Shopify e-commerce site.",
    role: "Web support",
    period: "Aug 2025 – Nov 2026",
    tools: ["Shopify", "JavaScript", "GPT", "Claude"],
    collaboration: "Make Living · Full time",
    recognition: "",
    process: [
      "Developed and maintained the Shopify storefront, customizing its interface, layout, and functionality.",
      "Improved product sorting and browsing, and investigated functional issues in existing code and Shopify features.",
      "Adapted older tutorials and documentation to the current Shopify environment, then checked suggested fixes through testing and debugging.",
    ],
    outcome:
      "Work described on the resume includes storefront maintenance, product browsing improvements, and debugging. Specific measures and examples can be added when available.",
    imageLabel: "Storefront images to be added",
    coverPath: "assets/shopify-cover.png",
    coverAlt: "Screenshot of the Shopify storefront with its product banner and navigation.",
    links: [
      { label: "View the live product on Shopify", href: "https://4143fd-3.myshopify.com/" },
    ],
    caseStudyNote: "Add approved storefront screenshots and more case study detail when available.",
  },
];

const siteRoot = new URL(
  document.querySelector("base")?.getAttribute("href") ?? "./",
  window.location.href,
);
const siteBase = siteRoot.pathname.replace(/\/?$/, "/");
const routePath = window.location.pathname.startsWith(siteBase)
  ? window.location.pathname.slice(siteBase.length)
  : window.location.pathname;
const normalizedRoutePath = routePath
  .replace(/(?:^|\/)index\.html$/i, "")
  .replace(/^\/+|\/+$/g, "");
const currentPath = normalizedRoutePath ? `/${normalizedRoutePath}` : "/";
const isHome = currentPath === "/";
const siteUrl = (path) => new URL(path.replace(/^\/+/, ""), siteRoot).href;
const homeUrl = siteUrl(window.location.protocol === "file:" ? "index.html" : "");
const homeProjectsUrl = `${homeUrl}#projects`;
const currentPageUrl = new URL(window.location.href);
currentPageUrl.hash = "";
const routeMatch = currentPath.match(/^\/projects\/([^/]+)$/);
const activeProject = routeMatch
  ? projects.find((project) => project.slug === routeMatch[1])
  : undefined;

const projectHref = (slug) =>
  siteUrl(`projects/${slug}/${window.location.protocol === "file:" ? "index.html" : ""}`);
const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });

function header() {
  const onHome = isHome;
  const onCv = currentPath === "/cv";
  return `
    <header id="top" class="site-header">
      <div class="header-inner">
        <a class="wordmark" href="${homeUrl}" aria-label="Yuchen Huang, home">Y<span>H</span>.</a>
        <nav class="primary-nav" aria-label="Main navigation">
          <a href="${homeProjectsUrl}" ${onHome ? 'aria-current="page"' : ""}>Projects</a>
          <a href="${siteUrl(`cv/${window.location.protocol === "file:" ? "index.html" : ""}`)}" ${onCv ? 'aria-current="page"' : ""}>CV</a>
          <a class="nav-contact" href="mailto:yuchen.h514@gmail.com">Get in touch <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>`;
}

function footer() {
  return `
    <footer class="site-footer">
      <a class="footer-email" href="mailto:yuchen.h514@gmail.com">yuchen.h514@gmail.com <span aria-hidden="true">↗</span></a>
      <span>Designed &amp; built by Yuchen Huang</span>
      <a href="${currentPageUrl}#top">Back to top ↑</a>
    </footer>`;
}

function projectCard(project, index) {
  return `
    <article class="project-card">
      <a class="project-visual visual-${index + 1}" href="${projectHref(project.slug)}" aria-label="View ${escapeHtml(project.title)} project">
        <span class="visual-index">0${index + 1}</span>
        ${project.coverPath ? `<img class="project-card-cover" src="${siteUrl(project.coverPath)}" alt="" loading="lazy" style="object-position:${escapeHtml(project.coverPosition || "center")}" />` : `<span class="visual-mark" aria-hidden="true">${index === 0 ? "✳" : index === 1 ? "♪" : "↗"}</span><span class="visual-placeholder">${escapeHtml(project.imageLabel)}</span>`}
        <span class="visual-link" aria-hidden="true">↗</span>
      </a>
      <div class="project-card-content">
        <div class="project-card-heading">
          <div>
            <span class="eyebrow">${escapeHtml(project.kind)}</span>
            <h3><a href="${projectHref(project.slug)}">${escapeHtml(project.title)}</a></h3>
          </div>
          <span class="project-year">${escapeHtml(project.year)}</span>
        </div>
        <p>${escapeHtml(project.summary)}</p>
        <a class="text-link" href="${projectHref(project.slug)}">Explore project <span aria-hidden="true">↗</span></a>
      </div>
    </article>`;
}

function homePage() {
  document.title = "Yuchen Huang — Game & Web Developer";
  return `
    <main id="main">
      <section class="hero section-wrap" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow hero-eyebrow"><span class="status-dot" aria-hidden="true"></span> Computing graduate · Kingston, Ontario</p>
          <h1 id="hero-title">Games led me to computing<span class="period">.</span></h1>
          <p class="hero-name">Yuchen Huang</p>
          <p class="hero-tagline">I’ve been drawn to games and the ideas behind them for as long as I can remember. That early interest grew into a passion for making interactive experiences and led me to study computing.</p>
          <p class="hero-intro">Since then, I’ve worked on games of my own, assisted students as a teaching assistant in a game design class on two occasions, and gained experience supporting a local store’s Shopify website.</p>
          <p class="hero-next">I’m now looking for opportunities in software, web, or game development, where I can keep learning and contribute to thoughtful, useful experiences.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#projects">Explore my work <span aria-hidden="true">↓</span></a>
            <a class="button button-quiet" href="${siteUrl(`cv/${window.location.protocol === "file:" ? "index.html" : ""}`)}">View CV <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <aside class="hero-note" aria-label="Experience so far">
          <span class="note-label">The path so far</span>
          <ul><li>Computing studies</li><li>Independent game projects</li><li>Game design TA, twice</li><li>Shopify site support</li></ul>
          <div class="note-stamp" aria-hidden="true">YK<br />→</div>
        </aside>
      </section>

      <section class="projects-section section-wrap" id="projects" aria-labelledby="projects-heading">
        <div class="section-heading">
          <div><p class="eyebrow">Selected work · 2023—2026</p><h2 id="projects-heading">Built with curiosity<span class="period">.</span></h2></div>
          <p>Games, input systems, and thoughtful updates to the everyday web.</p>
        </div>
        <div class="project-grid">${projects.map(projectCard).join("")}</div>
      </section>

      <section class="contact-band section-wrap" aria-labelledby="contact-heading">
        <p class="eyebrow">Have a project in mind?</p>
        <div class="contact-row"><h2 id="contact-heading">Let’s make<br />something work.</h2><a class="contact-arrow" href="mailto:yuchen.h514@gmail.com" aria-label="Email Yuchen Huang">↗</a></div>
        <a class="text-link contact-link" href="mailto:yuchen.h514@gmail.com">yuchen.h514@gmail.com</a>
      </section>
    </main>`;
}

function detailPage(project) {
  document.title = `${project.title} — Projects — Yuchen Huang`;
  const otherProjects = projects.filter((item) => item.slug !== project.slug);
  const projectLinks = project.links?.length
    ? `<div class="project-resource-links" aria-label="Project links">${project.links
        .map(
          (link) => `<a class="button button-quiet" href="${escapeHtml(link.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)} <span aria-hidden="true">↗</span></a>`,
        )
        .join("")}</div>`
    : "";
  const projectArtwork = project.coverPath
    ? `<figure class="detail-artwork"><img src="${siteUrl(project.coverPath)}" alt="${escapeHtml(project.coverAlt)}" loading="lazy" /></figure>`
    : `<div class="detail-visual visual-${projects.indexOf(project) + 1}" role="img" aria-label="${escapeHtml(project.imageLabel)}"><span class="visual-index">PROJECT / ${String(projects.indexOf(project) + 1).padStart(2, "0")}</span><span class="detail-visual-mark" aria-hidden="true">${project.slug === "serenity" ? "✳" : project.slug === "star-thief" ? "♪" : "↗"}</span><span class="visual-placeholder">${escapeHtml(project.imageLabel)}</span></div>`;
  const projectMedia = project.videoPath
    ? `<section class="project-demo" aria-label="Project demonstration video"><div class="demo-heading"><p class="eyebrow">Video demonstration</p><a class="text-link" href="${siteUrl(project.videoPath)}" download>${escapeHtml(project.title)} video (MP4) <span aria-hidden="true">↓</span></a></div><video class="demo-player" controls playsinline preload="metadata" aria-label="Video demonstration of ${escapeHtml(project.title)}"><source src="${siteUrl(project.videoPath)}" type="video/mp4">Your browser does not support embedded video. <a href="${siteUrl(project.videoPath)}">Open the video file</a>.</video></section>`
    : "";
  return `
    <main id="main" class="detail-page">
      <section class="detail-hero section-wrap" aria-labelledby="project-title">
        <a class="back-link" href="${homeProjectsUrl}">← All projects</a>
        <p class="eyebrow detail-kicker">${escapeHtml(project.kind)} <span>·</span> ${escapeHtml(project.year)}</p>
        <h1 id="project-title">${escapeHtml(project.title)}<span class="period">.</span></h1>
        <p class="detail-lede">${escapeHtml(project.summary)}</p>
        <div class="project-facts">
          <div><span class="fact-label">Role</span><span>${escapeHtml(project.role)}</span></div>
          <div><span class="fact-label">Timeframe</span><span>${escapeHtml(project.period)}</span></div>
          <div><span class="fact-label">Team</span><span>${escapeHtml(project.collaboration)}</span></div>
          <div><span class="fact-label">Tools</span><span>${project.tools.map(escapeHtml).join(", ")}</span></div>
        </div>
        ${projectLinks}
        ${projectArtwork}
        ${projectMedia}
      </section>
      <section class="story section-wrap" aria-label="Project details">
        <div class="story-heading"><span class="eyebrow">The work</span><p>01 / Overview &amp; process</p></div>
        <div class="story-body">
          <h2>A closer look at<br />${escapeHtml(project.title)}.</h2>
          <p class="story-intro">${escapeHtml(project.summary)}</p>
          <h3>Process</h3>
          <ol class="process-list">${project.process.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
          <h3>Outcome</h3>
          <p>${escapeHtml(project.outcome)}</p>
          ${project.recognition ? `<div class="recognition-note"><span class="recognition-icon" aria-hidden="true">✳</span><p><span class="eyebrow">Recognition</span><br />${escapeHtml(project.recognition)}</p></div>` : ""}
          <p class="placeholder-note"><span aria-hidden="true">↗</span> ${escapeHtml(project.caseStudyNote || "Add screenshots and more case study detail when available.")}</p>
        </div>
      </section>
      <section class="more-projects section-wrap" aria-labelledby="more-projects-heading"><div class="section-heading compact"><div><p class="eyebrow">Keep exploring</p><h2 id="more-projects-heading">More projects<span class="period">.</span></h2></div><a class="text-link" href="${homeProjectsUrl}">All work <span aria-hidden="true">↗</span></a></div><div class="more-project-list">${otherProjects.map((item) => `<a class="more-project-link" href="${projectHref(item.slug)}"><span><span class="eyebrow">${escapeHtml(item.kind)} · ${escapeHtml(item.year)}</span><strong>${escapeHtml(item.title)}</strong></span><span class="more-project-arrow" aria-hidden="true">↗</span></a>`).join("")}</div></section>
    </main>`;
}

function cvPage() {
  document.title = "CV — Yuchen Huang";
  return `
    <main id="main" class="cv-page section-wrap">
      <section class="cv-intro" aria-labelledby="cv-heading">
        <p class="eyebrow">Experience · Education · Skills</p>
        <div class="cv-heading-row"><h1 id="cv-heading">The CV<span class="period">.</span></h1><a class="button button-primary download-button" href="${siteUrl("assets/resume_Yuchen_H_AI.pdf")}" download="resume_Yuchen_H_AI.pdf">Download resume <span aria-hidden="true">↓</span></a></div>
        <p class="cv-lede">A concise overview of my work across game development, web support, and computing.</p>
        <div class="cv-contact"><a href="mailto:yuchen.h514@gmail.com">yuchen.h514@gmail.com</a><span>Kingston, Ontario</span><span>English · Mandarin</span></div>
      </section>
      <section class="cv-section" aria-labelledby="experience-heading"><div class="cv-section-label"><p class="eyebrow">01</p><h2 id="experience-heading">Experience</h2></div><div class="cv-items">
        <article class="cv-item"><div class="cv-item-top"><div><h3>Web Support</h3><p class="cv-organization">Make Living · Kingston, Ontario · Full time</p></div><span class="cv-date">Aug 2025 – Nov 2026</span></div><ul><li>Develop and maintain a Shopify e-commerce site, customizing its interface, layout, and functionality.</li><li>Improve product sorting and browsing; troubleshoot functional issues in existing code and Shopify features.</li><li>Adapt older tutorials and documentation to the current Shopify environment and verify fixes through testing and debugging.</li></ul></article>
        <article class="cv-item"><div class="cv-item-top"><div><h3>Game Designer &amp; Developer</h3><p class="cv-organization">Star Thief · Queen’s University</p></div><span class="cv-date">Jan 2024 – May 2025</span></div><ul><li>Collaborated with four teammates on a rhythm platformer controlled with a MIDI keyboard.</li><li>Integrated a MIDI input detection API with Unity for real-time input, rhythm detection, and gameplay.</li><li>Won Best Video Game at the 2025 Creative Computing Showcase.</li></ul><a class="text-link cv-project-link" href="${projectHref("star-thief")}">View Star Thief <span aria-hidden="true">↗</span></a></article>
        <article class="cv-item"><div class="cv-item-top"><div><h3>Teaching Assistant in Game Design</h3><p class="cv-organization">Queen’s University · Kingston, Ontario</p></div><span class="cv-date">Jan 2024 – May 2025</span></div><ul><li>Helped students troubleshoot and debug game projects, diagnose technical issues, and work toward practical solutions.</li><li>Helped students translate game concepts into implementable systems while coordinating support with the professor, fellow TAs, and student groups.</li></ul></article>
        <article class="cv-item"><div class="cv-item-top"><div><h3>Game Designer &amp; Developer</h3><p class="cv-organization">Serenity · Queen’s University</p></div><span class="cv-date">Jan 2023 – May 2023</span></div><ul><li>Collaborated with two teammates on an educational game featuring stress-management and relaxation activities.</li><li>Implemented gameplay and interactions using Unity and C#.</li><li>Nominated for Best Video Game at the 2023 Creative Computing Showcase.</li></ul><a class="text-link cv-project-link" href="${projectHref("serenity")}">View Serenity <span aria-hidden="true">↗</span></a></article>
      </div></section>
      <section class="cv-section" aria-labelledby="education-heading"><div class="cv-section-label"><p class="eyebrow">02</p><h2 id="education-heading">Education</h2></div><div class="cv-items"><article class="cv-item education-item"><div class="cv-item-top"><div><h3>Bachelor of Computing (Honours)</h3><p class="cv-organization">Queen’s University · Kingston, Ontario</p></div><span class="cv-date">Sep 2021 – May 2025</span></div><ul><li>Cumulative GPA: 3.97</li><li>Relevant courses: Game Design (A+), Software Specifications (A+), Data Structures (A), Logic for Computer Science (A)</li></ul></article></div></section>
      <section class="cv-section" aria-labelledby="skills-heading"><div class="cv-section-label"><p class="eyebrow">03</p><h2 id="skills-heading">Skills</h2></div><div class="skill-groups"><div><h3>Programming</h3><p>Python, C#, C, JavaScript, Bash, Prolog</p></div><div><h3>Tools &amp; platforms</h3><p>Unity, Godot, Shopify, Git, GitHub, Visual Studio</p></div><div><h3>AI-assisted workflow</h3><p>GPT, Claude, LLM-assisted debugging, prompt iteration</p></div></div></section>
      <section class="cv-section cv-recognition" aria-labelledby="recognition-heading"><div class="cv-section-label"><p class="eyebrow">04</p><h2 id="recognition-heading">Recognition</h2></div><div class="cv-items recognition-items"><p><strong>2025</strong><span>Best Video Game · Creative Computing Showcase · Star Thief</span></p><p><strong>2023</strong><span>Nominated, Best Video Game · Creative Computing Showcase · Serenity</span></p><p><strong>Queen’s University Excellence Scholarship</strong></p></div></section>
      <div class="cv-bottom"><p>Want the one-page version?</p><a class="text-link" href="${siteUrl("assets/resume_Yuchen_H_AI.pdf")}" download="resume_Yuchen_H_AI.pdf">Download the resume <span aria-hidden="true">↓</span></a></div>
    </main>`;
}

function notFoundPage() {
  document.title = "Page not found — Yuchen Huang";
  return `<main id="main" class="not-found section-wrap"><p class="eyebrow">404 · Lost in the loop</p><h1>Page not found<span class="period">.</span></h1><p>That page isn’t here. Head back to the portfolio to find the projects and CV.</p><a class="button button-primary" href="${homeUrl}">Back to home <span aria-hidden="true">↗</span></a></main>`;
}

const page = currentPath === "/"
  ? homePage()
  : currentPath === "/cv"
    ? cvPage()
    : routeMatch
      ? activeProject
        ? detailPage(activeProject)
        : notFoundPage()
      : notFoundPage();

document.querySelector("#app").innerHTML = `${header()}${page}${footer()}`;
document.querySelector(".skip-link")?.setAttribute("href", `${currentPageUrl.href}#main`);
