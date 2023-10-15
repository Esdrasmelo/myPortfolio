import { Link } from "react-router-dom";
import "../styles/Curiosity.css";
import dataStructurePic from "../assets/curiosity-data_structure.png";
import myPicCrashCourse from "../assets/Frame 94.png";
import mePlayingBass from "../assets/eu - bass.png";

function Curiosity() {
  window.scrollTo(0, 0);

  return (
    <div>
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
              <li>Skills</li>
            </Link>
            <Link to="/curiosity">
              <li id="li_curiositypage">Curiosidades</li>
            </Link>
            <Link to="/contact">
              <li>Contato</li>
            </Link>
          </ul>
        </nav>
      </header>
      <main>
        <section id="first_curiosity_section">
          <h1 id="firstH1">
            Algoritmos, Estruturas de Dados e Arquitetura de Software
          </h1>
          <p>
            Sempre gostei muito de lidar com <strong>algoritmos</strong> e tenho
            um profundo
            <strong> interesse</strong> e <strong>paixão</strong> por{" "}
            <strong>Estruturas de Dados</strong> e suas aplicações.
          </p>
          <p>
            Também gosto muito da área de{" "}
            <strong>Arquitetura de Software</strong>, pois um
            <strong>software</strong> bem <strong>arquitetado</strong> é{" "}
            <strong>certeza</strong> de <strong>sucesso!</strong>
          </p>
          <img src={dataStructurePic} id="curiosityDataStructurePic" alt="" />
        </section>
        <section id="second_curiosity_section">
          <h1 id="secondH1">Ministrei um Minicurso na FATEC Sorocaba!</h1>
          <p id="crashCourseParagraph">
            Nunca havia <strong>ministrado</strong> nenhum (mini){" "}
            <strong>curso</strong> ao longo de minha trajetória, apenas
            participado como aluno.
          </p>
          <p>
            Porém, neste ano de 2023 tive o <strong>prazer</strong> de{" "}
            <strong>ministrar</strong> um Minicurso de
            <strong>Git/GitHub</strong> na <strong>FATEC Sorocaba</strong>{" "}
            durante a <strong>Semana de Tecnologia (SETEC)</strong>
            para <strong>duas turmas</strong>.
          </p>
          <p>
            O minicurso foi um <strong>sucesso</strong> e foi uma{" "}
            <strong>experiência inesquecível</strong> que irá me marcar para o
            resto de minha vida!
          </p>
          <img src={myPicCrashCourse} id="myPicCrashCourse" alt="" />
        </section>
        <section id="thirdy_curiosity_section">
          <h1>Sou músico!</h1>
          <p>
            Desde <strong>criança</strong> tenho <strong>forte contato</strong>{" "}
            com a <strong>música</strong> e eu praticamente tenho uma família de
            músicos.
          </p>
          <p>
            Aos <strong>9 anos de idade</strong> comecei a tocar{" "}
            <strong>meia-lua</strong>, <strong>aos 13</strong> comecei a tocar
            <strong> bateria</strong> e desde os <strong>18 anos</strong> toco{" "}
            <strong>contrabaixo</strong>.
          </p>
          <p>
            A <strong>música faz parte da minha vida</strong> e a considero
            muito importante, pois a <strong>música</strong> tem a{" "}
            <strong>
              capacidade de tocar no profundo da alma e nos fazer bem
            </strong>
            .
          </p>
          <img src={mePlayingBass} id="me_playing_bass" alt="" />
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

export default Curiosity;
