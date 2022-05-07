/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';

import Spline from "../Spline"

function HomeHero() {
  return (
    <Container data-aos="fade-up">

      <Spline/>:

      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Matheus</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Matheus,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Simões</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Cargo</span> {'\u007B'}
            <div>
              Função: <span className="blue">Bot Builder,</span>
            </div>
            <div>
              Empresa: <span className="blue">ZENVIA D1</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
