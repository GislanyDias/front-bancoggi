import logo from '../../images/logo-ori.png';
import logo2 from '../../images/logo-principal.png';
import Footer from "../../components/Footer";
import {Link, useHistory} from "react-router-dom";
import { Api } from '../../server/api';


const Cadastro = () => {
const History = useHistory()

    const onSubmit = async(e) => {
        e.preventDefault();
        const Cliente ={
            cpf: e.target.elements.cadasCpf.value,
            nome: e.target.elements.cadasNome.value,
            dataNascimento: e.target.elements.cadasData.value,
            endereco: e.target.elements.cadasEnd.value,
            email: e.target.elements.cadasEmail.value,
            conta: {
                numeroConta: null,
                senha: e.target.elements.cadasSenha.value,
                senhaConfirmanda: e.target.elements.confiSenha.value,
                saldo: null,
                ativa: null,
                dataCriacao: null
            }

        }
        
        console.log(Cliente)

        try{
            await Api.post(Cliente);
            console.log(Cliente);
            History.push("/Usuario")

            
        }
        
        catch(erro){
            console.log(erro);
        } 


    }


    return(
        <>
            <div className="cabecalho"></div>
            <div className ="line-vertical"></div>
            <img src={logo} className="logo-home"/>
            <img src={logo2} className="logo-principal"/>
            <div className="div-cadastro">
                <h2 className="tit-div-cadas">CRIE SUA CONTA</h2>
                <hr></hr>

                <form className = "form-cadas" onSubmit={onSubmit} >
                    <p>NOME COMPLETO</p>
                    <input type = "text" name ="cadasNome" placeholder="Insira seu nome" required></input>

                    <p>CPF</p>
                    <input type = "text" name ="cadasCpf" placeholder="Insira seu CPF" required></input>

                    <p>DATA DE NASCIMENTO</p>
                    <input type="date" name="cadasData" ></input>

                    <p>INFORME SEU ENDEREÇO</p>
                    <input type = "text" name ="cadasEnd" placeholder="Ex.: Rua, cidade, Estado" required></input>

                    <p>INFORME SEU EMAIL</p>
                    <input type = "email" name ="cadasEmail" ></input>

                    <p> CADASTRE SUA SENHA</p>
                    <input type = "text" name="cadasSenha"  required></input>

                    <p> CONFIRME SUA SENHA </p>
                    <input type = "text" name="confiSenha" required></input>

                    <br></br>

                    <button type="submit" className="butt-cadas">Continuar</button>
                    <Link to ="/"><button className="back-cadas"> Voltar </button></Link>
                </form>


            </div>


            <Footer />

        </>
    );
};

export default Cadastro;