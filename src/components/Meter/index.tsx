import { indicatorStyles, trackStyles } from "./styles.css";
import { Meter as BaseMeter } from "@base-ui/react/meter";
import type { ReactNode } from "react";

const Meter = ({ ...props }: BaseMeter.Root.Props): ReactNode => (
    <BaseMeter.Root {...props}>
        <BaseMeter.Track className={trackStyles}>
            <BaseMeter.Indicator className={indicatorStyles} />
        </BaseMeter.Track>
    </BaseMeter.Root>
);

export { Meter };
