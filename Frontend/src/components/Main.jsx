import Featured from './Featured'
import './Main.css'

function Main() {
  return (
    <>
      <div className='main'>
        <h1 className='main__title'>Apresentação</h1>
        <p className='main__subtitle'>Pequeno text apresentando um pouco da proposta do site, uma pequena apresentação sobre o nosso trabalho com mais ou menos 2 ou 3 linhas</p>
      </div>
      <Featured />
    </>
  )
}

export default Main
