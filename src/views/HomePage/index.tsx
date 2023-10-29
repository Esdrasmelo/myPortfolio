import "fontsource-poppins";
import "fontsource-inter";
import myPicHomePage from "../../assets/eu - inicio.png";
import SlideInSection from "../../components/SlideInSection";
import SlideInParagraph from "../../components/SliderInParagraph";
import Container from "../../components/Container";

function HomePage() {
  return (
    <Container>
      <SlideInSection>
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
        style={{
          aspectRatio: "1/1",
          width: "100%",
          maxWidth: "460px",
        }}
      />
    </Container>
  );
}

export default HomePage;
