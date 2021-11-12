import logo from '../../images/logo-ori.png';
import Footer from "../../components/Footer";
import {Link} from "react-router-dom";
import ico from "../../images/ico-user.png";

const MudarSenha = () =>{
    return(
        <> 
            <div className="cabecalho"></div>
            <div className ="line-vertical"></div>
            <img src={logo} className="logo-home2"/>
    
            <section>
                <h1>ALTERAR SENHA</h1>
                <p>PARA MUDAR SUA SENHA, É NECESSÁRIO QUE INFORME SUA SENHA ANTIGA E SUA NOVA SENHA. </p>
                
                <div className="div-info-usu">
                    <h5>SENHA ANTIGA</h5>
                    <input type="text" required></input>
                </div>

                <div className="div-info-usu">
                    <h5>NOVA SENHA</h5>
                    <input type ="text" required></input>
                </div>

                <div className="div-info-usu">
                    <h5>CONFIRMAR NOVA SENHA</h5>
                    <input type="password" required></input>
                </div>

                <ul className = "div-actions">
                    <li> <Link to ="/Usuario"> <button type="button ">VOLTAR</button> </Link> </li>
                    <li> <button type = "button"> MUDAR SENHA</button> </li>
                </ul>

            </section>

            <aside>
                <img src={ico} className="ico-user"></img>
                <Link to ="/ExcluirConta"><button type = "button">Excluir conta</button></Link>                
                <button type = "button">Sair</button>
                
            </aside>
            <br className="br-section"></br>

            <Footer />
        
        </>

    );
};

export default MudarSenha;