import style from "./editEmailsList.module.scss";
import { useContext, useEffect } from "react";
import { ClientContext } from "../../../../providers/ClientContext";
import { EmailCard } from "./EmailCard";

export const EmailsList = () => {
    const {
        clientEmails,
        getEmails,
    } = useContext(ClientContext);

    useEffect(() => {
        getEmails();
    }, []);

    return (
        <ul className={style.emailList}>
            {clientEmails.lenght < 1 ? (
                <p className="text1">Lista de emails vazia.</p>
            ) : clientEmails?.map((email) => (
                <EmailCard email={email} key={email.id} />
            ))}
        </ul>
    );
};