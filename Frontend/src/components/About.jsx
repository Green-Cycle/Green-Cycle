import './About.css';
function About() {
  return (
    <div className='about'>
      <img className='about__image' src='./assets/world.svg' alt='world' />
      <div className='about__text'>
        <h1 className='about__title'>Sobre nós e parceiros</h1>
        <p className='about__paragraph'>
          Um texto maior com mais informações sobre a gente e nossos parceiros
          pontos de coleta e lojas. Algo que demonstre melhor como funciona todo
          o projeto e destacando a importância de reciclar e o nosso compromisso
          com o planeta. De preferencia que seja mais extenso mas não muito
          cansativo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
          venenatis ultrices neque, eu porttitor nunc aliquam eu. Nunc bibendum
          nulla non magna fringilla posuere. Morbi quis sapien sit amet nulla.
        </p>
      </div>
    </div>
  );
}

export default About;
