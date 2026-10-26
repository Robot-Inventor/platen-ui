import { type ReactElement, type ReactNode, useState } from "react";
import {
    containerStyles,
    groupLabelStyles,
    itemStyles,
    labelStyles,
    listStyles,
    popupStyles,
    selectStyles,
    textStyles
} from "./styles.css";
import { Select as BaseSelect } from "@base-ui/react/select";
import { mergeClassNames } from "../../mergeClassNames";

interface SelectOption {
    value: string;
    label: ReactNode;
}

interface SelectGroup {
    label: string;
    options: SelectOption[];
}

interface SelectProps {
    label: ReactNode;
    options: Array<SelectOption | SelectGroup>;
    placeholder?: ReactNode;
    value: string | null;
    onValueChange: (value: string | null) => void;
    onOpenChange?: (open: boolean) => void;
    className?: string | undefined;
}

const isGroup = (item: SelectOption | SelectGroup): item is SelectGroup => "options" in item;

const Select = ({
    options,
    label,
    placeholder,
    value,
    onValueChange,
    onOpenChange,
    className
}: SelectProps): ReactElement => {
    const [open, setOpen] = useState(false);
    const flatOptions = options.flatMap((item) => (isGroup(item) ? item.options : [item]));

    const handleOpenChange = (next: boolean): void => {
        setOpen(next);
        onOpenChange?.(next);
    };

    const renderItem = (option: SelectOption): ReactElement => (
        <BaseSelect.Item key={option.value} value={option.value} className={itemStyles}>
            <BaseSelect.ItemText className={textStyles}>{option.label}</BaseSelect.ItemText>
        </BaseSelect.Item>
    );

    return (
        <BaseSelect.Root
            items={flatOptions}
            value={value}
            onValueChange={onValueChange}
            open={open}
            onOpenChange={handleOpenChange}
        >
            <div className={mergeClassNames(containerStyles, className)}>
                <BaseSelect.Label
                    className={labelStyles}
                    onClick={(event) => {
                        event.preventBaseUIHandler();
                        handleOpenChange(true);
                    }}
                >
                    {label}
                </BaseSelect.Label>
                <BaseSelect.Trigger className={selectStyles}>
                    <BaseSelect.Value className={textStyles} placeholder={placeholder} />
                </BaseSelect.Trigger>
            </div>
            <BaseSelect.Portal>
                <BaseSelect.Positioner>
                    <BaseSelect.Popup className={popupStyles}>
                        <BaseSelect.List className={listStyles}>
                            {options.map((item) =>
                                isGroup(item) ? (
                                    <BaseSelect.Group key={item.label}>
                                        <BaseSelect.GroupLabel className={groupLabelStyles}>
                                            {item.label}
                                        </BaseSelect.GroupLabel>
                                        {item.options.map(renderItem)}
                                    </BaseSelect.Group>
                                ) : (
                                    renderItem(item)
                                )
                            )}
                        </BaseSelect.List>
                    </BaseSelect.Popup>
                </BaseSelect.Positioner>
            </BaseSelect.Portal>
        </BaseSelect.Root>
    );
};

export { type SelectGroup, type SelectOption, Select };
