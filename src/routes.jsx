import React from "react";
import { Route, Routes } from "react-router-dom";
import OrdemServico from "./pages/OrdemServico";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/ordem-servico" element={<OrdemServico />} />
            <Route path="*" element={<OrdemServico />} />
        </Routes>
    );
};

export default AppRoutes;