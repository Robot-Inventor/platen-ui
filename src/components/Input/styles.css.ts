import { mixins, tokens, vars } from "../../theme.css";
import { style } from "@vanilla-extract/css";

const inputWrapperStyles = style({
    display: "block",
    position: "relative"
});

const inputStyles = style({
    ...mixins.focusVisible,

    background: vars.color.semantic.background.sunken,
    border: tokens.border.default,
    borderRadius: vars.size.semantic.borderRadiusSmall,
    display: "block",
    padding: "0.25rem 1.75rem 0.25rem 0.5rem",

    selectors: {
        "&::placeholder": {
            color: vars.color.semantic.text.subtle
        },
        [`${inputWrapperStyles}:hover &`]: {
            background: vars.color.semantic.background.sunkenHover
        }
    },

    width: "100%"
});

const clearButtonStyles = style({
    ...mixins.focusVisible,

    ":hover": {
        color: vars.color.semantic.text.default
    },

    alignItems: "center",
    color: vars.color.semantic.text.subtle,
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    padding: "0.25rem",
    position: "absolute",
    right: "0.125rem",
    top: "50%",
    translate: "0 -50%"
});

export { clearButtonStyles, inputStyles, inputWrapperStyles };
