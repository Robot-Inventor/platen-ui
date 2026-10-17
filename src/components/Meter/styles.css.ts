import { tokens, vars } from "../../theme.css";
import { style } from "@vanilla-extract/css";

const trackStyles = style({
    background: vars.color.semantic.background.sunken,
    border: tokens.border.default,
    borderRadius: vars.size.semantic.borderRadiusSmall,
    height: "0.375rem",
    overflow: "hidden"
});

const indicatorStyles = style({
    background: vars.color.semantic.background.primary,
    borderRadius: vars.size.semantic.borderRadiusSmall,
    height: "100%",
    transition: `width ${vars.animation.duration.fast} linear`
});

export { trackStyles, indicatorStyles };
