import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

const inputWrapperStyles = style({
    display: "block",
    position: "relative"
});

const inputStyles = style({
    ...vars.preset.focusVisible,

    background: vars.color.backgroundVariant,
    border: `1px solid ${vars.color.border}`,
    borderRadius: vars.size.borderRadiusSmall,
    display: "block",
    padding: "0.25rem 1.75rem 0.25rem 0.5rem",

    selectors: {
        "&::placeholder": {
            color: vars.color.onBackgroundVariant
        },
        [`${inputWrapperStyles}:hover &`]: {
            background: vars.color.backgroundVariantRaised
        }
    },

    width: "100%"
});

const clearButtonStyles = style({
    ...vars.preset.focusVisible,

    ":hover": {
        color: vars.color.onBackground
    },

    alignItems: "center",
    color: vars.color.onBackgroundVariant,
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
