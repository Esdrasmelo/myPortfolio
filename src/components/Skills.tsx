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
            Desde meu inicio como <b>desenvolvedor</b> sempre construi{" "}
            <b>aplicações web back-end</b> utilizando as{" "}
            <b>melhores tecnologias</b> e <b>ferramentas disponíveis</b> no
            mercado!
          </p>
          <p>
            As <b>tecnologias</b> não são mais <b>importantes</b> do que o{" "}
            <b>produto</b> nem suas
            <b> regras de negócio</b> e <b>domínio</b>, mas sem elas não somos
            <b> capazes</b> de <b>entregar</b> os <b>melhores resultados!</b>
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
