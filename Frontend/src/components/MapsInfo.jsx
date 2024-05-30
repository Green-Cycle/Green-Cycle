import { Link } from 'react-router-dom';
import './MapsInfo.css';
function MapsInfo() {
  return (
    <div className='mapsInfo'>
      <div className='mapsInfo__container'>
        <h1>PONTOS DE COLETA</h1>
        <p className='mapsInfo__paragraph'>
          Acesse o link e encontre um ponto de coleta perto de você para
          descobrir os benefícios do nosso programa:
        </p>
        <Link className='mapsInfo__button' to={'/maps'}>
          ENCONTRE UM NA SUA REGIÃO
        </Link>
      </div>
    </div>
  );
}

export default MapsInfo;
