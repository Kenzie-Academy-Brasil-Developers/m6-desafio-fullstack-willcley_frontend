import style from "./inputPassword.module.scss";
import { forwardRef, useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export const InputPassword = forwardRef(({ id, error, ...rest }, ref) => {
    const [isHidden, setIsHidden] = useState(true);

    return (
        <div>
            <div className={style.grid}>
                <input
                    className={`${style.password}`}
                    ref={ref}
                    {...rest}
                    type={isHidden ? "password" : "text"}
                />
                <button type="button" onClick={() => setIsHidden(!isHidden)}>
                    {isHidden ? <MdVisibilityOff /> : <MdVisibility />}
                </button>
            </div>
            <span>{error?.message}</span>
        </div>
    );
});