import CampoTexto from '../campoTexto'
import './Formulario.css'


const Formulario = () => {
  return(
    <section className='formulario'>
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
      <CampoTexto label='Nome' placeholder='Digite seu nome'/>
      <CampoTexto label='Cargo'placeholder='Digite seu Cargo'/>
      <CampoTexto label='Imagem'placeholder='Digite o endereço da imagem'/>
      <CampoTexto label='Time'placeholder='Selecione a area do colaborador'/>
      </form>
    </section>
  )
}

export default Formulario