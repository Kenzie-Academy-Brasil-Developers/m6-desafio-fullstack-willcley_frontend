import style from "./loginPage.module.scss";
import { Link } from "react-router-dom";
import { LoginForm } from "../../components/Form/LoginForm";

export const LoginPage = () => {
    return (<>
        <main className={`${style.container} default-page`}>
            <section className={style.formContainer}>
                <h1 className="title1">Login</h1>
                <p className="text1">
                    Preencha os campos corretamente para fazer login
                </p>
                <LoginForm />
                <p className="text2">Não possui cadastro?</p>
                <Link className="link" to="/register">
                    Cadastre-se
                </Link>
            </section>
        </main>
    </>);
};