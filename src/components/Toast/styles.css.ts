import { tokens, vars } from "../../theme.css";
import { style } from "@vanilla-extract/css";

const viewportStyles = style({
    bottom: 0,
    display: "flex",
    flexDirection: "column-reverse",
    gap: "0.5rem",
    padding: "0.5rem",
    position: "fixed",
    right: 0,
    zIndex: 9999
});

const rootStyles = style({
    selectors: {
        "&[data-ending-style]": {
            opacity: 0,
            transform: "translateX(25%)",
            transitionDuration: vars.animation.duration.medium,
            transitionTimingFunction: "cubic-bezier(0.4, 0, 1, 1)"
        },
        "&[data-starting-style]": {
            opacity: 0,
            transform: "translateX(25%)"
        }
    },

    transition: `opacity ${vars.animation.duration.slow} cubic-bezier(0.22, 1, 0.36, 1), transform ${vars.animation.duration.slow} cubic-bezier(0.22, 1, 0.36, 1)`
});

const contentStyles = style({
    background: vars.color.semantic.background.neutral,
    border: tokens.border.default,
    borderRadius: vars.size.semantic.borderRadiusSmall,
    boxShadow: vars.shadow.overlay,
    color: vars.color.semantic.text.subtle,
    display: "grid",
    gap: "0 1rem",
    gridTemplateColumns: "auto auto",
    gridTemplateRows: "auto auto",
    maxWidth: "24rem",
    padding: "0.5rem 1rem",
    selectors: {
        [`${rootStyles}[data-type="error"] &`]: {
            background: vars.color.semantic.background.error,
            color: vars.color.semantic.text.default
        }
    }
});

const titleStyles = style({
    color: vars.color.semantic.text.default,
    fontWeight: "bold",
    gridColumn: "1 / 2",
    gridRow: "1 / 2"
});

const descriptionStyles = style({
    gridColumn: "1 / 2",
    gridRow: "2 / 3",
    overflowWrap: "anywhere"
});

const actionsStyles = style({
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    gridColumn: "2 / 3",
    gridRow: "1 / 3"
});

export { viewportStyles, rootStyles, contentStyles, titleStyles, descriptionStyles, actionsStyles };
