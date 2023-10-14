import React from "react";
import "../styles/Skills.css";
import techsPic from "../assets/tecnologias.png";
import systemicVisionPic from "../assets/systemic-vision.png";
import { Link } from "react-router-dom";

function Skills() {
  return (
    <div id="skills_page_container">
      <header>
        <nav className="navbar">
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
        <section id="firstSection">
          <h1>As melhores tecnologias!</h1>
          <p>
            Como desenvolvedor, sempre construí aplicações web{" "}
            <strong>back-end</strong> utilizando as <strong>melhores</strong>{" "}
            tecnologias e ferramentas disponíveis no mercado.
          </p>

          <p>
            Acredito que a verdadeira essência do desenvolvimento de software
            está na sinergia entre <strong>tecnologia</strong> e{" "}
            <strong>propósito</strong>. Minha jornada inclui projetos
            desafiadores que me ensinaram <strong>lições valiosas</strong> e
            aprimoraram minhas habilidades técnicas.
          </p>

          <p>
            Além disso, sou um <strong>defensor ávido</strong> de{" "}
            <strong>boas práticas de programação</strong> e{" "}
            <strong>design de software sustentável</strong>. Acredito que a
            qualidade do código é fundamental para a longevidade e o sucesso de
            qualquer projeto.
          </p>

          <img src={techsPic} alt="Tecnologias que trabalho" id="techs" />
        </section>

        <section id="secondSection">
          <h1>Visão Analítica e Sistêmica!</h1>
          <p>
            Minha <strong>habilidade</strong> em identificar{" "}
            <strong>padrões</strong> e <strong>conexões</strong> me permite
            tomar
            <strong> decisões informadas</strong>, enquanto meu{" "}
            <strong>pensamento crítico</strong> aborda desafios com uma{" "}
            <strong>perspectiva única</strong>.
          </p>

          <p>
            Compreendo como os <strong>elementos</strong> se encaixam em{" "}
            <strong>sistemas</strong> e utilizo essa <strong>visão</strong> para{" "}
            <strong>otimizar processos</strong> e <strong>estratégias</strong>{" "}
            de desenvolvimento.
          </p>

          <p>
            Minha busca constante por <strong>melhorias</strong> e{" "}
            <strong>capacidade</strong> de <strong>colaboração eficaz</strong>{" "}
            complementam essa abordagem, tornando-me um{" "}
            <strong>profissional versátil</strong> e{" "}
            <strong>estratégico</strong>.
          </p>

          <p>
            <strong>Estou pronto</strong> para enfrentar{" "}
            <strong>desafios dinâmicos</strong> e <strong>contribuir</strong>{" "}
            para <strong> projetos inovadores</strong>.
          </p>

          <img
            src={systemicVisionPic}
            alt="Tecnologias que trabalho"
            id="systemicVisionPic"
          />
        </section>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1"
          height="1"
          viewBox="0 0 24 24"
          fill="#FFFFFF"
          className="circle"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="#FFFFFF"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1"
          height="1"
          viewBox="0 0 24 24"
          fill="#FFFFFF"
          className="circle"
          id="secondCircle"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="#FFFFFF"
          />
        </svg>
      </main>

      <footer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1920"
          height="232"
          viewBox="0 0 1920 232"
          fill="none"
          id="svg_footer"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 92.8L80 108.267C160 123.733 320 154.667 480 162.4C640 170.133 800 154.667 960 139.2C1120 123.733 1257.65 162.4 1417.65 139.2C1577.65 116 1760 30.9333 1840 15.4667L1920 0V232H1840C1760 232 1600 232 1440 232C1280 232 1120 232 960 232C800 232 640 232 480 232C320 232 160 232 80 232H0V92.8Z"
            fill="black"
          />
        </svg>
      </footer>
    </div>
  );
}

export default Skills;
