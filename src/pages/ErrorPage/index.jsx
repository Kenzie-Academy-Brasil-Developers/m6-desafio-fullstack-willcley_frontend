import style from "./errorPage.module.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
    const [countDown, setCountDown] = useState(5);
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            if (countDown > 0) {
                setCountDown(countDown - 1)
            } else {
                navigate("/");
            }
        }, 1000);
    }, [countDown]);

    return (<>
        <section className={style.errorContainer}>
            <h1 className="title1">Error 404</h1>
            <p className="text1">Página não encontrada!</p>
            <p className="title3">
                Você será redirecionado em:
            </p>
            <span>{countDown}</span>
        </section>
    </>);
};