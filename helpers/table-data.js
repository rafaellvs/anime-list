import { Typography, Image } from 'antd'

const { Title } = Typography

// columns for Anime list table (pages/animes/index)
export const columns = [
  {
    title: 'Poster',
    dataIndex: 'poster',
    key: 'poster',
    render: poster => <Image src={poster} height={140} width={100}/>,
    width: 130,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: name => <Title level={5}>{name}</Title>,
  },
  {
    title: 'Synopsis',
    dataIndex: 'synopsis',
    key: 'synopsis',
    ellipsis: true,
  },
  {
    title: 'Ep. Count',
    dataIndex: 'epCount',
    key: 'epCount',
    width: 80,
    align: 'center',
  },
  {
    title: 'Release Date',
    dataIndex: 'releaseDate',
    key: 'releaseDate',
    width: 120,
    align: 'center',
  },
  {
    title: 'Rating',
    dataIndex: 'rating',
    key: 'rating',
    width: 100,
    align: 'center',
  },
]

// dataSource for Anime list table (pages/animes/index)
export const generateDataSource = data =>
  data.map(anime => ({
    key: anime.id,
    poster: anime.attributes.posterImage.tiny,
    name: anime.attributes.canonicalTitle,
    synopsis: anime.attributes.synopsis,
    epCount: anime.attributes.episodeCount,
    releaseDate: anime.attributes.startDate,
    rating: anime.attributes.averageRating,
  }))
