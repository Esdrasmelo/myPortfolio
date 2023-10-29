import "./styles.css";
import dataStructurePic from "../../assets/curiosity-data_structure.png";
import myPicCrashCourse from "../../assets/Frame 94.png";
import mePlayingBass from "../../assets/eu - bass.png";
import SlideInSection from "../../components/SlideInSection";
import Container from "../../components/Container";
import SlideInParagraph from "../../components/SliderInParagraph";
import PhotoFrame from "../../components/PhotoFrame";
import { useEffect } from "react";

import PenguinImage1 from "../../assets/photos/penguin1.jpg";
import PenguinImage2 from "../../assets/photos/penguin2.webp";

function Curiosity() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log([myPicCrashCourse, mePlayingBass]);

  return (
    <main>
      <Container>
        <SlideInSection>
          <h1 id="firstH1">
            Algoritmos, Estruturas de Dados e Arquitetura de Software
          </h1>
          <SlideInParagraph>
            Sempre gostei muito de lidar com <strong>algoritmos</strong> e tenho
            um profundo
            <strong> interesse</strong> e <strong>paixão</strong> por{" "}
            <strong>Estruturas de Dados</strong> e suas aplicações.
          </SlideInParagraph>
          <SlideInParagraph>
            Também gosto muito da área de{" "}
            <strong>Arquitetura de Software</strong>, pois um
            <strong>software</strong> bem <strong>arquitetado</strong> é{" "}
            <strong>certeza</strong> de <strong>sucesso!</strong>
          </SlideInParagraph>
        </SlideInSection>

        <img src={dataStructurePic} alt="" />
      </Container>

      <Container>
        <SlideInSection>
          <h1 id="secondH1">Ministrei um Minicurso na FATEC Sorocaba!</h1>
          <SlideInParagraph>
            Nunca havia <strong>ministrado</strong> nenhum (mini){" "}
            <strong>curso</strong> ao longo de minha trajetória, apenas
            participado como aluno.
          </SlideInParagraph>
          <SlideInParagraph>
            Porém, neste ano de 2023 tive o <strong>prazer</strong> de{" "}
            <strong>ministrar</strong> um Minicurso de
            <strong>Git/GitHub</strong> na <strong>FATEC Sorocaba</strong>{" "}
            durante a <strong>Semana de Tecnologia (SETEC)</strong>
            para <strong>duas turmas</strong>.
          </SlideInParagraph>
          <SlideInParagraph>
            O minicurso foi um <strong>sucesso</strong> e foi uma{" "}
            <strong>experiência inesquecível</strong> que irá me marcar para o
            resto de minha vida!
          </SlideInParagraph>
        </SlideInSection>

        <PhotoFrame photos={[PenguinImage1, PenguinImage2]} />
      </Container>

      <Container>
        <SlideInSection>
          <h1>Sou músico!</h1>
          <SlideInParagraph>
            Desde <strong>criança</strong> tenho <strong>forte contato</strong>{" "}
            com a <strong>música</strong> e eu praticamente tenho uma família de
            músicos.
          </SlideInParagraph>
          <SlideInParagraph>
            Aos <strong>9 anos de idade</strong> comecei a tocar{" "}
            <strong>meia-lua</strong>, <strong>aos 13</strong> comecei a tocar
            <strong> bateria</strong> e desde os <strong>18 anos</strong> toco{" "}
            <strong>contrabaixo</strong>.
          </SlideInParagraph>
          <SlideInParagraph>
            A <strong>música faz parte da minha vida</strong> e a considero
            muito importante, pois a <strong>música</strong> tem a{" "}
            <strong>
              capacidade de tocar no profundo da alma e nos fazer bem
            </strong>
            .
          </SlideInParagraph>
        </SlideInSection>
        {/* <img src={mePlayingBass} alt="" /> */}
        <PhotoFrame photos={[PenguinImage1, PenguinImage2]} />
      </Container>
    </main>
  );
}

export default Curiosity;
