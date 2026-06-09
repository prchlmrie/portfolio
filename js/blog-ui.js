(function () {
  const posts = window.BLOG_POSTS || [];

  const CATEGORY_LABELS = {
    hackathon: "Hackathon",
    programming: "Programming Competition",
    event: "Event",
    workshop: "Workshop",
    webinar: "Webinar"
  };

  function isCertificateEntry(post) {
    return post.category === "webinar" || post.category === "workshop";
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatDate(isoDate, category) {
    const date = new Date(isoDate + "T12:00:00");
    if (category === "hackathon" || category === "programming" || category === "event") {
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long"
      });
    }
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }

  function sortPosts(list, order) {
    const sorted = [...list];
    sorted.sort((a, b) => {
      const aTime = new Date(a.date).getTime();
      const bTime = new Date(b.date).getTime();
      return order === "oldest" ? aTime - bTime : bTime - aTime;
    });
    return sorted;
  }

  function filterPosts(list, category) {
    if (!category || category === "all") return list;
    return list.filter((post) => post.category === category);
  }

  function renderTags(tags) {
    if (!tags || !tags.length) return "";
    return tags
      .map(
        (tag) =>
          `<span class="blog-card__tag">${escapeHtml(tag)}</span>`
      )
      .join("");
  }

  function renderListSection(label, items) {
    if (!items || !items.length) return "";
    return `
      <div class="blog-detail__section">
        <h3 class="blog-detail__label">${escapeHtml(label)}</h3>
        <ul class="blog-detail__list">
          ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </div>
    `;
  }

  function renderMetaRow(label, value) {
    if (!value) return "";
    return `
      <p class="blog-detail__meta">
        <span class="blog-detail__meta-label">${escapeHtml(label)}</span>
        ${escapeHtml(value)}
      </p>
    `;
  }

  function renderGallery(images, title, options = {}) {
    const minCount = options.allowSingle ? 1 : 2;
    if (!images || images.length < minCount) return "";

    const isCertificate = Boolean(options.isCertificate);
    const slides = images
      .map(
        (src, index) =>
          `<img src="${escapeHtml(src)}" alt="${escapeHtml(title)} ${isCertificate ? "certificate" : "photo"} ${index + 1}" loading="lazy" />`
      )
      .join("");

    return `<div class="blog-detail__gallery${isCertificate ? " blog-detail__gallery--certificate" : ""}">${slides}</div>`;
  }

  function renderMedia(post) {
    if (post.cover) {
      return `<img src="${escapeHtml(post.cover)}" alt="${escapeHtml(post.title)}" loading="lazy" />`;
    }
    if (post.certificate) {
      return `
        <a href="${escapeHtml(post.certificate)}" target="_blank" rel="noopener noreferrer" class="blog-card__certificate" aria-label="View certificate for ${escapeHtml(post.title)}">
          <span class="material-symbols-outlined blog-card__certificate-icon">school</span>
          <span class="blog-card__certificate-label">Certificate</span>
        </a>
      `;
    }
    return "";
  }

  function renderDetail(post) {
    const outcomeClass = (post.outcome || "participant")
      .toLowerCase()
      .replace(/\s+/g, "-");

    return `
      ${post.outcome ? `<p class="blog-detail__outcome blog-detail__outcome--${escapeHtml(outcomeClass)}">${escapeHtml(post.outcome)}</p>` : ""}
      ${renderMetaRow("Host / Organizer", post.organizer)}
      ${renderMetaRow("Project", post.project)}
      ${renderMetaRow("Role", post.role)}
      ${renderListSection("Tech Stack", post.techStack)}
      ${renderListSection(
        post.category === "event"
          ? "About the Event"
          : isCertificateEntry(post)
            ? "About the Session"
            : "Key Contributions",
        post.contributions
      )}
      ${renderListSection("Product Features Ideated", post.features)}
      ${renderGallery(post.gallery, post.title, {
        allowSingle: isCertificateEntry(post),
        isCertificate: isCertificateEntry(post)
      })}
    `;
  }

  function renderCard(post) {
    const categoryLabel = CATEGORY_LABELS[post.category] || post.category;
    const outcomeBadge = post.outcome
      ? `<span class="blog-card__outcome blog-card__outcome--${escapeHtml(post.outcome.toLowerCase())}">${escapeHtml(post.outcome)}</span>`
      : "";

    return `
      <article class="blog-card" data-slug="${escapeHtml(post.slug)}">
        <div class="blog-card__media${isCertificateEntry(post) ? " blog-card__media--certificate" : ""}">
          ${renderMedia(post)}
          <span class="blog-card__category blog-card__category--${escapeHtml(post.category)}">${escapeHtml(categoryLabel)}</span>
          ${outcomeBadge}
        </div>
        <div class="blog-card__body">
          <time class="blog-card__date" datetime="${escapeHtml(post.date)}">${escapeHtml(formatDate(post.date, post.category))}</time>
          <h2 class="blog-card__title">${escapeHtml(post.title)}</h2>
          ${post.project ? `<p class="blog-card__project">${escapeHtml(post.project)}</p>` : ""}
          <p class="blog-card__excerpt">${escapeHtml(post.excerpt)}</p>
          <div class="blog-card__tags">${renderTags(post.tags)}</div>
          <button type="button" class="blog-card__toggle" aria-expanded="false" data-toggle="${escapeHtml(post.slug)}">
            Read entry
            <span class="material-symbols-outlined text-[18px]">expand_more</span>
          </button>
          <div class="blog-card__detail" id="blog-detail-${escapeHtml(post.slug)}" hidden>
            ${renderDetail(post)}
          </div>
        </div>
      </article>
    `;
  }

  function render(list) {
    if (!list.length) {
      return `<p class="blog-empty">No entries match this filter yet.</p>`;
    }
    return list.map(renderCard).join("");
  }

  function initBlogFeed(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const sortSelect = document.getElementById("blog-sort");
    const filterButtons = document.querySelectorAll("[data-blog-filter]");

    let sortOrder = "newest";
    let activeCategory = "all";

    function refresh() {
      const filtered = filterPosts(posts, activeCategory);
      const sorted = sortPosts(filtered, sortOrder);
      container.innerHTML = render(sorted);
      bindToggleButtons(container);
    }

    function bindToggleButtons(root) {
      root.querySelectorAll(".blog-card__toggle").forEach((button) => {
        button.addEventListener("click", () => {
          const slug = button.getAttribute("data-toggle");
          const detail = document.getElementById(`blog-detail-${slug}`);
          if (!detail) return;

          const isOpen = !detail.hidden;
          detail.hidden = isOpen;
          button.setAttribute("aria-expanded", String(!isOpen));
          button.classList.toggle("is-open", !isOpen);

          const icon = button.querySelector(".material-symbols-outlined");
          if (icon) {
            icon.textContent = isOpen ? "expand_more" : "expand_less";
          }
        });
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener("change", () => {
        sortOrder = sortSelect.value;
        refresh();
      });
    }

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        activeCategory = button.getAttribute("data-blog-filter") || "all";
        filterButtons.forEach((btn) => btn.classList.remove("is-active"));
        button.classList.add("is-active");
        refresh();
      });
    });

    refresh();
  }

  window.BlogUI = {
    initBlogFeed
  };
})();
