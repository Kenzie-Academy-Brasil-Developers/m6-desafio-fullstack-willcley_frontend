import style from "./inputEdit.module.scss";
import { forwardRef, useState } from "react";
import { TbPencil, TbPencilOff } from "react-icons/tb";

export const InputEdit = forwardRef(({ id, error, ...rest }, ref) => {
    const [editable, setEditable] = useState(false);

    return (
        <div>
            <div className={style.grid}>
                <input
                    className={`${style.edit}`}
                    ref={ref}
                    {...rest}
                    disabled={!editable}
                />
                <button type="button" onClick={() => setEditable(!editable)}>
                    {editable ? <TbPencilOff /> : <TbPencil />}
                </button>
            </div>
            <span className="errorMessage">{error?.message}</span>
        </div>
    );
});