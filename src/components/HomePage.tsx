import "../styles/HomePage.css";
import "fontsource-poppins";
import "fontsource-inter";
import myPicHomePage from "../assets/eu - inicio.png";
import { Link } from "react-router-dom";
import SlideInSection from "./SlideInSection";
import SlideInParagraph from "./SlideInParagraph";

function HomePage() {
  return (
    <div id="home_page_container">
      <header>
        <nav>
          <ul>
            <Link to="/">
              <li id="li_homepage">Inicio</li>
            </Link>
            <Link to="/about">
              <li>Sobre mim</li>
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
        <SlideInSection id="home_page_section">
          <h1>Olá, sou o Esdras</h1>
          <SlideInParagraph>
            <b>Desenvolvedor Back-end</b> desde os <b>16 anos de idade</b> com{" "}
            <b>experiência</b> nas mais <b>conhecidas</b> e{" "}
            <b>performáticas tecnologias</b> para <b>desenvolvimento web.</b>
          </SlideInParagraph>
        </SlideInSection>
        <img
          src={myPicHomePage}
          id="my_home_pic"
          alt="Foto de perfil de Esdras"
        />
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

export default HomePage;
