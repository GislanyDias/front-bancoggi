import logo from '../../images/logo-ori.png';
import logo2 from '../../images/logo-principal.png';
import Footer from "../../components/Footer";
import {Link} from "react-router-dom";

const Login = () => {
    
    return (
        <>
            <div className="cabecalho"></div>
            <div className ="line-vertical"></div>
            <img src={logo} className="logo-home"/>
            <img src={logo2} className="logo-principal"/>
            <div className = "div-login">
                <h2 className="tit-div-login">ACESSE SUA CONTA</h2>

                <hr></hr>
                <form className = "form-login">
                    <p> CPF</p>
                    <input type = "text" name = "cpf" placeholder = "Digite seu cpf"></input>

                    <p> SENHA</p>
                    <input type = "password" name = "senha" placeholder = "Digite sua senha"></input>
                    <br></br>

                    <Link to = "/Usuario"> <button type ="submit" className="butt-entrar">Entrar</button> </Link>
                    <Link to ="/"> <button className="back-login">Voltar</button> </Link>
                </form>
               
            </div>
            <Footer />
        </>
    );

};


export default Login;