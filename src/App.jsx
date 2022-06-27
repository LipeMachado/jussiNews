import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './router.jsx'
import { GlobalStyle } from './styledGlobal.jsx'

export default function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Routes />
      </Router>
    </div>
  );
}