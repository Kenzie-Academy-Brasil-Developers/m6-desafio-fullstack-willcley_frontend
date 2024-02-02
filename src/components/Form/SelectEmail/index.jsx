import style from "./selectEmail.module.scss";
import { forwardRef, useContext } from "react";
import { ClientContext } from "../../../providers/ClientContext";

export const SelectEmail = forwardRef(({...rest}, ref) => {
    const {
        clientEmails,
    } = useContext(ClientContext);

    return (
        <div className={style.grid}>
            <select {...rest}>
                {clientEmails?.map((email) => (
                    <option value={email.id} key={email.id}>{email.email}</option>
                ))}
            </select>
        </div>
    );
});