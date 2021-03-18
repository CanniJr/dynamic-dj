const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const spotifyWebApi = require('spotify-web-api-node');

const app = express();

// Prevents CORS issue and allows 
app.use(cors());
app.use(bodyParser.json());

const credentials = {
    redirectUri: 'http://localhost:3000',
    clientId: '6d370759b2bf437fb0367458028a5ae2',
    clientSecret: 'd74b52de54534c2d93d7f536d768c248'
}

// send a POST request for authentication
app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new spotifyWebApi(credentials)

    spotifyApi.authorizationCodeGrant(code)
    .then(data => {
        console.log(data)
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    })
    .catch((error) => {
        console.log(error)
        res.sendStatus(400)
    })
})

app.listen(3001)