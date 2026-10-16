import { mixins, tokens, vars } from "../../theme.css";
import { style } from "@vanilla-extract/css";

const containerStyles = style({
    alignItems: "center",
    display: "grid",
    gridColumn: "1 / -1",
    gridTemplateColumns: "subgrid"
});

const labelStyles = style({
    cursor: "pointer"
});

const TRIGGER_PADDING_BLOCK = "0.25rem";
const TRIGGER_BORDER_WIDTH = "1px";

const selectStyles = style({
    ...mixins.focusVisible,

    ":hover": {
        background: vars.color.semantic.background.neutralHover
    },

    background: vars.color.semantic.background.neutral,
    border: `${TRIGGER_BORDER_WIDTH} solid ${vars.color.semantic.border.default}`,
    borderRadius: vars.size.semantic.borderRadiusSmall,
    color: vars.color.semantic.text.default,
    cursor: "pointer",
    // Keep the trigger at one line of text even when empty, so loading a
    // device list never shifts the layout below.
    minHeight: `calc(1lh + ${TRIGGER_PADDING_BLOCK} * 2 + ${TRIGGER_BORDER_WIDTH} * 2)`,
    minWidth: 0,
    padding: `${TRIGGER_PADDING_BLOCK} 1rem`
});

const popupStyles = style({
    background: vars.color.semantic.surface.default,
    border: tokens.border.default,
    borderRadius: vars.size.semantic.borderRadiusSmall,
    boxShadow: vars.shadow.overlay,
    color: vars.color.semantic.text.default,
    cursor: "pointer",
    overflow: "hidden",
    width: "var(--anchor-width)"
});

const listStyles = style({
    background: vars.color.semantic.background.neutral
});

const textStyles = style({
    display: "block",
    overflow: "hidden",
    selectors: {
        "&[data-placeholder]": {
            color: vars.color.semantic.text.subtle
        }
    },
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
});

const itemStyles = style({
    ":focus-visible": {
        ...mixins.focusVisible[":focus-visible"],
        background: vars.color.semantic.background.neutralHover,
        borderRadius: vars.size.semantic.borderRadiusSmall,
        outlineOffset: "-2px"
    },

    ":hover": {
        background: vars.color.semantic.background.neutralHover
    },

    padding: "0.25rem 1rem",

    selectors: {
        "&:last-child": {
            paddingBottom: "0.5rem"
        }
    }
});

const groupLabelStyles = style({
    color: vars.color.semantic.text.subtle,
    padding: "0.5rem 1rem 0.25rem"
});

export {
    containerStyles,
    groupLabelStyles,
    labelStyles,
    selectStyles,
    popupStyles,
    listStyles,
    textStyles,
    itemStyles
};
