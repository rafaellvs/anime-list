import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Typography } from 'antd'

import { fetchAnime } from '../../helpers/api'

import Layout from '../../components/Layout'

import Anime from '../../components/Anime'

const AnimePage = () => {
  const { Title } = Typography

  const router = useRouter()
  const { id } = router.query

  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    id &&
    fetchAnime(id)
      .then(response => response.json())
      .then(response => {
        setData(response.data)
        setIsLoading(false)
      })
  }, [id])

  return (
    <Layout>
      {isLoading && <Title align='center'>Loading...</Title>}

      {
        !isLoading &&
        data &&
          <Anime data={data} />
      }
    </Layout>
  )
}

export default AnimePage
