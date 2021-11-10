import logo from '../../images/logo-ori.png';
import Footer from "../../components/Footer";
import {Link} from "react-router-dom";
import ico from "../../images/ico-user.png";

const ExcluirConta = () =>{
    return(
        <> 
            <div className="cabecalho"></div>
            <div className ="line-vertical"></div>
            <img src={logo} className="logo-home2"/>
    
            <section>
                <h1>EXCLUIR CONTA</h1>
                <h3>TEM CERTEZA QUE DESEJAR EXCLUIR SUA CONTA? SENTIREMOS SAUDADES ☹</h3>
                <p>PARA EXCLUIR SUA CONTA É NECESSÁRIO QUE INFORME SEU CPF</p>
                
                <div className="div-info-usu">
                    <h5>CPF</h5>
                    <input type="text"></input>
                </div>


                <ul className = "div-actions">
                    <li> <Link to ="/Usuario"> <button type="button ">VOLTAR</button> </Link> </li>
                    <li> <button type = "button"> MUDAR SENHA</button> </li>
                </ul>

            </section>

            <aside>
                <img src={ico} className="ico-user"></img>
                <Link to="/MudarSenha"><button type = "button">Mudar senha</button></Link>
                <button type = "button">Sair</button>
                
            </aside>
            <br className="br-section"></br>

            <Footer />
        
        </>

    );
};

export default ExcluirConta;