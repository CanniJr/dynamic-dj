import React from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

// Get the params after 'code' in the URL
const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return (
      code ? <Dashboard code={code}/> : <Login />
    )
  
}

export default App;