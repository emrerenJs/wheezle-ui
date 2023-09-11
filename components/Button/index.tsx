import { forwardRef } from "react";
import { ButtonProps } from "./Button.types";
import style from './Button.module.scss';
import { Loading } from "../Loading";
import clsx from "clsx";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { loading, disabled, children, ...buttonProps } = props;
    return (
        <div className={clsx(style['button-root'], loading && style['loading'])}>
            <button {...buttonProps} disabled={disabled || loading} ref={ref}>
                { loading && (
                    <Loading size={20} />
                )}
                {
                    !loading && children
                }
            </button>
        </div>
    )
});

Button.displayName = "Button";
