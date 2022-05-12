import dynamic from 'next/dynamic';

import {Container} from "./styles"

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

import $ from 'jquery'
import { useEffect } from 'react';


export default function App(){


  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",

    'canvas':{

    }
  };

  return (
    <Container>
      <Spline scene="https://prod.spline.design/28DlSC-g9BrTlRgb/scene.splinecode" className="Teste" id="can" />
    </Container>
  );
}
