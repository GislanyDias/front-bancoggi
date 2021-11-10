import logo from '../../images/logo-ori.png';
import logo2 from '../../images/logo-principal.png';
import Footer from "../../components/Footer";
import {Link} from "react-router-dom";


const Cadastro = () => {
    return(
        <>
            <div className="cabecalho"></div>
            <div className ="line-vertical"></div>
            <img src={logo} className="logo-home"/>
            <img src={logo2} className="logo-principal"/>
            <div className="div-cadastro">
                <h2 className="tit-div-cadas">CRIE SUA CONTA</h2>
                <hr></hr>
                <form className = "form-cadas">
                <p>NOME COMPLETO</p>
                <input type = "text" name ="cadas-nome" placeholder="Insira seu nome"></input>

                <p>CPF</p>
                <input type = "text" name ="cadas-cpf" placeholder="Insira seu CPF"></input>

                <p>DATA DE NASCIMENTO</p>
                <input type="date" name="cadas-data" ></input>

                <p>INFORME SEU ENDEREÇO</p>
                <input type = "text" name ="cadas-end" placeholder="Ex.: Rua, cidade, Estado"></input>

                <p> CADASTRE SUA SENHA</p>
                <input type = "text" name="cadas-senha" placeholder = ""></input>

                <p> CONFIRME SUA SENHA </p>
                <input type = "text" name="confi-senha" placeholder = ""></input>

                <br></br>

                <Link to = "/Usuario"><button type="submit" className="butt-cadas">Continuar</button> </Link>
                <Link to ="/"> <button className="back-cadas">Voltar</button> </Link>

                </form>

            </div>


            <Footer />

        </>
    );
};

export default Cadastro;