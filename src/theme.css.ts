import { createGlobalTheme } from "@vanilla-extract/css";

const vars = createGlobalTheme(":root", {
    animation: {
        duration: {
            fast: "0.1s",
            medium: "0.2s",
            slow: "0.3s"
        }
    },

    color: {
        background: "#1a1c1f",
        backgroundVariant: "#0d0d0d",
        backgroundVariantRaised: "#111",
        border: "#000",
        error: "#af6060",
        errorBackground: "#402a2a",
        onBackground: "#c2c7cc",
        onBackgroundVariant: "#8e9296",
        primary: "#24466b",
        primaryContainer: "#2e3d4f",
        primaryVariant: "#3b5e84",
        surface: "#222529",
        surfaceVariant: "#2c2f33",
        surfaceVariantRaised: "#393e43"
    },
    preset: {
        focusVisible: {
            ":focus-visible": {
                outline: "2px solid #83a9d3"
            }
        }
    },
    shadow: {
        overlay: "0 4px 16px rgba(0, 0, 0, 0.5)"
    },
    size: {
        borderRadiusSmall: "0.25rem"
    }
});

export { vars };
