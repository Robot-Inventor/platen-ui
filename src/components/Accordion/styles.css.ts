import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

const itemStyles = style({
    ":hover": {
        background: vars.color.surfaceVariant
    },

    background: vars.color.surface,
    border: `1px solid ${vars.color.border}`,

    selectors: {
        "&:first-child": {
            borderRadius: `${vars.size.borderRadiusSmall} ${vars.size.borderRadiusSmall} 0 0`
        },
        "&:last-child": {
            borderRadius: `0 0 ${vars.size.borderRadiusSmall} ${vars.size.borderRadiusSmall}`
        },
        "&:not(:first-child)": {
            borderTop: "none"
        }
    }
});

const triggerStyles = style({
    ...vars.preset.focusVisible,

    borderRadius: vars.size.borderRadiusSmall,
    cursor: "pointer",
    padding: "0.5rem 1rem",
    position: "relative",
    width: "100%"
});

const iconStyles = style({
    position: "absolute",
    right: "1rem",
    top: "50%",
    transform: "translateY(-50%)"
});

const iconAnimation = keyframes({
    "0%": {
        transform: "translateY(-50%) rotate(-90deg)"
    },
    "100%": {
        transform: "translateY(-50%) rotate(0deg)"
    }
});

const iconAnimationStyles = style({
    animation: `${iconAnimation} forwards ${vars.animation.duration.fast} ease-in-out`
});

const panelStyles = style({
    padding: "0.5rem 1rem"
});

export { itemStyles, triggerStyles, iconStyles, iconAnimationStyles, panelStyles };
