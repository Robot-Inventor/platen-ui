import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

const buttonStyles = style({
    ...vars.preset.focusVisible,

    ":hover": {
        background: vars.color.surfaceVariant
    },

    alignItems: "center",
    background: vars.color.surface,
    border: `1px solid ${vars.color.border}`,
    borderRadius: vars.size.borderRadiusSmall,
    color: vars.color.onBackground,
    cursor: "pointer",
    display: "flex",
    gap: "0.25rem",
    height: "fit-content",
    justifyContent: "center",
    padding: "0.25rem 1rem",

    selectors: {
        "&[data-disabled]": {
            background: vars.color.background,
            color: vars.color.onBackgroundVariant,
            cursor: "not-allowed",
            opacity: 0.5
        },
        "&[data-disabled]:hover": {
            background: vars.color.background
        }
    },

    whiteSpace: "nowrap"
});

const elevatedButtonStyles = style({
    ":hover": {
        background: vars.color.surfaceVariantRaised
    },

    background: vars.color.surfaceVariant
});

export { buttonStyles, elevatedButtonStyles };
