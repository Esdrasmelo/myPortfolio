import myPicAboutMePage from "../../assets/eu - sobre.png";
import SlideInSection from "../../components/SlideInSection";
import SlideInParagraph from "../../components/SliderInParagraph";
import Container from "../../components/Container";

function AboutMe() {
  return (
    <Container>
      <SlideInSection>
        <h1>Muito Prazer!</h1>
        <SlideInParagraph>
          Me chamo Esdras de Melo Motta e <b>atuo</b> como
          <b> desenvolvedor back-end</b> desde os meus <b>16 anos</b>.
        </SlideInParagraph>
        <SlideInParagraph>
          Sempre fui muito <b>curioso</b> e, por conta disso, desde meus{" "}
          <b>9 anos</b> de idade sou <b>apaixonado</b> por
          <b> tecnologia</b> e por tudo que envolva
          <b> criação de aplicações</b> e <b>soluções para a web</b>.
        </SlideInParagraph>
        <SlideInParagraph>
          Ao longo do tempo <b>atuando</b> como <b>desenvolvedor back-end</b>,
          tive a oportunidade de trabalhar em mais de <b>10 projetos</b> que
          puderam <b> agregar </b>
          muito à minha <b>carreira</b>, ajudando-me a ter{" "}
          <b>diversos aprendizados</b> e a lidar com <b>desafios</b> e{" "}
          <b>contextos</b> diferentes em cada <b>cliente</b>.
        </SlideInParagraph>
      </SlideInSection>
      <img
        src={myPicAboutMePage}
        id="my_about_pic"
        alt="Foto de perfil de Esdras"
      />
    </Container>
  );
}

export default AboutMe;
