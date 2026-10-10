import { indicatorStyles, labelContainerStyles, labelStyles, trackStyles } from "./styles.css";
import { Progress as BaseProgress } from "@base-ui/react/progress";
import type { ReactNode } from "react";

type ProgressProps = BaseProgress.Root.Props & {
    label?: ReactNode;
};

const Progress = ({ label, ...props }: ProgressProps): ReactNode => (
    <BaseProgress.Root {...props}>
        <div className={labelContainerStyles}>
            <BaseProgress.Label className={labelStyles}>{label}</BaseProgress.Label>
            <BaseProgress.Value />
        </div>
        <BaseProgress.Track className={trackStyles}>
            <BaseProgress.Indicator className={indicatorStyles} />
        </BaseProgress.Track>
    </BaseProgress.Root>
);

export { Progress };
