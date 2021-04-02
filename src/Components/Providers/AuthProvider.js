import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import {API_URL} from '../../API_URL'

import AuthContext from '../Contexts/AuthContext'

const AuthProvider = (props) => {
  const [loggedInStatus, setLoggedInStatus] = useState('NOT_LOGGED_IN')
  let history = useHistory()

  useEffect(() => {
    axios({
        method: 'get',
        url: `${API_URL}/logged-in`,
        withCredentials: true
    })
      .then(res => {
          if (res.data === "logged in via cookie") {
              setLoggedInStatus('LOGGED_IN')
              if (!sessionStorage.getItem('logged-in')) {
                  history.push('/shopping-lists')
                  sessionStorage.setItem('logged-in', true)
              }
          } else if (res.data === 'not logged in') {
              setLoggedInStatus('NOT_LOGGED_IN')
              sessionStorage.clear()
              localStorage.clear()
              history.push('/')
          }
      })
      .catch(err => console.log(err))
  }, [history])


  const handleSuccessfulLogin = (username, password) => {
    axios({
      method: 'post',
      url: `${API_URL}/login`,
      data: {
          username, 
          password,
      },
      withCredentials: true,
    })
      .then(res => {
        setLoggedInStatus('LOGGED_IN')
        // localStorage.setItem('playerId', res.data)
        sessionStorage.setItem('logged-in', true)
        history.push('/shopping-lists')
      })
      .catch(err => {
          console.log(err)
          alert('Username Or Password Are Invaild')
      })
  }

  const handleSuccessfulLogout = () => {
    axios({
        method: 'post',
        url: `${API_URL}/logout`,
        withCredentials: true
    })
      .then(res => {
          setLoggedInStatus('NOT_LOGGED_IN')
          sessionStorage.clear()
          localStorage.clear()
          history.push('/')
      })
      .catch(err => console.log(err))
  }

  const handleSuccessSignUp = (username, password, email) => {
    axios({
      method: 'post',
      url: `${API_URL}/create-user`,
      data: {
          username,
          password,
          email
      },
      withCredentials: true
    })
      .then(res => {
        setLoggedInStatus('LOGGED_IN')
        sessionStorage.setItem('logged-in', true)
        history.push('/shopping-lists')
        console.log('submited with axios')
      })
      .catch(err => {
          console.log(err)
      })
  }

  const state = {
    loggedInStatus,
    history,
    setLoggedInStatus,
    handleSuccessfulLogout,
    handleSuccessfulLogin,
  }

  return (
    <AuthContext.Provider value={state}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
