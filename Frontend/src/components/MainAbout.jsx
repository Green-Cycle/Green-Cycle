import './MainAbout.css';
function About() {
  return (
    <div className='about'>
      <img className='about__image' src='./assets/world.svg' alt='world' />
      <div className='about__text'>
        <h1 className='about__title'>SOBRE NOSSOS PARCEIROS</h1>
        <p className='about__paragraph'>
          Na Green Cycle, contamos com uma rede dedicada de parceiros
          comprometidos com a sustentabilidade.
        </p>
        <p className='about__paragraph'>
          Nossos pontos de coleta facilitam o descarte adequado de materiais
          recicláveis, transformando resíduos em novos produtos e promovendo a
          economia circular.
        </p>
        <p className='about__paragraph'>
          As lojas parceiras oferecem produtos feitos com materiais reciclados,
          orgânicos ou biodegradáveis, incentivando um estilo de vida mais
          consciente e ecológico, com produtos com origem e selo sustentável.
          Juntos, ajudam a promover práticas sustentáveis e uma mudança positiva
          no consumo e descarte de produtos.
        </p>
      </div>
    </div>
  );
}

export default About;
