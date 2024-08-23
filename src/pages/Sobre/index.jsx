import "./Sobre.css";

import Inicio from "../../components/Inicio";
import Plano from "../../components/Plano";
import PlanoInfos from "../../components/PlanoInfos";

import SobreImg from "../../assets/sobre.png";

function Sobre() {
  return (
    <main>
      <Inicio
        classe="inicio--sobre"
        titulo="Bem-vindo à revolução dos vídeos!"
        texto="Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores."
        SobreImg={SobreImg}
      />
      <section className="planos">
        <h1>Planos</h1>
        <div className="planos-container">
          <Plano classe={"individual"} titulo={"Individual"} btn={"Cadastrar"}>
            <PlanoInfos titulo="1 Usuário" quantidade="10 Vídeos" valor={15} />
          </Plano>
          <Plano titulo={"Profissional - Times"} btn={"Cadastrar"}>
          <PlanoInfos titulo="1-10 Usuários" quantidade="Vídeos Ilimitados" valor={40} />
          <PlanoInfos titulo="+10 Usuários" quantidade="Vídeos Ilimitados" valor={20} />
          </Plano>
          <Plano titulo={"Corporativo"} btn={"Entre em contato"} />
        </div>
      </section>
    </main>
  );
}

export default Sobre;
