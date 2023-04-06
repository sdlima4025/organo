import { useState } from 'react'
import Botao from '../Botao'
import ListaSuspensa from '../ListaSuspensa'
import CampoTexto from '../campoTexto'
import './Formulario.css'


const Formulario = (props) => {
  const [nome, setNome] = useState('')
  const [rg, setRg] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      rg,
      cargo,
      imagem,
      time
    })
    setNome('')
    setRg('')
    setCargo('')
    setImagem('')
    setTime('')
  }
  return(
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para cadastrar o passageiro.</h2>
      <CampoTexto 
      obrigatorio={true} 
      label='Nome:' 
      placeholder='Digite seu nome'
      valor = {nome}
      aoAlterado = {valor => setNome(valor)}
      />

      <CampoTexto 
      obrigatorio={true} 
      label='RG:' 
      placeholder='Digite o RG'
      valor = {rg}
      aoAlterado = {valor => setRg(valor)}
      />

      <CampoTexto 
      obrigatorio={true}
      label='Congregação:'
      placeholder='Digite a congregação'
      valor = {cargo}
      aoAlterado = {valor => setCargo(valor)}
      />
      <CampoTexto 
      label='Imagem:'
      placeholder='Digite o endereço da imagem'
      valor = {imagem}
      aoAlterado = {valor => setImagem(valor)}
      />
      <ListaSuspensa 
        obrigatorio={true}
        label='Rota:' 
        itens={props.times}
        valor = {time}
        aoAlterado = {valor => setTime(valor)}
        />
        
      <Botao>
        Criar Card
      </Botao>
      </form>
    </section>
  )
}

export default Formulario