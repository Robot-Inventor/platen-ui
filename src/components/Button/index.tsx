import { Button as BaseButton } from "@base-ui/react/button";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { buttonStyles } from "./styles.css";
import { mergeClassNames } from "../../mergeClassNames";

type ButtonProps = BaseButton.Props & {
    className?: string | undefined;
    icon?: LucideIcon;
};

const Button = ({ children, icon, className, ...props }: ButtonProps): ReactNode => {
    const IconComponent = icon;

    return (
        <BaseButton className={mergeClassNames(buttonStyles, className)} {...props}>
            {IconComponent && <IconComponent size="1.25rem" />}
            {children}
        </BaseButton>
    );
};

export { Button };
