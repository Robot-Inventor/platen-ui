import { ChevronsDownUp, ChevronsUpDown } from "lucide-react";
import { type ReactNode, useState } from "react";
import { iconAnimationStyles, iconStyles, itemStyles, panelStyles, triggerStyles } from "./styles.css";
import { Accordion as BaseAccordion } from "@base-ui/react/accordion";
import { mergeClassNames } from "../../mergeClassNames";

const AccordionRoot = BaseAccordion.Root;

type AccordionItemProps = BaseAccordion.Item.Props & {
    header: ReactNode;
    children?: ReactNode | undefined;
    className?: string | undefined;
};

const AccordionItem = ({ header, children, className, ...props }: AccordionItemProps): ReactNode => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    return (
        <BaseAccordion.Item
            className={mergeClassNames(itemStyles, className)}
            onOpenChange={(open) => {
                setIsAnimating(true);
                setIsOpen(open);
            }}
            {...props}
        >
            <BaseAccordion.Header>
                <BaseAccordion.Trigger className={triggerStyles}>
                    {header}
                    {isOpen ? (
                        <ChevronsDownUp
                            size={16}
                            className={mergeClassNames(iconStyles, isAnimating && iconAnimationStyles)}
                        />
                    ) : (
                        <ChevronsUpDown
                            size={16}
                            className={mergeClassNames(iconStyles, isAnimating && iconAnimationStyles)}
                        />
                    )}
                </BaseAccordion.Trigger>
            </BaseAccordion.Header>
            <BaseAccordion.Panel className={panelStyles}>{children}</BaseAccordion.Panel>
        </BaseAccordion.Item>
    );
};

export { AccordionRoot, AccordionItem };
