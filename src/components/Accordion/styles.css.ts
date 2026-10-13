import { keyframes, style } from "@vanilla-extract/css";
import { mixins, tokens, vars } from "../../theme.css";

const itemStyles = style({
    ":hover": {
        background: vars.color.semantic.background.neutralHover
    },

    background: vars.color.semantic.background.neutral,
    border: tokens.border.default,

    selectors: {
        "&:first-child": {
            borderRadius: `${vars.size.semantic.borderRadiusSmall} ${vars.size.semantic.borderRadiusSmall} 0 0`
        },
        "&:last-child": {
            borderRadius: `0 0 ${vars.size.semantic.borderRadiusSmall} ${vars.size.semantic.borderRadiusSmall}`
        },
        "&:not(:first-child)": {
            borderTop: "none"
        }
    }
});

const triggerStyles = style({
    ...mixins.focusVisible,

    borderRadius: vars.size.semantic.borderRadiusSmall,
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
