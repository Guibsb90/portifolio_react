import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut mollitia
      officia temporibus velit. Optio quasi officia, laudantium blanditiis cum
      dolore, et reprehenderit mollitia odit nesciunt nobis, sed perspiciatis
      vitae. Harum.
    </Paragrafo>
    <GithubSecao>
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api?username=Guibsb90&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
      />
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=Guibsb90&layout=compact&langs_count=7&theme=dracula"
      />
    </GithubSecao>
  </section>
)

export default Sobre
