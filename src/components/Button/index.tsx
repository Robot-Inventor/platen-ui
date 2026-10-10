import { buttonStyles, elevatedButtonStyles } from "./styles.css";
import { Button as BaseButton } from "@base-ui/react/button";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { mergeClassNames } from "../../mergeClassNames";

type ButtonProps = BaseButton.Props & {
    className?: string | undefined;
    icon?: LucideIcon;
    elevated?: boolean;
};

const Button = ({ children, icon, elevated, className, ...props }: ButtonProps): ReactNode => {
    const IconComponent = icon;

    return (
        <BaseButton className={mergeClassNames(buttonStyles, elevated && elevatedButtonStyles, className)} {...props}>
            {IconComponent && <IconComponent size="1.25rem" />}
            {children}
        </BaseButton>
    );
};

export { Button };
