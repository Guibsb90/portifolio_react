import { Card, LinkBotao } from './styles'

import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

const Projeto = () => (
  <Card>
    <Titulo> Projeto Lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feitas com VueJS</Paragrafo>
    <LinkBotao>Vizualizar</LinkBotao>
  </Card>
)

export default Projeto
