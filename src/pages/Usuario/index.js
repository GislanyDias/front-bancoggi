import logo from '../../images/logo-ori.png';
import Footer from "../../components/Footer";
import {Link} from "react-router-dom";
import ico from "../../images/ico-user.png";

const Usuario = () =>{
    return(
        <>
            <div className="cabecalho"></div>
            <div className ="line-vertical"></div>
            <img src={logo} className="logo-home2"/>
    
            <section>
                <h1>BEM VINDO(A)! </h1>
                <p>AQUI VOCÊ PODE ENCONTRAR TODAS AS INFORMAÇÕES SOBRE SUA CONTA E REALIZAR SAQUES, DEPÓSITOS E TRANSFERÊNCIAS. </p>
                
                <div className="div-info-usu">
                    <h5>CONTA</h5>
                    <p >XXXXXXXXXXXXXXXXXXX</p>
                </div>

                <div className="div-info-usu">
                    <h5>SALDO TOTAL</h5>
                    <p> R$ XXXXXXXXXXXXXXXXXXX</p>
                </div>

                <ul>
                    <li> <Link to ="/"> <button type="button ">VOLTAR</button> </Link> </li>
                    <li> <Link to ="/Deposito"><button type = "button">DEPÓSITOS</button></Link> </li>
                    <li> <Link to ="/Saque"><button type = "button">SAQUES</button></Link></li>
                    <li> <Link to ="/Transferencia"><button type = "button">TRANSFERÊNCIAS</button></Link> </li>
                </ul>

            </section>

            <aside>
                <img src={ico} className="ico-user"></img>
                <Link to="/MudarSenha"><button type = "button">Mudar senha</button></Link>
                <Link to ="/ExcluirConta"><button type = "button">Excluir conta</button></Link>
                <button type = "button">Sair</button>
                
            </aside>
            <br className="br-section"></br>



            <Footer />
        </>

    );
};

export default Usuario;