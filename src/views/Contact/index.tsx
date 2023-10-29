import "./styles.css";
import networkPic from "../../assets/network.png";
import SlideInSection from "../../components/SlideInSection";
import SlideInParagraph from "../../components/SliderInParagraph";
import Container from "../../components/Container";
import LinkedinIcon from "../../components/Icons/LinkedinIcon";
import GithubIcon from "../../components/Icons/GithubIcon";
import InstagramIcon from "../../components/Icons/InstagramIcon";

function Contact() {
  return (
    <Container>
      <SlideInSection>
        <h1>Vamos nos conectar!</h1>
        <SlideInParagraph>
          Você pode me encontrar nas seguintes nas redes sociais abaixo.
        </SlideInParagraph>

        <div className="social-medias">
          <a
            href="https://www.linkedin.com/in/esdras-de-melo-motta/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://github.com/Esdrasmelo"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.instagram.com/_esdrasmotta/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>
        </div>
      </SlideInSection>
      <img src={networkPic} alt="" />
    </Container>
  );
}

export default Contact;
