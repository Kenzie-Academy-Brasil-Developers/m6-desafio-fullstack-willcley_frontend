import style from "./selectContact.module.scss";
import { forwardRef, useContext } from "react";
import { ClientContext } from "../../../providers/ClientContext";

export const SelectContact = forwardRef(({...rest}, ref) => {
    const {
        contacts,
    } = useContext(ClientContext);

    return (
        <div className={style.grid}>
            <select {...rest}>
                <option selected={true} disabled={true}>
                    Selecionar Contato
                </option>
                {contacts?.map((contact) => (
                    <option value={contact.id} key={contact.id}>{contact.fullname}</option>
                ))}
            </select>
        </div>
    );
});