import style from "./input.module.scss";
import { forwardRef } from "react";

export const Input = forwardRef(({ id, error, ...rest}, ref) => {
    return (<>
        <input className={`${style.input}`} {...rest} ref={ref} />
        <span>{error?.message}</span>
    </>);
});