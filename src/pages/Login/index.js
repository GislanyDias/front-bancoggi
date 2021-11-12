import logo from '../../images/logo-ori.png';
import logo2 from '../../images/logo-principal.png';
import Footer from "../../components/Footer";
import {Link, useHistory} from "react-router-dom";


const Login = () => {
const History = useHistory()


    const onSubmit = (e) => {
        e.preventDefault();
        const Cliente ={
            nome: e.target.elements.nome.value,
            senha: e.target.elements.senha.value,

        }


        console.log(Cliente);
    }
    
    History.push("/Usu[")
    
    return (
        <>
            <div className="cabecalho"></div>
            <div className ="line-vertical"></div>
            <img src={logo} className="logo-home"/>
            <img src={logo2} className="logo-principal"/>
            
            <div className = "div-login">
                <h2 className="tit-div-login">ACESSE SUA CONTA</h2>

                <hr></hr>

                <form className= "form-login" onSubmit={onSubmit} > 
                    <p> CPF</p>
                    <input type = "text" name = "cpf" placeholder = "Digite seu cpf" id="login-cpf" required></input>

                    <p> SENHA</p>
                    <input type = "password" name = "senha" placeholder = "Digite sua senha" id="login-senha" required></input>
                    <br></br>

                    <button type ="submit" className="butt-entrar">Entrar</button>
                    <Link to ="/"> <button className="back-login">Voltar</button> </Link>
                </form>
               
            </div>
            <Footer />
        </>
    );

};


export default Login;