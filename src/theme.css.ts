import { type StyleRule, createGlobalTheme } from "@vanilla-extract/css";

const vars = createGlobalTheme(":root", {
    animation: {
        duration: {
            fast: "0.1s",
            medium: "0.2s",
            slow: "0.3s"
        }
    },

    color: {
        semantic: {
            background: {
                error: "#402a2a",
                neutral: "rgb(66 73 81 / 20%)",
                neutralHover: "rgb(206 218 231 / 10%)",
                primary: "#24466b",
                primaryHover: "#3b5e84",
                sunken: "rgb(4 3 1 / 60%)",
                sunkenHover: "rgb(8 6 3 / 50%)"
            },

            border: {
                default: "#000000"
            },

            surface: {
                default: "#1a1c1f"
            },

            text: {
                default: "#c2c7cc",
                error: "#af6060",
                subtle: "#8e9296"
            }
        }
    },

    shadow: {
        overlay: "0 4px 16px rgba(0, 0, 0, 0.5)"
    },

    size: {
        semantic: {
            borderRadiusSmall: "0.25rem"
        }
    }
});

const tokens = {
    border: {
        default: `1px solid ${vars.color.semantic.border.default}`
    }
} as const;

const mixins = {
    focusVisible: {
        ":focus-visible": {
            outline: "2px solid #83a9d3"
        }
    }
} as const satisfies Record<string, StyleRule>;

export { vars, tokens, mixins };
