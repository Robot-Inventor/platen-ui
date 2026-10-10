import { rootStyles, thumbStyles } from "./styles.css";
import { Switch as BaseSwitch } from "@base-ui/react/switch";
import type { ReactNode } from "react";
import { mergeClassNames } from "../../mergeClassNames";

type SwitchProps = BaseSwitch.Root.Props & {
    className?: string | undefined;
};

const Switch = ({ className, ...props }: SwitchProps): ReactNode => (
    <BaseSwitch.Root className={mergeClassNames(rootStyles, className)} {...props}>
        <BaseSwitch.Thumb className={thumbStyles} />
    </BaseSwitch.Root>
);

export { Switch };
