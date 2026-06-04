tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: "#f472b6",
        "accent-hover": "#ec4899",
        surface: "#1c1b1b",
        "surface-dim": "#141418",
        "surface-bright": "#2a2a2a",
        "surface-container-lowest": "#0e0e10",
        "surface-container-low": "#141418",
        "surface-container": "#201f1f",
        "surface-container-high": "#2a2a2a",
        "surface-container-highest": "#353534",
        "on-surface": "#e5e2e1",
        "on-surface-variant": "#9ca3af",
        "inverse-surface": "#e5e2e1",
        "inverse-on-surface": "#131313",
        outline: "#4b5563",
        "outline-variant": "rgba(255, 255, 255, 0.1)",
        "surface-tint": "#f472b6",
        primary: "#f472b6",
        "on-primary": "#ffffff",
        "primary-container": "#831843",
        "on-primary-container": "#fce7f3",
        "inverse-primary": "#f472b6",
        secondary: "#ec4899",
        "on-secondary": "#ffffff",
        "secondary-container": "#4a1942",
        "on-secondary-container": "#fbcfe8",
        tertiary: "#f472b6",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#4a1942",
        "on-tertiary-container": "#fbcfe8",
        error: "#ef4444",
        "on-error": "#ffffff",
        "error-container": "#7f1d1d",
        "on-error-container": "#fecaca",
        "primary-fixed": "#fce7f3",
        "primary-fixed-dim": "#f472b6",
        "on-primary-fixed": "#831843",
        "on-primary-fixed-variant": "#f9a8d4",
        "secondary-fixed": "#4a1942",
        "secondary-fixed-dim": "#ec4899",
        "on-secondary-fixed": "#fce7f3",
        "on-secondary-fixed-variant": "#f9a8d4",
        "tertiary-fixed": "#4a1942",
        "tertiary-fixed-dim": "#f472b6",
        "on-tertiary-fixed": "#fce7f3",
        "on-tertiary-fixed-variant": "#f9a8d4",
        background: "#0e0e10",
        "on-background": "#e5e2e1",
        "surface-variant": "#2a2a2a"
      },
      borderRadius: {
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        unit: "8px",
        "container-max": "1120px",
        gutter: "24px",
        "margin-mobile": "20px",
        "section-gap": "120px"
      },
      maxWidth: {
        "container-max": "1120px"
      },
      fontFamily: {
        "display-lg": ["Hanken Grotesk", "sans-serif"],
        "display-lg-mobile": ["Hanken Grotesk", "sans-serif"],
        "headline-md": ["Hanken Grotesk", "sans-serif"],
        "headline-sm": ["Hanken Grotesk", "sans-serif"],
        "headline-lg": ["Hanken Grotesk", "sans-serif"],
        "headline-lg-mobile": ["Hanken Grotesk", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "label-md": ["JetBrains Mono", "monospace"],
        "label-sm": ["JetBrains Mono", "monospace"],
        "code-sm": ["JetBrains Mono", "monospace"]
      },
      fontSize: {
        "display-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg-mobile": ["36px", { lineHeight: "1.2", fontWeight: "700" }],
        "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
        "headline-sm": ["24px", { lineHeight: "1.4", fontWeight: "600" }],
        "headline-lg": ["40px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg-mobile": ["32px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-md": ["14px", { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "500" }],
        "label-sm": ["12px", { lineHeight: "1", fontWeight: "500" }],
        "code-sm": ["13px", { lineHeight: "1.5", fontWeight: "400" }]
      },
      boxShadow: {
        card: "0 8px 28px rgba(0, 0, 0, 0.45)",
        "card-hover": "0 10px 30px rgba(244, 114, 182, 0.22)"
      }
    }
  }
};
