import styled from 'styled-components'
// na tipagem ( abaixo), o que estiver listado (sem ? na frente), é obrigatorio nas propriedades do componente.
type BotaoProps = {
  principal?: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '12px'};
`
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Test() {
  return (
    <>
      <Botao principal>Ola</Botao>
      <Botao fontSize="19px" principal={false}>
        Secundario
      </Botao>
      <BotaoPerigo as="a" fontSize="30px">
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Test
