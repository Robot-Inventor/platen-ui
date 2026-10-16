import { mixins, tokens, vars } from "../../theme.css";
import { style } from "@vanilla-extract/css";

const rootStyles = style({
    ...mixins.focusVisible,

    ":hover": {
        background: vars.color.semantic.background.neutralHover
    },

    background: vars.color.semantic.background.neutral,
    border: tokens.border.default,
    borderRadius: "9999px",
    cursor: "pointer",
    display: "inline-block",
    height: "1.5rem",
    position: "relative",

    selectors: {
        "&[data-checked]": {
            background: vars.color.semantic.background.primary
        },
        "&[data-checked]:hover": {
            background: vars.color.semantic.background.primaryHover
        }
    },

    width: "3rem"
});

const thumbStyles = style({
    background: vars.color.semantic.text.default,
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
