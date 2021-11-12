import logo from '../../images/logo-ori.png';
import Footer from "../../components/Footer";
import {Link} from "react-router-dom";
import ico from "../../images/ico-user.png";


const Transferencia = () =>{
    return(
        <> 
            <div className="cabecalho"></div>
            <div className ="line-vertical"></div>
            <img src={logo} className="logo-home2"/>
    
            <section>
                <h1>TRANSFERÊNCIA</h1>
                <p>PARA REALIZAR UMA TRANSFERÊNCIA, DIGITE A CONTA DE DESTINO E O VALOR DA TRANSFERÊNCIA. </p>
                
                <div className="div-info-usu">
                    <h5>CONTA DE DESTINO</h5>
                    <input type="text" required></input>
                </div>

                <div className="div-info-usu">
                    <h5>VALOR</h5>
                    <input type="number" required></input>
                </div>
                

                <ul className = "div-actions">
                    <li> <Link to ="/Usuario"> <button type="button ">VOLTAR</button> </Link> </li>
                    <li> <button type = "button"> REALIZAR TRANSFERÊNCIA</button> </li>
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

export default Transferencia;