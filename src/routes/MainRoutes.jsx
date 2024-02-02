import { Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { HomePage } from "../pages/HomePage";
import { EditPage } from "../pages/EditPage";
import { ErrorPage } from "../pages/ErrorPage";

export const MainRoutes = () => {
    return (
        <Routes>
            <Route element={<PrivateRoutes />}>
                <Route index path="/" element={<HomePage />} />
                <Route path="/edit" element={<EditPage />} />
            </Route>
            <Route element={<PublicRoutes />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
};