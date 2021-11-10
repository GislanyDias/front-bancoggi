import {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Usuario from "./pages/Usuario";
import Deposito from "./pages/Deposito";
import Saque from "./pages/Saque";
import Transferencia from "./pages/Transferencia";
import MudarSenha from "./pages/MudarSenha";
import ExcluirConta from "./pages/ExcluirConta";


const Routes = () => {
    return (
        <BrowserRouter> 
            <Switch> 
                <Route path = "/" exact>
                    <Home />
                </Route>

                <Route path = "/Login" exact>
                    <Login />
                </Route>

                <Route path = "/Cadastro" exact>
                    <Cadastro/>
                </Route>

                <Route path = "/Usuario"exact>
                    <Usuario />
                </Route>

                <Route path = "/Deposito"exact>
                    <Deposito />
                </Route>

                <Route path = "/Saque"exact>
                    <Saque />
                </Route>

                <Route path="/Transferencia" exact>
                    <Transferencia />
                </Route>

                <Route path="/MudarSenha" exact>
                    <MudarSenha />
                </Route>

                <Route path = "/ExcluirConta" exact>
                    <ExcluirConta />
                </Route>
 
            </Switch> 
        </BrowserRouter>
    );
};

export default Routes;