import style from "./registerPage.module.scss";
import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/Form/RegisterForm";

export const RegisterPage = () => {
    return (<>
        <main className={`${style.container} default-page`}>
            <section className={style.formContainer}>
                <h1 className="title1">Cadastre-se</h1>
                <p className="text1">
                    Preencha os campos de cadastro corretamente
                </p>
                <RegisterForm />
                <p className="text2">Já possui uma conta?</p>
                <Link className="link" to="/login">
                    Login
                </Link>
            </section>
        </main>
    </>);
};