import { Typography } from 'antd'

import Layout from '../components/Layout'

const Home = () => {
  const { Title, Text, Link } = Typography

  return (
    <Layout>
      <div>
        <Title>Anime List</Title>

        <Text>Anime list powered by <Link href='https://kitsu.docs.apiary.io/'>Kitsu</Link>.</Text>
      </div>
    </Layout>
  )
}

export default Home
