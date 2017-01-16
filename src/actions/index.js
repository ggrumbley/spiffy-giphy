
export function requestGifs(term = null) {
  const API_URL = 'https://api.giphy.com/v1/gifs/search?q='
  const API_KEY = '&api_key=dc6zaTOxFJmzC'

  let payload = fetch(`${API_URL}${term.replace(/\s/g, '+')}${API_KEY}`)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      return json.data
    })
  return {
    type: 'REQUEST_GIFS',
    payload
  }
}
