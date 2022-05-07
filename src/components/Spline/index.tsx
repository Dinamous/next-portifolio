import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

export default function App() {
  return (
    <div>
      <Spline scene="https://prod.spline.design/28DlSC-g9BrTlRgb/scene.splinecode" />
    </div>
  );
}
