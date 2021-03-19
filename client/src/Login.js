import React from 'react'
import { Container } from 'react-bootstrap'


//authorization and scopes for spotify account
const  auth_url = 'https://accounts.spotify.com/authorize?client_id=6d370759b2bf437fb0367458028a5ae2&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'


function Login() {
    return (
        <Container 
            className='d-flex align-items-center justify-content-center' 
            style={{minHeight: '100vh'}}
        >
            <a className="btn btn-success btn-lg" href={auth_url}> Sign In with Spotify
            </a>
        </Container>
    )
}

export default Login
