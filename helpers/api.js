// *****************************
// Using KitsuAPI
// https://kitsu.docs.apiary.io/

const BASE_URL = 'https://kitsu.io/api/edge'

// fetch animes by offset
export const fetchAnimes = current => {
  const offset = current * 10
  const url = `${BASE_URL}/anime?sort=-averageRating&page[offset]=${offset}`

  return fetch(url)
}

// fetch single anime
export const fetchAnime = id => {
  const url = `${BASE_URL}/anime/${id}`
  return fetch(url)
}
