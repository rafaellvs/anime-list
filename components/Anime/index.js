import { Typography, Image } from 'antd'

import '../../styles/anime.less'

const Anime = data => {
  const { Title, Paragraph, Text } = Typography

  const attributes = data.data.attributes // ???

  return (
    <div className='info'>
      <div className='name-info'>
        <Title>{attributes.canonicalTitle}</Title>
        <Title level={4}>{attributes.titles.en}</Title>
        <Title level={4}>{attributes.titles.ja_jp}</Title>
        <Image src={attributes.posterImage.medium} />
      </div>

      <div className='general-info'>
        <Title level={5}>Rating Rank: </Title>
        <Text>
          {attributes.ratingRank || '-'}
        </Text>

        <Title level={5}>Rating: </Title>
        <Text>
          {attributes.averageRating || '-'}
        </Text>

        {
          attributes.episodeCount &&
            <>
              <Title level={5}>Episode Count: </Title>
              <Text>
                {attributes.episodeCount}
              </Text>
            </>
        }

        {
          attributes.episodeLength &&
            <>
              <Title level={5}>Episode Length: </Title>
              <Text>
                {`${attributes.episodeLength}min`}
              </Text>
            </>
        }

        <Title level={5}>Release Date: </Title>
        <Text>
          {attributes.startDate}
        </Text>

        {
          attributes.startDate !== attributes.endDate &&
            <>
              <Title level={5}>End Date: </Title>
              <Text>
                {attributes.endDate || attributes.status}
              </Text>
            </>
        }

        {
          attributes.youtubeVideoId &&
            <a href={`https://www.youtube.com/watch?v=${attributes.youtubeVideoId}`} target='_blank'>
              Watch trailer on YouTube
            </a>
        }

        <Title level={4}>Description</Title>
        <Paragraph>
          {attributes.description}
        </Paragraph>
      </div>
    </div>
  )
}

export default Anime
