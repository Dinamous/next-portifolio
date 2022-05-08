import dynamic from 'next/dynamic';

import {Container} from "./styles"

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});



export default function App() {

  return (
    <Container>
      <Spline scene="https://prod.spline.design/28DlSC-g9BrTlRgb/scene.splinecode" className="Teste" />
    </Container>
  );
}
