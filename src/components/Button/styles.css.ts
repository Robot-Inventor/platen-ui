import { mixins, tokens, vars } from "../../theme.css";
import { style } from "@vanilla-extract/css";

const buttonStyles = style({
    ...mixins.focusVisible,

    ":hover": {
        background: vars.color.semantic.background.neutralHover
    },

    alignItems: "center",
    background: vars.color.semantic.background.neutral,
    border: tokens.border.default,
    borderRadius: vars.size.semantic.borderRadiusSmall,
    color: vars.color.semantic.text.default,
    cursor: "pointer",
    display: "flex",
    gap: "0.25rem",
    height: "fit-content",
    justifyContent: "center",
    padding: "0.25rem 1rem",

    selectors: {
        "&[data-disabled]": {
            background: "transparent",
            color: vars.color.semantic.text.subtle,
            cursor: "not-allowed",
            opacity: 0.5
        },
        "&[data-disabled]:hover": {
            background: "transparent"
        }
    },

    whiteSpace: "nowrap"
});

export { buttonStyles };
