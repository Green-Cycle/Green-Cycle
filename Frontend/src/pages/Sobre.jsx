import './Sobre.css';
function Sobre() {
  return (
    <div className='sobre'>
      <div className='sobre__title-box'>
        <img
          src='./assets/leaf-black.svg'
          className='sobre__title-icon'
          alt='icon de folha'
        />{' '}
        <h1>QUEM SOMOS</h1>
      </div>
      <div className='sobre__folder'>
        <p className='sobre__folder-title'>Green Cycle</p>
        <p className='sobre__folder-subtitle'>Mais que um marketplace online</p>
      </div>
      <div className='sobre__main'>
        <div className='sobre__main-box'>
          <div className='sobre__main-container'>
            {' '}
            <div className='sobre__main-vasos'>
              <p>
                A Green Cycle um marketplace dedicado a conectar empresas que
                vendiam produtos sustentáveis com consumidores conscientes do
                meio ambiente.
              </p>
              <p>
                Nossos anunciantes são cuidadosamente selecionados garantindo
                que cada item vendido tenha o menor impacto possível no meio
                ambiente. Desde pequenas lojas de artesãos que criam bolsas com
                tecidos reciclados até grandes marcas de moda que se tornaram
                ícones da sustentabilidade, todos compartilham nosso compromisso
                com o planeta.
              </p>
              <p>
                Green Cycle não é apenas um lugar para compras, é também uma
                comunidade que incentiva a reciclagem e a reutilização de
                materiais. Os clientes podem trocar seus materiais recicláveis
                por cupons de desconto, uma iniciativa facilitada por uma rede
                de parceiros locais que coletam os materiais e os transformam em
                novos produtos ou os reciclam adequadamente, podendo até ser
                utilizados pelos anunciantes.
              </p>
            </div>
            <img
              className='sobre__main-image_vasos'
              src='./assets/vasos.png'
              alt='vasos ecológicos'
            />
          </div>
          <div className='sobre__main-container'>
            <img
              className='sobre__main-image_kids'
              src='./assets/kids.png'
              alt='crianças plantando árvores'
            />
            <div className='sobre__main-kids'>
              <p>
                Nossa história de sucesso começou em um curso de formação onde a
                proposta era a criação de um projeto para um futuro sustentável.
                A equipe percebeu a necessidade de um espaço onde as pessoas
                pudessem comprar produtos sustentáveis sem comprometer seu
                estilo e assim surgiu a Green Cycle.
              </p>
              <p>
                Um dos primeiros desafios foi convencer as empresas a se
                juntarem à plataforma, mas, à medida que a conscientização
                ambiental crescia, mais marcas quiseram fazer parte desse
                movimento. Além disso, os consumidores estavam cada vez mais
                interessados em saber a origem dos produtos que compravam e como
                eram produzidos.
              </p>
              <p>
                Com o tempo, Green Cycle se tornou um modelo de como o comércio
                online poderia ser feito de maneira sustentável. Crescemos e nos
                expandimos, mas nosso compromisso com a sustentabilidade
                permanece inalterado. Green Cycle provou que é possível fazer
                negócios de uma maneira que respeite o planeta e suas pessoas,
                inspirando muitos outros empreendedores a seguir um caminho
                semelhante. Venha fazer parte desse movimento e descubra como
                pequenas escolhas podem fazer uma grande diferença.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sobre;
