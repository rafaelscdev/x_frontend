import { useNavigate } from 'react-router-dom'
import BarLeft from '../../components/BarLeft'
import BarRight from '../../components/BarRight'
import Posts from '../../components/Posts'
import { Container, Content } from '../Feed/styles'

const Feed = () => {
  return (
    <Container>
      <BarLeft />
      <Content>
        <h2 style={{ margin: '24px 0 16px 0', fontWeight: 700, fontSize: 24, color: '#fff' }}>
          Página Inicial
        </h2>
        <Posts />
      </Content>
      <BarRight />
    </Container>
  )
}

export default Feed
