import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BarLeft from '../../components/BarLeft'
import BarRight from '../../components/BarRight'
import { Loader1 } from '../../components/Loaders'
import Post from '../../components/Post'
import { useGetPostCommentsQuery } from '../../services/posts'
import { Container, Content } from '../Feed/styles'

const PostPage = () => {
  const { id } = useParams()
  const postId = Number(id)

  const { isLoading } = useGetPostCommentsQuery(postId || -1, {
    skip: !postId
  })

  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (!isLoading) {
      timeout = setTimeout(() => {
        setShowLoader(false)
      }, 2000)
    } else {
      setShowLoader(true)
    }

    return () => clearTimeout(timeout)
  }, [isLoading])

  return (
    <>
      {showLoader ? (
        <Loader1 />
      ) : (
        <Container>
          <BarLeft />
          <Content>
            <Post />
            <BarRight />
          </Content>
        </Container>
      )}
    </>
  )
}

export default PostPage
