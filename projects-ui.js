(function () {
  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function isPlaceholderLink(url) {
    return !url || url === "#" || url === "";
  }

  function getCardOverview(project) {
    return (
      project.overview ||
      (project.caseStudy && project.caseStudy.hook && project.caseStudy.hook.pitch) ||
      project.description ||
      ""
    );
  }

  function getProjectGallery(project) {
    if (Array.isArray(project.gallery) && project.gallery.length > 0) {
      return project.gallery;
    }
    return project.thumbnail ? [project.thumbnail] : [];
  }

  function renderCubeProjectPreview(project) {
    const overview = getCardOverview(project);
    const hasCaseStudy = Boolean(project.caseStudy && project.links && project.links.caseStudy);
    const tags = (project.tags || [])
      .map((tag) => `<span class="project-tag">${escapeHtml(tag)}</span>`)
      .join("");

    const detailsButton = hasCaseStudy
      ? `<button type="button" class="cube-preview-details-btn" data-cube-open-case-study="${escapeHtml(project.slug)}">View details<span class="material-symbols-outlined text-[17px]">arrow_forward</span></button>`
      : "";

    return `
      <div class="cube-project-preview">
        <div class="cube-project-preview-media">
          ${renderProjectThumb(project)}
        </div>
        <div class="cube-project-preview-body">
          <p class="font-mono-label text-[9px] uppercase tracking-wider text-primary mb-1">${escapeHtml(project.role)}</p>
          <h3 class="cube-project-preview-title">${escapeHtml(project.title)}</h3>
          <p class="cube-project-preview-overview text-on-surface-variant">${escapeHtml(overview)}</p>
          <div class="cube-project-preview-tags flex flex-wrap gap-1">${tags}</div>
          ${detailsButton}
        </div>
      </div>
    `;
  }

  function renderProjectThumb(project) {
    const images = getProjectGallery(project);
    if (!images.length) {
      return `<div class="project-thumb project-thumb--empty" aria-hidden="true"></div>`;
    }
    if (images.length === 1) {
      return `<img class="project-thumb" src="${escapeHtml(images[0])}" alt="${escapeHtml(project.title)}" loading="lazy" />`;
    }
    const imgs = images
      .map(
        (src, index) =>
          `<img class="project-thumb-img ${index === 0 ? "is-active" : ""}" src="${escapeHtml(src)}" alt="${escapeHtml(project.title)} screenshot ${index + 1}" loading="${index === 0 ? "lazy" : "lazy"}" />`
      )
      .join("");
    return `<div class="project-thumb-slider" data-thumb-slider data-interval="3500">${imgs}</div>`;
  }

  function renderGallerySlide(src, index, projectTitle) {
    return `
      <div class="case-study-gallery-frame">
        <img src="${escapeHtml(src)}" alt="${escapeHtml(projectTitle)} screenshot ${index + 1}" loading="lazy" />
      </div>
    `;
  }

  function projectCardTemplate(project) {
    const demo = project.links && project.links.demo;
    const repo = project.links && project.links.repo;
    const hasCaseStudy = Boolean(project.caseStudy && project.links && project.links.caseStudy);
    const overview = getCardOverview(project);
    const links = [];

    if (demo && !isPlaceholderLink(demo)) {
      links.push(
        `<a href="${escapeHtml(demo)}" target="_blank" rel="noopener noreferrer" class="project-link-btn">Live Demo<span class="material-symbols-outlined text-[16px]">open_in_new</span></a>`
      );
    } else if (demo) {
      links.push(
        `<span class="project-link-btn is-disabled" title="Demo link coming soon">Live Demo<span class="material-symbols-outlined text-[16px]">open_in_new</span></span>`
      );
    }

    if (repo && !isPlaceholderLink(repo)) {
      links.push(
        `<a href="${escapeHtml(repo)}" target="_blank" rel="noopener noreferrer" class="project-link-btn">GitHub<span class="material-symbols-outlined text-[16px]">code</span></a>`
      );
    } else if (repo !== undefined) {
      links.push(
        `<span class="project-link-btn is-disabled" title="Repository link coming soon">GitHub<span class="material-symbols-outlined text-[16px]">code</span></span>`
      );
    }

    if (hasCaseStudy) {
      links.push(
        `<button type="button" class="project-link-btn" data-case-study="${escapeHtml(project.slug)}">View details<span class="material-symbols-outlined text-[16px]">arrow_forward</span></button>`
      );
    }

    const interactiveClass = hasCaseStudy ? " project-card--interactive" : "";
    const openAttr = hasCaseStudy
      ? ` data-open-case-study="${escapeHtml(project.slug)}" tabindex="0" role="button" aria-label="Open ${escapeHtml(project.title)} details"`
      : "";

    return `
      <article id="project-${escapeHtml(project.slug)}" class="project-card scroll-mt-28${interactiveClass}"${openAttr}>
        <div class="project-card-media">
          ${renderProjectThumb(project)}
        </div>
        <div class="project-card-content p-6 flex flex-col gap-4 h-full">
          <div class="project-card-body">
            <div class="font-mono-label text-xs uppercase tracking-wider text-primary mb-2">${escapeHtml(project.role)}</div>
            <h2 class="text-2xl font-bold tracking-tight mb-3">${escapeHtml(project.title)}</h2>
            <p class="text-on-surface-variant text-sm leading-relaxed">${escapeHtml(overview)}</p>
            ${hasCaseStudy ? '<p class="project-card-hint font-mono-label text-[10px] uppercase tracking-wider text-primary/80 mt-3">Click card for full case study</p>' : ""}
          </div>
          <div class="flex flex-wrap gap-2">
            ${project.tags.map((tag) => `<span class="project-tag">${escapeHtml(tag)}</span>`).join("")}
          </div>
          <div class="flex flex-wrap gap-3 pt-2 mt-auto project-card-links">
            ${links.join("")}
          </div>
        </div>
      </article>
    `;
  }

  function renderResolutionBlock(resolution) {
    if (!resolution) return "";
    const bullets = (resolution.bullets || [])
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join("");
    const codeBlock = resolution.code
      ? `<pre class="case-study-code"><code>${escapeHtml(resolution.code)}</code></pre>`
      : "";

    return `
      ${resolution.intro ? `<p class="case-study-text">${escapeHtml(resolution.intro)}</p>` : ""}
      ${bullets ? `<ul class="case-study-list">${bullets}</ul>` : ""}
      ${codeBlock}
      ${resolution.result ? `<p class="case-study-result">${escapeHtml(resolution.result)}</p>` : ""}
    `;
  }

  function renderCarouselSlides(slides, slideClass) {
    return slides
      .map(
        (slideHtml, index) =>
          `<div class="case-study-carousel-slide ${slideClass} ${index === 0 ? "is-active" : ""}" data-slide="${index}" role="group" aria-roledescription="slide" aria-label="Slide ${index + 1} of ${slides.length}">${slideHtml}</div>`
      )
      .join("");
  }

  function buildCarousel(carouselId, slides, ariaLabel) {
    if (!slides.length) return "";
    const slidesHtml = renderCarouselSlides(slides, "case-study-carousel-panel");
    const dots = slides
      .map(
        (_, index) =>
          `<button type="button" class="case-study-carousel-dot ${index === 0 ? "is-active" : ""}" data-carousel-dot="${index}" aria-label="Go to slide ${index + 1}"></button>`
      )
      .join("");

    return `
      <div class="case-study-carousel" data-carousel id="${escapeHtml(carouselId)}" aria-label="${escapeHtml(ariaLabel)}">
        <button type="button" class="case-study-carousel-nav prev" data-carousel-prev aria-label="Previous slide">
          <span class="material-symbols-outlined">chevron_left</span>
        </button>
        <div class="case-study-carousel-viewport">
          <div class="case-study-carousel-track">
            ${slidesHtml}
          </div>
        </div>
        <button type="button" class="case-study-carousel-nav next" data-carousel-next aria-label="Next slide">
          <span class="material-symbols-outlined">chevron_right</span>
        </button>
        <div class="case-study-carousel-footer">
          <span class="case-study-carousel-counter" data-carousel-counter>1 / ${slides.length}</span>
          <div class="case-study-carousel-dots">${dots}</div>
        </div>
      </div>
    `;
  }

  function renderFeatureSlide(feature, index) {
    const items = (feature.items || [])
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join("");
    return `
      <div class="case-study-slide-card">
        <p class="case-study-slide-index font-mono-label text-[10px] uppercase tracking-widest text-primary mb-2">Feature ${index + 1}</p>
        <h4 class="case-study-slide-title">${escapeHtml(feature.title)}</h4>
        <ul class="case-study-list">${items}</ul>
      </div>
    `;
  }

  function renderChallengeSlide(challenge, index) {
    const res = challenge.resolution || {};
    return `
      <div class="case-study-slide-card">
        <p class="case-study-slide-index font-mono-label text-[10px] uppercase tracking-widest text-primary mb-2">Challenge ${index + 1}</p>
        <h4 class="case-study-slide-title">${escapeHtml(challenge.title)}</h4>
        <p class="case-study-label">The Roadblock</p>
        <p class="case-study-text">${escapeHtml(challenge.roadblock)}</p>
        <p class="case-study-label">The Resolution</p>
        ${renderResolutionBlock(res)}
      </div>
    `;
  }

  function renderCaseStudyGalleryBlock(project) {
    const galleryImages = getProjectGallery(project);
    const galleryCarousel =
      galleryImages.length > 1
        ? buildCarousel(
            `carousel-gallery-${project.slug}`,
            galleryImages.map((src, i) => renderGallerySlide(src, i, project.title)),
            "Project screenshots"
          )
        : galleryImages.length === 1
          ? `<div class="case-study-gallery-static"><div class="case-study-gallery-frame"><img src="${escapeHtml(galleryImages[0])}" alt="${escapeHtml(project.title)} screenshot" loading="lazy" /></div></div>`
          : "";

    if (!galleryCarousel) return "";
    return `<section class="case-study-gallery-section" aria-label="Project screenshots">${galleryCarousel}</section>`;
  }

  function getTechMeta(item) {
    const icons = window.TECH_ICONS || {};
    const key = item.key || item.name;
    if (item.icon && item.color) {
      return { icon: item.icon, color: item.color, name: item.name || key };
    }
    if (icons[key]) {
      return { icon: icons[key].icon, color: icons[key].color, name: item.name || key };
    }
    return { icon: "mdi:code-tags", color: "#6b7280", name: item.name || key };
  }

  function renderTechStackTiles(techStack) {
    if (!Array.isArray(techStack) || !techStack.length) return "";

    const tiles = techStack
      .map((item) => {
        const meta = getTechMeta(item);
        const color = meta.color;
        return `
        <div class="case-study-tech-tile" style="--tech-color: ${escapeHtml(color)}; background-color: ${escapeHtml(color)}14; border-color: ${escapeHtml(color)}40;">
          <div class="case-study-tech-icon-wrap" style="background-color: ${escapeHtml(color)}22;">
            <iconify-icon icon="${escapeHtml(meta.icon)}" width="26" height="26" style="color: ${escapeHtml(color)};" aria-hidden="true"></iconify-icon>
          </div>
          <span class="case-study-tech-name">${escapeHtml(meta.name)}</span>
        </div>`;
      })
      .join("");

    return `<div class="case-study-tech-grid">${tiles}</div>`;
  }

  function renderSimpleCaseStudyLayout(project, summary) {
    const galleryBlock = renderCaseStudyGalleryBlock(project);
    const features = (summary.features || [])
      .map(
        (feature) => `
        <li class="case-study-feature-numbered">
          <div class="case-study-feature-numbered-body">
            <strong>${escapeHtml(feature.title)}</strong>
            <p>${escapeHtml(feature.text)}</p>
          </div>
        </li>`
      )
      .join("");

    const techStackHtml = summary.techStack
      ? renderTechStackTiles(summary.techStack)
      : summary.tools
        ? `<p class="case-study-text">${escapeHtml(summary.tools)}</p>`
        : "";

    return `
      ${galleryBlock}
      <div class="case-study-modal-body case-study-modal-body--simple">
        <section class="case-study-section">
          <h3>The Problem</h3>
          <p class="case-study-text">${escapeHtml(summary.problem)}</p>
        </section>
        <section class="case-study-section">
          <h3>Tech Stack</h3>
          ${techStackHtml}
        </section>
        <section class="case-study-section">
          <h3>Core Features</h3>
          <ol class="case-study-features-numbered">${features}</ol>
        </section>
      </div>
    `;
  }

  function renderCaseStudyContent(project) {
    const cs = project.caseStudy;
    if (!cs) return "";

    const galleryBlock = renderCaseStudyGalleryBlock(project);
    const header = `
      <header class="case-study-modal-header">
        <p class="font-mono-label text-xs uppercase tracking-[0.2em] text-primary mb-2">Project Details</p>
        <h2 id="case-study-modal-title" class="text-2xl md:text-3xl font-bold tracking-tight">${escapeHtml(project.title)}</h2>
      </header>
    `;

    if (cs.summary) {
      return `${header}${renderSimpleCaseStudyLayout(project, cs.summary)}`;
    }

    const badges = (cs.techStack.badges || [])
      .map(
        (b) =>
          `<span class="case-study-badge"><span class="case-study-badge-label">${escapeHtml(b.label)}</span> ${escapeHtml(b.value)}</span>`
      )
      .join("");

    const architecture = (cs.techStack.architecture || [])
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join("");

    const choices = (cs.techStack.choices || [])
      .map(
        (c) => `
        <div class="case-study-choice">
          <h4>${escapeHtml(c.title)}</h4>
          <p>${escapeHtml(c.reason)}</p>
        </div>`
      )
      .join("");

    const featureSlides = (cs.features || []).map((f, i) => renderFeatureSlide(f, i));
    const challengeSlides = (cs.challenges || []).map((c, i) => renderChallengeSlide(c, i));

    const featuresCarousel = buildCarousel(
      `carousel-features-${project.slug}`,
      featureSlides,
      "Key features"
    );
    const challengesCarousel = buildCarousel(
      `carousel-challenges-${project.slug}`,
      challengeSlides,
      "Technical challenges"
    );

    return `
      ${header}
      ${galleryBlock}
      <div class="case-study-modal-body">
        <section class="case-study-section">
          <h3>Overview</h3>
          <p class="case-study-label">The Problem</p>
          <p class="case-study-text">${escapeHtml(cs.hook.problem)}</p>
          <p class="case-study-label">Role</p>
          <p class="case-study-text">${escapeHtml(cs.hook.role)}</p>
        </section>
        <section class="case-study-section">
          <h3>Tech Stack &amp; Architecture</h3>
          <p class="case-study-label">Tech Stack</p>
          <div class="case-study-badges">${badges}</div>
          ${architecture ? `<p class="case-study-label mt-4">Architecture Highlights</p><ul class="case-study-list">${architecture}</ul>` : ""}
          <p class="case-study-label mt-4">The &ldquo;Why&rdquo; Behind Key Choices</p>
          ${choices}
        </section>
        <section class="case-study-section">
          <h3>Key Features &amp; Functionality</h3>
          ${featuresCarousel}
        </section>
        <section class="case-study-section">
          <h3>Technical Challenges &amp; Solutions</h3>
          ${challengesCarousel}
        </section>
      </div>
    `;
  }

  function initCarousels(root) {
    root.querySelectorAll("[data-carousel]").forEach((carousel) => {
      const slides = Array.from(carousel.querySelectorAll(".case-study-carousel-slide"));
      const dots = Array.from(carousel.querySelectorAll("[data-carousel-dot]"));
      const counter = carousel.querySelector("[data-carousel-counter]");
      const prevBtn = carousel.querySelector("[data-carousel-prev]");
      const nextBtn = carousel.querySelector("[data-carousel-next]");
      if (!slides.length) return;

      let activeIndex = 0;

      function goTo(index) {
        activeIndex = (index + slides.length) % slides.length;
        slides.forEach((slide, i) => {
          slide.classList.toggle("is-active", i === activeIndex);
        });
        dots.forEach((dot, i) => {
          dot.classList.toggle("is-active", i === activeIndex);
        });
        if (counter) counter.textContent = `${activeIndex + 1} / ${slides.length}`;
      }

      prevBtn?.addEventListener("click", (event) => {
        event.stopPropagation();
        goTo(activeIndex - 1);
      });
      nextBtn?.addEventListener("click", (event) => {
        event.stopPropagation();
        goTo(activeIndex + 1);
      });
      dots.forEach((dot) => {
        dot.addEventListener("click", (event) => {
          event.stopPropagation();
          goTo(Number(dot.getAttribute("data-carousel-dot")));
        });
      });

      carousel.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          goTo(activeIndex - 1);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          goTo(activeIndex + 1);
        }
      });
    });
  }

  function ensureCaseStudyModal() {
    let modal = document.getElementById("case-study-modal");
    if (modal) return modal;

    modal = document.createElement("div");
    modal.id = "case-study-modal";
    modal.className = "case-study-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = `
      <div class="case-study-modal-backdrop" data-close-case-study></div>
      <div class="case-study-modal-panel" role="document">
        <button type="button" class="case-study-modal-close" data-close-case-study aria-label="Close case study">
          <span class="material-symbols-outlined">close</span>
        </button>
        <div id="case-study-modal-content" class="case-study-modal-content"></div>
      </div>
    `;
    document.body.appendChild(modal);
    return modal;
  }

  function openCaseStudy(slug) {
    const projects = Array.isArray(window.PROJECTS_DATA) ? window.PROJECTS_DATA : [];
    const project = projects.find((p) => p.slug === slug);
    if (!project || !project.caseStudy) return;

    const modal = ensureCaseStudyModal();
    const content = document.getElementById("case-study-modal-content");
    content.innerHTML = renderCaseStudyContent(project);
    initCarousels(content);
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("case-study-open");
  }

  function closeCaseStudy() {
    const modal = document.getElementById("case-study-modal");
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("case-study-open");
  }

  function shouldIgnoreCardOpen(target) {
    return Boolean(
      target.closest("a[href]") ||
        target.closest(".project-card-links") ||
        target.closest("[data-close-case-study]") ||
        target.closest(".case-study-carousel-nav") ||
        target.closest("[data-carousel-dot]")
    );
  }

  function initProjectThumbSliders(root) {
    root.querySelectorAll("[data-thumb-slider]").forEach((slider) => {
      const images = slider.querySelectorAll(".project-thumb-img");
      if (images.length < 2) return;

      let activeIndex = 0;
      const intervalMs = Number(slider.getAttribute("data-interval")) || 3500;
      let timerId = null;

      function goTo(index) {
        activeIndex = (index + images.length) % images.length;
        images.forEach((img, i) => {
          img.classList.toggle("is-active", i === activeIndex);
        });
      }

      function start() {
        stop();
        timerId = window.setInterval(() => goTo(activeIndex + 1), intervalMs);
      }

      function stop() {
        if (timerId !== null) {
          window.clearInterval(timerId);
          timerId = null;
        }
      }

      slider.addEventListener("mouseenter", stop);
      slider.addEventListener("mouseleave", start);
      start();
    });
  }

  function bindCaseStudyTriggers(root) {
    root.querySelectorAll("[data-case-study]").forEach((trigger) => {
      trigger.addEventListener("click", (event) => {
        event.stopPropagation();
        openCaseStudy(trigger.getAttribute("data-case-study"));
      });
    });

    root.querySelectorAll("[data-open-case-study]").forEach((card) => {
      card.addEventListener("click", (event) => {
        if (shouldIgnoreCardOpen(event.target)) return;
        openCaseStudy(card.getAttribute("data-open-case-study"));
      });
      card.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        if (shouldIgnoreCardOpen(event.target)) return;
        event.preventDefault();
        openCaseStudy(card.getAttribute("data-open-case-study"));
      });
    });
  }

  function renderProjectCards(container, projects, activeCategory) {
    if (!container) return;
    const filtered =
      !activeCategory || activeCategory === "all"
        ? projects
        : projects.filter((p) => p.category === activeCategory);
    container.innerHTML = filtered.map(projectCardTemplate).join("");
    bindCaseStudyTriggers(container);
    initProjectThumbSliders(container);
  }

  function initCaseStudyModal() {
    ensureCaseStudyModal();
    document.addEventListener("click", (event) => {
      if (event.target.closest("[data-close-case-study]")) {
        closeCaseStudy();
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeCaseStudy();
    });
  }

  function initCaseStudyMessageBridge() {
    window.addEventListener("message", (event) => {
      const data = event.data;
      if (!data || data.type !== "open-case-study" || !data.slug) return;
      openCaseStudy(data.slug);
    });
  }

  function requestCaseStudyOpen(slug) {
    if (window.parent !== window) {
      window.parent.postMessage({ type: "open-case-study", slug }, "*");
      return;
    }
    openCaseStudy(slug);
  }

  function openCaseStudyFromHash() {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;
    const slug = hash.startsWith("project-") ? hash.slice("project-".length) : hash;
    const projects = Array.isArray(window.PROJECTS_DATA) ? window.PROJECTS_DATA : [];
    const project = projects.find((p) => p.slug === slug);
    if (project && project.caseStudy) {
      const card = document.getElementById(`project-${slug}`);
      if (card) card.scrollIntoView({ behavior: "smooth", block: "start" });
      if (window.location.search.includes("case-study=1")) {
        openCaseStudy(slug);
      }
    }
  }

  function renderFeaturedWireframePersonality() {
    return `
      <div class="featured-wireframe featured-wireframe--personality" aria-hidden="true">
        <div class="featured-wireframe__browser">
          <div class="featured-wireframe__bar">
            <span></span><span></span><span></span>
          </div>
          <div class="featured-wireframe__body">
            <p class="featured-wireframe__headline">This headline reflects my personality <em>(56px)</em></p>
            <div class="featured-wireframe__hero-block"></div>
            <div class="featured-wireframe__split">
              <div class="featured-wireframe__panel">
                <p class="featured-wireframe__label">WHO AM I?</p>
                <div class="featured-wireframe__line"></div>
                <div class="featured-wireframe__line featured-wireframe__line--short"></div>
                <div class="featured-wireframe__line"></div>
              </div>
              <div class="featured-wireframe__panel featured-wireframe__panel--photo"></div>
            </div>
            <div class="featured-wireframe__grid">
              <div></div><div></div><div></div>
            </div>
          </div>
        </div>
      </div>`;
  }

  function renderFeaturedWireframeLanding() {
    return `
      <div class="featured-wireframe featured-wireframe--landing" aria-hidden="true">
        <div class="featured-wireframe__browser">
          <div class="featured-wireframe__bar">
            <span></span><span></span><span></span>
          </div>
          <div class="featured-wireframe__body">
            <div class="featured-wireframe__nav-row">
              <div class="featured-wireframe__nav-logo"></div>
              <div class="featured-wireframe__nav-links"><span></span><span></span><span></span></div>
            </div>
            <p class="featured-wireframe__headline featured-wireframe__headline--landing">OPPORTUNITY <em>(47px)</em></p>
            <div class="featured-wireframe__hero-strip"></div>
            <div class="featured-wireframe__scheme-grid">
              <div class="featured-wireframe__scheme featured-wireframe__scheme--wide"></div>
              <div class="featured-wireframe__scheme"></div>
              <div class="featured-wireframe__scheme"></div>
              <div class="featured-wireframe__scheme"></div>
              <div class="featured-wireframe__scheme featured-wireframe__scheme--wide"></div>
            </div>
          </div>
        </div>
      </div>`;
  }

  function renderFeaturedWireframe(type) {
    return type === "landing"
      ? renderFeaturedWireframeLanding()
      : renderFeaturedWireframePersonality();
  }

  function renderFeaturedTechStack(techStack) {
    if (!Array.isArray(techStack) || !techStack.length) return "";
    const tiles = techStack
      .map((item) => {
        const meta = getTechMeta(item);
        const color = meta.color;
        return `
          <div class="featured-tech-tile" style="--tech-color: ${escapeHtml(color)};">
            <iconify-icon icon="${escapeHtml(meta.icon)}" width="20" height="20" style="color: ${escapeHtml(color)};" aria-hidden="true"></iconify-icon>
            <span>${escapeHtml(meta.name)}</span>
          </div>`;
      })
      .join("");
    return `
      <div class="featured-project__tech" aria-label="Tech stack">
        <p class="featured-project__tech-label font-mono-label">Tech Stack</p>
        <div class="featured-project__tech-grid">${tiles}</div>
      </div>`;
  }

  function renderFeaturedLinks(project) {
    const demo = project.links && project.links.demo;
    const repo = project.links && project.links.repo;
    const items = [];

    if (demo !== undefined) {
      if (!isPlaceholderLink(demo)) {
        items.push(
          `<a href="${escapeHtml(demo)}" target="_blank" rel="noopener noreferrer" class="featured-project__link featured-project__link--demo">Live Demo<span class="material-symbols-outlined text-[16px]">open_in_new</span></a>`
        );
      } else {
        items.push(
          `<span class="featured-project__link featured-project__link--demo is-disabled" title="Demo link coming soon">Live Demo<span class="material-symbols-outlined text-[16px]">open_in_new</span></span>`
        );
      }
    }

    if (repo !== undefined) {
      if (!isPlaceholderLink(repo)) {
        items.push(
          `<a href="${escapeHtml(repo)}" target="_blank" rel="noopener noreferrer" class="featured-project__link featured-project__link--repo">GitHub<span class="material-symbols-outlined text-[16px]">code</span></a>`
        );
      } else {
        items.push(
          `<span class="featured-project__link featured-project__link--repo is-disabled" title="Repository link coming soon">GitHub<span class="material-symbols-outlined text-[16px]">code</span></span>`
        );
      }
    }

    if (!items.length) return "";
    return `<div class="featured-project__links">${items.join("")}</div>`;
  }

  function renderFeaturedMacWindow(project, imageHtml) {
    const chrome = (project.media && project.media.chrome) || project.windowChrome;
    if (chrome !== "mac") {
      return `<div class="featured-project__showcase">${imageHtml}</div>`;
    }
    const windowTitle = escapeHtml(
      (project.media && project.media.windowTitle) || project.title || "Preview"
    );
    return `
      <div class="featured-project__showcase featured-project__showcase--mac">
        <div class="featured-mac-window" role="img" aria-label="${windowTitle} preview window">
          <div class="featured-mac-titlebar">
            <div class="featured-mac-traffic" aria-hidden="true">
              <span class="featured-mac-dot featured-mac-dot--close"></span>
              <span class="featured-mac-dot featured-mac-dot--minimize"></span>
              <span class="featured-mac-dot featured-mac-dot--maximize"></span>
            </div>
            <span class="featured-mac-title">${windowTitle}</span>
          </div>
          <div class="featured-mac-content">
            ${imageHtml}
          </div>
        </div>
      </div>`;
  }

  const FEATURED_MEDIA_WIDTH = 520;
  const FEATURED_MEDIA_HEIGHT = 325;

  function renderFeaturedGallery(project) {
    const media = project.media || {};
    const gallery = Array.isArray(media.gallery) ? media.gallery : [];
    if (!gallery.length) return "";

    const altBase = media.alt || `${project.title} project preview`;
    const interval = Number(media.interval) || 4500;
    const sliderAttr =
      gallery.length > 1 ? ` data-thumb-slider data-interval="${interval}"` : "";

    const imgs = gallery
      .map(
        (src, index) =>
          `<img class="project-thumb-img ${index === 0 ? "is-active" : ""}" src="${escapeHtml(src)}" alt="${escapeHtml(altBase)} screenshot ${index + 1}" width="${FEATURED_MEDIA_WIDTH}" height="${FEATURED_MEDIA_HEIGHT}" loading="lazy" decoding="async" />`
      )
      .join("");

    return `<div class="featured-project__slider project-thumb-slider"${sliderAttr}>${imgs}</div>`;
  }

  function renderFeaturedMedia(project) {
    const media = project.media || {};
    const galleryHtml = renderFeaturedGallery(project);
    const src = media.src || project.animation;

    if (galleryHtml) {
      return renderFeaturedMacWindow(project, galleryHtml);
    }

    if (src) {
      const alt = media.alt || `${project.title} project preview`;
      const imageHtml = `
          <img
            class="featured-project__animation"
            src="${escapeHtml(src)}"
            alt="${escapeHtml(alt)}"
            width="${FEATURED_MEDIA_WIDTH}"
            height="${FEATURED_MEDIA_HEIGHT}"
            loading="lazy"
            decoding="async"
          />`;
      return renderFeaturedMacWindow(project, imageHtml);
    }
    return renderFeaturedWireframe(project.wireframe || "personality");
  }

  function renderFeaturedProject(project) {
    const layoutClass =
      project.layout === "image-left"
        ? "featured-project--image-left"
        : "featured-project--image-right";
    const label = project.label || "Featured Project";
    const techHtml = renderFeaturedTechStack(project.techStack);
    const linksHtml = renderFeaturedLinks(project);
    const mediaHtml = renderFeaturedMedia(project);

    return `
      <article class="featured-project ${layoutClass}" id="featured-${escapeHtml(project.slug)}">
        <div class="featured-project__content">
          <p class="featured-project__label font-mono-label">${escapeHtml(label)}</p>
          <h3 class="featured-project__title">${escapeHtml(project.title)}</h3>
          <div class="featured-project__desc-card">
            <p>${escapeHtml(project.description)}</p>
          </div>
          ${techHtml}
          ${linksHtml}
        </div>
        <div class="featured-project__media">
          ${mediaHtml}
        </div>
      </article>`;
  }

  function renderFeaturedProjects(projects) {
    return projects.map((project) => renderFeaturedProject(project)).join("");
  }

  function mountFeaturedProjects(containerId, projects) {
    const container = document.getElementById(containerId);
    if (!container || !Array.isArray(projects) || !projects.length) return;
    container.innerHTML = renderFeaturedProjects(projects);
  }

  function initFeaturedProjects(containerId) {
    const projects =
      Array.isArray(window.FEATURED_PROJECTS) && window.FEATURED_PROJECTS.length
        ? window.FEATURED_PROJECTS
        : [];
    mountFeaturedProjects(containerId, projects);
    const container = document.getElementById(containerId);
    if (container) initProjectThumbSliders(container);
  }

  window.ProjectsUI = {
    renderProjectCards,
    renderCubeProjectPreview,
    renderFeaturedProjects,
    mountFeaturedProjects,
    initFeaturedProjects,
    initCaseStudyModal,
    initCaseStudyMessageBridge,
    requestCaseStudyOpen,
    openCaseStudy,
    closeCaseStudy,
    openCaseStudyFromHash,
    projectCardTemplate,
    initProjectThumbSliders,
    getCardOverview
  };
})();
