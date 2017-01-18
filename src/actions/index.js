import { browserHistory } from 'react-router'

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

export function openModal(gif) {
  return {
    type: 'OPEN_MODAL',
    gif
  }
}

export function closeModal() {
  return {
    type: 'CLOSE_MODAL'
  }
}

export function signInUser() {
  browserHistory.push('/favorites')
  return {
    type: 'SIGN_IN_USER'
  }
}

export function signOutUser() {
  browserHistory.push('/')
  return {
    type: 'SIGN_OUT_USER'
  }
}
