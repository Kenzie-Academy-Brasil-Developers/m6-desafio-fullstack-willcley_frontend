import style from "./editPage.module.scss";
import { useState } from "react";
import { TemplatePage } from "../../components/TemplatePage";
import { EditPerfil } from "../../components/EditContainer/EditPerfil";
import { EditEmails } from "../../components/EditContainer/EditEmails";
import { EditContacts } from "../../components/EditContainer/EditContacts";

export const EditPage = () => {
    const [section, setSection] = useState(<EditPerfil />);
    const [btnPerfil, setBtnPerfil] = useState(style.activated);
    const [btnEmails, setBtnEmails] = useState("");
    const [btnContacts, setBtnContacts] = useState("");

    return (
        <TemplatePage>
            <main className={style.editContainer}>
                <nav className={style.editNav}>
                    <button className={`${btnPerfil} text1`} onClick={() => {
                        if (section != <EditPerfil />) {
                            setSection(<EditPerfil />);
                            setBtnPerfil(style.activated);
                            setBtnEmails("");
                            setBtnContacts("");
                        };
                    }}>
                        Perfil
                    </button>
                    <button className={`${btnEmails} text1`} onClick={() => {
                        if (section != <EditEmails />) {
                            setSection(<EditEmails />);
                            setBtnPerfil("");
                            setBtnEmails(style.activated);
                            setBtnContacts("");
                        };
                    }}>
                        Emails
                    </button>
                    <button className={`${btnContacts} text1`} onClick={() => {
                        if (section != <EditContacts />) {
                            setSection(<EditContacts />);
                            setBtnPerfil("");
                            setBtnEmails("");
                            setBtnContacts(style.activated);
                        };
                    }}>
                        Contatos
                    </button>
                </nav>
                {section}
            </main>
        </TemplatePage>
    );
};