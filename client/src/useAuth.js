import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useAuth(code) {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    axios
    .post('http://localhost:3001/login', {
        code,
    }).then(res => {
        console.log(res);
        setAccessToken(res.data.accessToken)
        setRefreshToken(res.data.refreshToken)
        setExpiresIn(res.data.expiresIn)

        window.history.pushState({}, null, '/')
    }).catch(() => { 
      window.location = '/'  
      // redirects user to root when there's an error
    })
  }, [code])


  return accessToken
}

