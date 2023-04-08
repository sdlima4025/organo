import { Fragment } from 'react'
import './Banner.css'

function Banner () {
  // JSX uso de fragmente (<> </>) AND <fragmente></fragmente>
  return (
    <Fragment> 
    <header className='banner'>
      <img src="/imagens/banner.png" alt="imagem do site organo"/>
      <h1>Sistema de Cadastro de passageiros e Rotas de viagem</h1>
    </header>
    </Fragment>
  )
}

export default Banner