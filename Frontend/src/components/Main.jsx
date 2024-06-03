import Featured from './Featured';
import About from './MainAbout';
import MapsInfo from './MapsInfo';

import './Main.css';

function Main() {
  return (
    <>
      <div className='main'>
        <h1 className='main__title'>FAÇA PARTE DA MUDANÇA</h1>
        <p className='main__subtitle'>
          Green Cycle conecta empresas de produtos sustentáveis com consumidores
          conscientes, promovendo moda ecológica e incentivando a reciclagem
          para um futuro mais verde.
        </p>
        <p className='main__subtitle'>
          Junte-se a nós e faça parte dessa transformação sustentável!
        </p>
      </div>
      <Featured />
      <About />
      <MapsInfo />
    </>
  );
}

export default Main;
