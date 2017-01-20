import { browserHistory } from 'react-router'
import Firebase from 'firebase'

const API_URL = 'https://api.giphy.com/v1/gifs/search?q='
const API_KEY = '&api_key=dc6zaTOxFJmzC'
const config = {
  apiKey: 'AIzaSyBVJbRGklfRC-7gl64t9Ip96AfvkU2jLLg',
  authDomain: 'spiffy-giphy.firebaseapp.com',
  databaseURL: 'https://spiffy-giphy.firebaseio.com'
}

Firebase.initializeApp(config);

export function requestGifs(term = null) {
  return (dispatch) => {
    fetch(`${API_URL}${term.replace(/\s/g, '+')}${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'REQUEST_GIFS',
          payload: json.data
        })
      })
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

export function signUpUser(credentials) {
  return (dispatch) => {
    Firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
    .then(response => {
      dispatch(authUser())
      browserHistory.push('/favorites')
    })
    .catch(error => {
      console.log(error);
      dispatch(authError(error))
    })
  }
}

export function signInUser(credentials) {
  return (dispatch) => {
    Firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
    .then((response) => {
      dispatch(authUser())
      browserHistory.push('/favorites')
    })
    .catch((error) => {
      dispatch(authError(error))
    })
  }
}

export function signOutUser() {
  Firebase.auth().signOut();
  browserHistory.push('/')
  return {
    type: 'SIGN_OUT_USER'
  }
}

export function verifyAuth() {
  return (dispatch) => {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(authUser())
      } else {
        dispatch(signOutUser())
      }
    })
  }
}

export function authUser() {
  return {
    type: 'AUTH_USER'
  }
}

export function authError(error) {
  return {
    type: 'AUTH_ERROR',
    payload: error
  }
}
