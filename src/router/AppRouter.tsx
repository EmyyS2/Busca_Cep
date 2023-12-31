import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import BuscaCep from "../components/BuscaCepForm";
import Cadastro from "../components/Cadastro";
import Editar from "../components/editar";
import Listagem from "../components/Listagem";

const AppRoute=()=>{
return(

<BrowserRouter>
<Routes>
<Route path="buscacep" element={<BuscaCep />}/>
<Route path="cadastro" element={<Cadastro />}/>
<Route path="listagem" element={<Listagem />}/>
<Route path="/editar/:id" element={<Editar />}/>
</Routes>
</BrowserRouter>
);

}
export default AppRoute;