import { keyframes, style } from "@vanilla-extract/css";
import { tokens, vars } from "../../theme.css";

const labelContainerStyles = style({
    color: vars.color.semantic.text.subtle,
    display: "flex",
    fontSize: "0.85rem",
    fontVariantNumeric: "tabular-nums",
    justifyContent: "space-between",
    marginBottom: "0.25rem"
});

const labelStyles = style({
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
});

const trackStyles = style({
    background: vars.color.semantic.background.sunken,
    border: tokens.border.default,
    borderRadius: vars.size.semantic.borderRadiusSmall,
    height: "0.375rem",
    overflow: "hidden"
});

// oxlint-disable-next-line sort-keys
const indeterminateAnimation = keyframes({
    "0%": {
        transform: "translateX(-100%)"
    },
    "50%": {
        transform: "translateX(100%)"
    },
    "50.01%": {
        transform: "translateX(-100%)"
    },
    "65%": {
        transform: "translateX(100%)"
    },
    "65.01%": {
        transform: "translateX(-100%)"
    },
    "80%": {
        transform: "translateX(100%)"
    },
    "100%": {
        transform: "translateX(100%)"
    }
});

const indicatorStyles = style({
    background: vars.color.semantic.background.primary,
    borderRadius: vars.size.semantic.borderRadiusSmall,
    height: "100%",

    selectors: {
        "&[data-indeterminate]": {
            animation: `${indeterminateAnimation} 2.5s linear infinite`
        }
    },

    transition: `width ${vars.animation.duration.fast} linear`
});

export { labelContainerStyles, labelStyles, trackStyles, indicatorStyles };
