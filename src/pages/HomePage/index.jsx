import style from "./homePage.module.scss";
import { useContext, useEffect } from "react";
import { ClientContext } from "../../providers/ClientContext";
import { TemplatePage } from "../../components/TemplatePage";
import { InfoList } from "../../components/Container/InfoList";
import { ContatcList } from "../../components/Container/ContactList";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
    const clientName = localStorage.getItem("@CLIENT:NAME");
    const {
        clientEmails,
        clientPhones,
        getClient,
        getContacts,
    } = useContext(ClientContext);

    const navigate = useNavigate();

    useEffect(() => {
        clientName ? () => {
            getClient();
            getContacts();
        } : navigate("/login");
    }, []);

    return (
        <TemplatePage>
            <main>
                <section className={style.clientContainer}>
                    <div>
                        <h1 className="title1">{clientName}</h1>
                    </div>
                    <div className={style.infoLists}>
                        <InfoList title="Meus emails:" list={clientEmails} />
                        <InfoList title="Meus telefones:" list={clientPhones} />
                    </div>
                </section>
                <hr className={style.line} />
                <section className={style.contactsContainer}>
                    <ContatcList />
                </section>
            </main>
        </TemplatePage>
    );
};