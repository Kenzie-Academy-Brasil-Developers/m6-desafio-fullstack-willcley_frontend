import style from "./editContactList.module.scss";
import { useContext } from "react";
import { ClientContext } from "../../../../providers/ClientContext";
import { EditContactCard } from "./EditContactCard";

export const EditContactList = () => {
    const {
        contacts
    } = useContext(ClientContext);

    return (
        <div className={style.editContactList}>
            <h2 className="title2">Lista de Contatos:</h2>
            <ul>{contacts < 1 ? (
                <p className="text1">Não há contatos.</p>
            ) : contacts?.map((contact) => (
                <EditContactCard contact={contact} key={contact.id} />
            ))}</ul>
        </div>
    );
};