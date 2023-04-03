import Botao from '../Botao'
import ListaSuspensa from '../ListaSuspensa'
import CampoTexto from '../campoTexto'
import './Formulario.css'


const Formulario = () => {

  const times = [
    '',
    'Programação',
    'Front-End',
    'Data Science',
    'DevOps',
    'UX & Designe',
    'Mobile',
    'Inovação & Gestão'
  ]
  return(
    <section className='formulario'>
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
      <CampoTexto label='Nome' placeholder='Digite seu nome'/>
      <CampoTexto label='Cargo'placeholder='Digite seu Cargo'/>
      <CampoTexto label='Imagem'placeholder='Digite o endereço da imagem'/>
      <ListaSuspensa label='Time' itens={times}/>
      <Botao>
        Criar Card
      </Botao>
      </form>
    </section>
  )
}

export default Formulario