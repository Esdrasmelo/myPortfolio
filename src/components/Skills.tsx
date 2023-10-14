import { Link } from "react-router-dom";
import "../styles/Skills.css";
import techsPic from "../assets/tecnologias.png";

function Skills() {
  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            <Link to="/">
              <li>Inicio</li>
            </Link>
            <Link to="/about">
              <li>Sobre mim</li>
            </Link>
            <Link to="/skills">
              <li id="li_skillspage">Skills</li>
            </Link>
            <Link to="/curiosity">
              <li>Curiosidades</li>
            </Link>
            <Link to="/contact">
              <li>Contato</li>
            </Link>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h1>As melhores tecnologias!</h1>
          <p>
            Desde meu <strong>início</strong> como desenvolvedor, sempre
            construí aplicações web <strong>back-end</strong> utilizando as{" "}
            <strong>melhores</strong> tecnologias e ferramentas disponíveis no
            mercado.
          </p>

          <p>
            Acredito que, embora as tecnologias desempenhem um papel
            fundamental, elas não são mais importantes do que o{" "}
            <strong>produto</strong> em si, nem do que suas{" "}
            <strong>regras de negócio</strong> e <strong>domínio</strong>. É
            nessa sinergia entre tecnologia e propósito que encontramos a
            verdadeira essência do desenvolvimento de software.
          </p>

          <p>
            Com um profundo entendimento das <strong>regras de negócio</strong>{" "}
            e do <strong>domínio</strong> em que a aplicação está inserida,
            podemos aproveitar ao máximo as{" "}
            <strong>melhores tecnologias</strong> disponíveis. É a combinação de
            conhecimento técnico e compreensão do negócio que nos permite
            entregar os <strong>melhores resultados</strong>.
          </p>

          <p>
            Durante minha jornada, tive a oportunidade de trabalhar em diversos{" "}
            <strong>projetos desafiadores</strong> e cada{" "}
            <strong>experiência</strong> me ensinou{" "}
            <strong>lições valiosas</strong> e me permitiu{" "}
            <strong>aprimorar minhas habilidades técnicas</strong>.
          </p>

          <p>
            Além disso, sou um defensor ávido de boas práticas de programação,
            segurança cibernética e design de software sustentável. Acredito que
            a qualidade do código é fundamental para a longevidade e o sucesso
            de qualquer projeto.
          </p>

          <img src={techsPic} alt="Tecnologias que trabalho" id="techs" />
        </section>
      </main>
      <footer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1920"
          height="232"
          viewBox="0 0 1920 232"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 92.8L80 108.267C160 123.733 320 154.667 480 162.4C640 170.133 800 154.667 960 139.2C1120 123.733 1257.65 162.4 1417.65 139.2C1577.65 116 1760 30.9333 1840 15.4667L1920 0V232H1840C1760 232 1600 232 1440 232C1280 232 1120 232 960 232C800 232 640 232 480 232C320 232 160 232 80 232H0V92.8Z"
            fill="black"
          />
        </svg>
      </footer>
    </div>
  );
}

export default Skills;
