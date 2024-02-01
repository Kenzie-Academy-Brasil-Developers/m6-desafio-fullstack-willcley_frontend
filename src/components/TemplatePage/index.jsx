import { Header } from "../Header";
import { Footer } from "../Footer";

export const TemplatePage = ({ children }) => {
    return (<>
        <Header />
        {children}
        <Footer />
    </>);
};