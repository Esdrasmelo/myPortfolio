import dataStructurePic from "../../assets/curiosity-data_structure.png";
import SlideInSection from "../../components/SlideInSection";
import Container from "../../components/Container";
import SlideInParagraph from "../../components/SliderInParagraph";
import PhotoFrame from "../../components/PhotoFrame";
import { useEffect } from "react";

import MinicursoImage1 from "../../assets/photos/minicurso/IMG_4600.jpg";
import MinicursoImage2 from "../../assets/photos/minicurso/IMG_4238.jpg";
import MinicursoImage3 from "../../assets/photos/minicurso/IMG_4239.jpg";
import MinicursoImage4 from "../../assets/photos/minicurso/IMG_4240.jpg";
import MinicursoImage5 from "../../assets/photos/minicurso/IMG_4242.jpg";
import MinicursoImage6 from "../../assets/photos/minicurso/IMG_4243.jpg";
import MinicursoImage7 from "../../assets/photos/minicurso/IMG_4360.jpg";
import MinicursoImage8 from "../../assets/photos/minicurso/IMG_4361.jpg";
import MinicursoImage9 from "../../assets/photos/minicurso/IMG_4391.jpg";
import MinicursoImage10 from "../../assets/photos/minicurso/IMG_4470.jpg";
import MinicursoImage11 from "../../assets/photos/minicurso/IMG_4471.jpg";
import MinicursoImage12 from "../../assets/photos/minicurso/IMG_4472.jpg";
import MinicursoImage13 from "../../assets/photos/minicurso/IMG_4568.jpg";
import MinicursoImage14 from "../../assets/photos/minicurso/IMG_4571.jpg";
import MinicursoImage15 from "../../assets/photos/minicurso/IMG_4593.jpg";
import MinicursoImage16 from "../../assets/photos/minicurso/IMG_4594.jpg";
import MinicursoImage17 from "../../assets/photos/minicurso/IMG_4237.jpg";

import MusicoImage1 from "../../assets/photos/musico/IMG_20230402_205555_035.jpg";
import MusicoImage2 from "../../assets/photos/musico/IMG_20230226_204126_139.jpg";
import MusicoImage3 from "../../assets/photos/musico/IMG_20230226_204126_222.jpg";
import MusicoImage4 from "../../assets/photos/musico/1677519422333 (1).jpg";
import MusicoImage5 from "../../assets/photos/musico/IMG_20230807_220718_801.jpg";
import MusicoImage6 from "../../assets/photos/musico/IMG_9186.JPG (1).jpg";

function Curiosity() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

        <PhotoFrame
          photos={[
            MinicursoImage1,
            MinicursoImage2,
            MinicursoImage3,
            MinicursoImage4,
            MinicursoImage5,
            MinicursoImage6,
            MinicursoImage7,
            MinicursoImage8,
            MinicursoImage9,
            MinicursoImage10,
            MinicursoImage11,
            MinicursoImage12,
            MinicursoImage13,
            MinicursoImage14,
            MinicursoImage15,
            MinicursoImage16,
            MinicursoImage17,
          ]}
        />
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

        <PhotoFrame
          photos={[
            MusicoImage2,
            MusicoImage4,
            MusicoImage1,
            MusicoImage3,
            MusicoImage5,
            MusicoImage6,
          ]}
        />
      </Container>
    </main>
  );
}

export default Curiosity;
