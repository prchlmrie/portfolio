(function () {
  const API_URL = "https://api.web3forms.com/submit";

  function getField(form, name) {
    const el = form.querySelector(`[name="${name}"]`);
    return el ? String(el.value).trim() : "";
  }

  function showError(form, message) {
    const errorEl = form.querySelector("[data-contact-error]");
    if (!errorEl) return;
    errorEl.textContent = message;
    errorEl.hidden = false;
    errorEl.style.display = errorEl.dataset.displayMode || "block";
  }

  function hideError(form) {
    const errorEl = form.querySelector("[data-contact-error]");
    if (!errorEl) return;
    errorEl.textContent = "";
    errorEl.hidden = true;
    errorEl.style.display = "none";
  }

  function showSuccess(form) {
    const successEl = form.querySelector("[data-contact-success]");
    const hideOnSuccess = form.dataset.hideOnSuccess === "true";

    if (successEl) {
      successEl.hidden = false;
      successEl.style.display = successEl.dataset.displayMode || "flex";
    }

    if (hideOnSuccess) {
      form.style.display = "none";
    } else {
      form.reset();
    }
  }

  function setLoading(submitBtn, loading) {
    if (!submitBtn) return;
    submitBtn.disabled = loading;
    if (loading) {
      if (!submitBtn.dataset.originalHtml) {
        submitBtn.dataset.originalHtml = submitBtn.innerHTML;
      }
      submitBtn.textContent = submitBtn.dataset.loadingLabel || "Sending…";
    } else {
      submitBtn.innerHTML =
        submitBtn.dataset.originalHtml || submitBtn.dataset.originalLabel || "Send Message";
    }
  }

  function buildSubject(form, name) {
    const subject = getField(form, "subject");
    if (subject) return subject;

    const template =
      (window.CONTACT_FORM_CONFIG && window.CONTACT_FORM_CONFIG.defaultSubject) ||
      "Portfolio inquiry from {name}";

    return template.replace("{name}", name || "a visitor");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const config = window.CONTACT_FORM_CONFIG || {};
    const accessKey = String(config.accessKey || "").trim();
    const submitBtn = form.querySelector('[type="submit"]');

    const name = getField(form, "name");
    const email = getField(form, "email");
    const message = getField(form, "message");
    const subject = buildSubject(form, name);

    hideError(form);

    if (!name || !email || !message) {
      showError(form, "Please fill in all required fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError(form, "Please enter a valid email address.");
      return;
    }

    if (!accessKey) {
      showError(
        form,
        "Contact form is not configured yet. Add your Web3Forms access key in js/contact-config.js."
      );
      return;
    }

    setLoading(submitBtn, true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          subject,
          message,
          from_name: name,
          replyto: email
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        showSuccess(form);
        return;
      }

      showError(form, data.message || "Could not send your message. Please try again.");
    } catch {
      showError(
        form,
        "Network error. Please try again or email cheilou.dev@gmail.com directly."
      );
    } finally {
      setLoading(submitBtn, false);
    }
  }

  function init() {
    document.querySelectorAll("form[data-contact-form]").forEach((form) => {
      form.addEventListener("submit", handleSubmit);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
