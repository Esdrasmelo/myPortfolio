import "./styles.css";
import techsPic from "../../assets/tecnologias.png";
import systemicVisionPic from "../../assets/systemic-vision.png";
import SlideInSection from "../../components/SlideInSection";
import { useEffect } from "react";
import Container from "../../components/Container";
import SlideInParagraph from "../../components/SliderInParagraph";

function Skills() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Container>
        <SlideInSection>
          <h1>As melhores tecnologias!</h1>
          <SlideInParagraph>
            Como desenvolvedor, sempre construí aplicações web{" "}
            <strong>back-end</strong> utilizando as <strong>melhores</strong>{" "}
            tecnologias e ferramentas disponíveis no mercado.
          </SlideInParagraph>

          <SlideInParagraph>
            Acredito que a verdadeira essência do desenvolvimento de software
            está na sinergia entre <strong>tecnologia</strong> e{" "}
            <strong>propósito</strong>. Minha jornada inclui projetos
            desafiadores que me ensinaram <strong>lições valiosas</strong> e
            aprimoraram minhas habilidades técnicas.
          </SlideInParagraph>

          <SlideInParagraph>
            Além disso, sou um <strong>defensor ávido</strong> de{" "}
            <strong>boas práticas de programação</strong> e{" "}
            <strong>design de software sustentável</strong>. Acredito que a
            qualidade do código é fundamental para a longevidade e o sucesso de
            qualquer projeto.
          </SlideInParagraph>
        </SlideInSection>
        <img
          src={techsPic}
          alt="Tecnologias que trabalho"
        />
      </Container>
      <Container>
        <SlideInSection>
          <h1>Visão Analítica e Sistêmica!</h1>
          <SlideInParagraph>
            Minha <strong>habilidade</strong> em identificar{" "}
            <strong>padrões</strong> e <strong>conexões</strong> me permite
            tomar
            <strong> decisões informadas</strong>, enquanto meu{" "}
            <strong>pensamento crítico</strong> aborda desafios com uma{" "}
            <strong>perspectiva única</strong>.
          </SlideInParagraph>

          <SlideInParagraph>
            Compreendo como os <strong>elementos</strong> se encaixam em{" "}
            <strong>sistemas</strong> e utilizo essa <strong>visão</strong> para{" "}
            <strong>otimizar processos</strong> e <strong>estratégias</strong>{" "}
            de desenvolvimento.
          </SlideInParagraph>

          <SlideInParagraph>
            Minha busca constante por <strong>melhorias</strong> e{" "}
            <strong>capacidade</strong> de <strong>colaboração eficaz</strong>{" "}
            complementam essa abordagem, tornando-me um{" "}
            <strong>profissional versátil</strong> e{" "}
            <strong>estratégico</strong>.
          </SlideInParagraph>

          <SlideInParagraph>
            <strong>Estou pronto</strong> para enfrentar{" "}
            <strong>desafios dinâmicos</strong> e <strong>contribuir</strong>{" "}
            para <strong> projetos inovadores</strong>.
          </SlideInParagraph>
        </SlideInSection>
        <img src={systemicVisionPic} alt="Tecnologias que trabalho" />
      </Container>
    </div>
  );
}

export default Skills;
