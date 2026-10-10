import { type MouseEvent, type ReactNode, useState } from "react";
import { clearButtonStyles, inputStyles, inputWrapperStyles } from "./styles.css";
import { Input as InputBase } from "@base-ui/react/input";
import { XIcon } from "lucide-react";
import { mergeClassNames } from "../../mergeClassNames";

type InputProps = InputBase.Props & {
    className?: string | undefined;
};

const Input = ({ className, value: $value, defaultValue, onValueChange, ...props }: InputProps): ReactNode => {
    const [value, setValue] = useState(() => String($value ?? defaultValue ?? ""));
    const [previousValue, setPreviousValue] = useState($value);

    if ($value !== previousValue) {
        setPreviousValue($value);
        setValue(String($value ?? defaultValue ?? ""));
    }

    const showClear = value !== "" && !props.disabled && !props.readOnly;

    const clear = (event: MouseEvent<HTMLButtonElement>): void => {
        const details: InputBase.ChangeEventDetails = {
            allowPropagation: () => {
                details.isPropagationAllowed = true;
            },
            cancel: () => {
                details.isCanceled = true;
            },
            event: event.nativeEvent,
            isCanceled: false,
            isPropagationAllowed: false,
            reason: "none",
            trigger: event.currentTarget
        } as const;

        onValueChange?.("", details);

        if (!details.isCanceled) {
            setValue("");
        }
    };

    return (
        <span className={inputWrapperStyles}>
            <InputBase
                {...props}
                className={mergeClassNames(inputStyles, className)}
                value={value}
                onValueChange={(nextValue, details) => {
                    setValue(nextValue);
                    onValueChange?.(nextValue, details);
                }}
            />
            {showClear && (
                <button type="button" className={clearButtonStyles} aria-label="Clear input" onClick={clear}>
                    <XIcon size={16} />
                </button>
            )}
        </span>
    );
};

export { Input };
