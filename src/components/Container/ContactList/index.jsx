import style from "./contactList.module.scss";
import { useContext } from "react";
import { ClientContext } from "../../../providers/ClientContext";
import { ContactCard } from "./ContactCard";

export const ContatcList = () => {
    const { contacts } = useContext(ClientContext);

    return (
        <ul className={style.list}>
            <h2 className="title2">Contatos:</h2>
            {contacts.length < 1 ? (
                <p className="text1">
                    Você ainda não possui contatos!
                </p>
            ) : (
                contacts?.map((contact) => (
                    <ContactCard contact={contact} key={contact.id} />
                ))
            )}
        </ul>
    );
};