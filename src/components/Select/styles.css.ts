import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

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
    ...vars.preset.focusVisible,

    ":hover": {
        background: vars.color.surfaceVariant
    },

    background: vars.color.surface,
    border: `${TRIGGER_BORDER_WIDTH} solid ${vars.color.border}`,
    borderRadius: vars.size.borderRadiusSmall,
    color: vars.color.onBackground,
    cursor: "pointer",
    // Keep the trigger at one line of text even when empty, so loading a
    // device list never shifts the layout below.
    minHeight: `calc(1lh + ${TRIGGER_PADDING_BLOCK} * 2 + ${TRIGGER_BORDER_WIDTH} * 2)`,
    minWidth: 0,
    padding: `${TRIGGER_PADDING_BLOCK} 1rem`
});

const popupStyles = style({
    background: vars.color.surface,
    border: `1px solid ${vars.color.border}`,
    borderRadius: vars.size.borderRadiusSmall,
    boxShadow: vars.shadow.overlay,
    color: vars.color.onBackground,
    cursor: "pointer",
    overflow: "hidden",
    width: "var(--anchor-width)"
});

const listStyles = style({
    maxHeight: "var(--available-height)",
    overflowY: "auto"
});

const textStyles = style({
    display: "block",
    overflow: "hidden",
    selectors: {
        "&[data-placeholder]": {
            color: vars.color.onBackgroundVariant
        }
    },
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
});

const itemStyles = style({
    ":focus-visible": {
        ...vars.preset.focusVisible[":focus-visible"],
        background: vars.color.surfaceVariant,
        borderRadius: vars.size.borderRadiusSmall,
        outlineOffset: "-2px"
    },

    ":hover": {
        background: vars.color.surfaceVariant
    },

    padding: "0.25rem 1rem"
});

const groupLabelStyles = style({
    color: vars.color.onBackgroundVariant,
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
