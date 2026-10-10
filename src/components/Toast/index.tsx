import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { actionsStyles, contentStyles, descriptionStyles, rootStyles, titleStyles, viewportStyles } from "./styles.css";
import { Toast as BaseToast } from "@base-ui/react/toast";
import { Button } from "../Button";

const toastManager = BaseToast.createToastManager();

const describeCause = (cause: unknown): string => (cause instanceof Error ? cause.message : String(cause));

interface ToastErrorOptions {
    actionProps?: ComponentPropsWithoutRef<"button">;
    /** The failure detail. Takes precedence over `description` when present. */
    cause?: unknown;
    description?: string;
    id: string;
    title: string;
}

const toastError = (options: ToastErrorOptions): void => {
    const { cause, ...rest } = options;

    toastManager.add({
        ...rest,
        description: "cause" in options ? describeCause(cause) : rest.description,
        priority: "high",
        type: "error"
    });
};

interface ToastSuccessOptions {
    description?: string;
    id: string;
    title: string;
}

const toastSuccess = (options: ToastSuccessOptions): void => {
    toastManager.add({
        ...options,
        priority: "low",
        type: "success"
    });
};

const Toaster = (): ReactNode => {
    const { toasts } = BaseToast.useToastManager();

    return (
        <BaseToast.Portal>
            <BaseToast.Viewport className={viewportStyles}>
                {toasts.map((item) => (
                    <BaseToast.Root key={item.id} toast={item} className={rootStyles}>
                        <BaseToast.Content className={contentStyles}>
                            <BaseToast.Title className={titleStyles} />
                            <BaseToast.Description className={descriptionStyles} />
                            <div className={actionsStyles}>
                                {item.actionProps && <BaseToast.Action render=<Button elevated /> />}
                                <BaseToast.Close render={<Button elevated>OK</Button>} />
                            </div>
                        </BaseToast.Content>
                    </BaseToast.Root>
                ))}
            </BaseToast.Viewport>
        </BaseToast.Portal>
    );
};

interface ToastProviderProps {
    children: ReactNode;
}

const ToastProvider = ({ children }: ToastProviderProps): ReactNode => (
    <BaseToast.Provider toastManager={toastManager}>
        {children}
        <Toaster />
    </BaseToast.Provider>
);

// oxlint-disable-next-line react-doctor/only-export-components
export { ToastProvider, toastError, toastSuccess };
