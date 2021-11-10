import logo from '../../images/logo-ori.png';
import logo2 from '../../images/logo-principal.png';
import {Link} from "react-router-dom";
import Footer from "../../components/Footer";

const Home = () => {
    
    return (
        <>
            <div className="cabecalho"></div>
            <div className ="line-vertical"></div>
            <img src={logo} className="logo-home"/>

            <Link to ="/Login"> <button className="butt-login">Acessar conta</button> </Link>
            
            <Link to = "/Cadastro"><button className="butt-cadas">Criar conta</button></Link>
           
            <img src={logo2} className="logo-principal"/>

            <h1 className = "nome-ggi">BANCO GGI </h1>
            <h2 className = "subtit">PARA VOCÊ, AQUI E AGORA </h2>
            <div className = "text-home">
                <p>"VENHA FAZER PARTE DO BANCO QUE ESTÁ SEMPRE A SUA DISPOSIÇÃO"  </p>
            </div>
            <Footer />
        </>
    );

};


export default Home;