import logo from "../../images/logo-ori.png";
import logo2 from "../../images/logo-principal.png";
import Footer from "../../components/Footer";
import { Link, useHistory } from "react-router-dom";
import { Api } from "../../server/api";

const Cadastro = () => {
  const History = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    // const ClienteTest = {
    //     cpf: 123456,
    //     nome: "Guilherme",
    //     dataNascimento: "1998-08-21T00:00:00.000+00:00",
    //     endereco: "Rua de Teste",
    //     logado: null,
    //     email: "guilherme@gmail.com",
    //     conta: {
    //         numeroConta: null,
    //         senha: "123456789",
    //         senhaConfirmada: "123456789",
    //         saldo: null,
    //         ativa: null,
    //         dataCriacao: null
    //     }
    // }

    const cpfNumber = e.target.elements.cadasCpf.value;
    const name = e.target.elements.cadasNome.value;
    // const dt = "1998-08-21T00:00:00.000+00:00";
    const dt = e.target.elements.cadasData.value;
    const end = e.target.elements.cadasEnd.value;
    const email = e.target.elements.cadasEmail.value;
    const senha = e.target.elements.cadasSenha.value;
    const senhaConf = e.target.elements.confiSenha.value;

    
    const Cliente = {
      cpf: cpfNumber,
      nome: name,
      dataNascimento: dt,
      endereco: end,
      logado: null,
      email: email,
      conta: {
        numeroConta: null,
        senha: senha,
        senhaConfirmada: senhaConf,
        saldo: null,
        ativa: null,
        dataCriacao: null,
      },
    };

    console.log(Cliente);

    try {
      const data = await Api.post("/", Cliente).then((response) => {
        console.log("Success ========>", response);
      }).catch((error) => {
        console.log("Error ========>", error);
      });

      console.log(data.data);
      console.log(Cliente);
      History.push("/Usuario");
    } catch (erro) {
      console.log("ENTRA AQUI");
    }
  };

  return (
    <>
      <div className="cabecalho"></div>
      <div className="line-vertical"></div>
      <img src={logo} className="logo-home" />
      <img src={logo2} className="logo-principal" />
      <div className="div-cadastro">
        <h2 className="tit-div-cadas">CRIE SUA CONTA</h2>
        <hr></hr>

        <form className="form-cadas" onSubmit={onSubmit}>
          <p>NOME COMPLETO</p>
          <input
            type="text"
            name="cadasNome"
            placeholder="Insira seu nome"
            required
          ></input>

          <p>CPF</p>
          <input
            type="text"
            name="cadasCpf"
            placeholder="Insira seu CPF"
            required
          ></input>

          <p>DATA DE NASCIMENTO</p>
          <input type="date" name="cadasData"></input>

          <p>INFORME SEU ENDEREÇO</p>
          <input
            type="text"
            name="cadasEnd"
            placeholder="Ex.: Rua, cidade, Estado"
            required
          ></input>

          <p>INFORME SEU EMAIL</p>
          <input type="email" name="cadasEmail"></input>

          <p> CADASTRE SUA SENHA</p>
          <input type="text" name="cadasSenha" required></input>

          <p> CONFIRME SUA SENHA </p>
          <input type="text" name="confiSenha" required></input>

          <br></br>

          <button type="submit" className="butt-cadas">
            Continuar
          </button>
          <Link to="/">
            <button className="back-cadas"> Voltar </button>
          </Link>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Cadastro;
