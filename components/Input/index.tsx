import { forwardRef, useImperativeHandle, useRef } from "react";
import { InputProps } from "./Input.types";
import style from './Input.module.scss';
import { Typography } from "../Typography";

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {error, icon, ...inputProps} = props;

    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    return (
        <div data-test-id="input-root" className={style["input-root"]} onClick={() => {
            inputRef.current?.focus();
        }}>
                <div className={style['input']}>
                { icon && <div className={style['icon']}>{icon}</div> }
                    <input {...inputProps} ref={inputRef} />
                </div>
                { error && (<div className={style['error']}> <Typography variant='body-s'>{ error }</Typography> </div>) }
        </div>
    )
});

Input.displayName = "Input";