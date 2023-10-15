import { Link } from "react-router-dom";
import "../styles/AboutMe.css";
import myPicAboutMePage from "../assets/eu - sobre.png";


function AboutMe() {
  return (
    <div id="about_me_container">
      <header>
        <nav>
          <ul>
            <Link to="/">
              <li>Inicio</li>
            </Link>
            <Link to="/about">
              <li id="li_aboutmepage">Sobre mim</li>
            </Link>
            <Link to="/skills">
              <li>Skills</li>
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
        <section id="about_me_page_section">
          <h1>Muito Prazer!</h1>
          <p>
            Me chamo Esdras de Melo Motta e <b>atuo</b> como
            <b>desenvolvedor back-end</b> desde os meus <b>16 anos</b>.
          </p>
          <p>
            Sempre fui muito <b>curioso</b> e, por conta disso, desde meus{" "}
            <b>9 anos</b> de idade sou <b>apaixonado</b> por
            <b> tecnologia</b> e por tudo que envolva
            <b> criação de aplicações</b>.
          </p>
          <p>
            Ao longo do tempo <b>atuando</b> como <b>desenvolvedor back-end</b>, tive a
            oportunidade de trabalhar em mais de <b>10 projetos</b> que puderam <b> agregar </b>
            muito à minha <b>carreira</b>, ajudando-me a <b>aprender coisas novas</b> e a
            lidar com <b>desafios</b> e <b>contextos</b> diferentes em cada <b>cliente</b>.
          </p>
          <img
            src={myPicAboutMePage}
            id="my_about_pic"
            alt="Foto de perfil de Esdras"
          />
        </section>
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
      </main>
    </div>
  );
}

export default AboutMe;