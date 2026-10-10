import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

const rootStyles = style({
    ...vars.preset.focusVisible,

    ":hover": {
        background: vars.color.surfaceVariant
    },

    background: vars.color.surface,
    border: `1px solid ${vars.color.border}`,
    borderRadius: "9999px",
    cursor: "pointer",
    height: "1.5rem",
    position: "relative",

    selectors: {
        "&[data-checked]": {
            background: vars.color.primary
        },
        "&[data-checked]:hover": {
            background: vars.color.primaryVariant
        }
    },

    width: "3rem"
});

const thumbStyles = style({
    background: vars.color.onBackground,
    borderRadius: "9999px",
    display: "block",
    height: "1.25rem",
    left: "0.125rem",
    position: "absolute",

    selectors: {
        "&[data-checked]": {
            left: "calc(100% - 0.125rem - 1.25rem)"
        }
    },

    top: "50%",
    transform: "translateY(-50%)",
    transition: `left ${vars.animation.duration.fast} ease-in-out`,
    width: "1.25rem"
});

export { rootStyles, thumbStyles };
