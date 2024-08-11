import { ThemeProvider } from 'styled-components'

import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import temaDark from './Themes/dark'
import { useState } from 'react'
import temaLight from './Themes/light'
// import temaLight from './Themes/light'

function App() {
  const [UsaTemaDark, setUsaTemaDark] = useState(false)

  function trocaTema() {
    setUsaTemaDark(!UsaTemaDark)
  }

  return (
    <ThemeProvider theme={UsaTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre></Sobre>
          <Projetos></Projetos>
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
