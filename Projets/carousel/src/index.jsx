import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/index';
import Carousel from './pages/Carousel/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/index';
import Faq from './pages/FAQ/index';
import Error from './components/Error/index';
import Quote from './pages/Quote';
import Shopping from './pages/Shopping';
import GitHub from './pages/GitHub';
import Video from './pages/Video';
import BMI from './pages/BMI';
import TicTacToe from './pages/TicTacToe';
import Stopwatch from './pages/Stopwatch';
import Calculatrice from './pages/Calculator';
import Portfolio from './pages/Portfolio';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }

  body {
    margin: 0;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/carousel' element={<Carousel />}/>
          <Route path='/faq' element={<Faq />}/>
          <Route path='/quote' element={<Quote />}/>
          <Route path='/shopping' element={<Shopping />}/>
          <Route path='/github' element={<GitHub />}/>
          <Route path='/video' element={<Video />}/>
          <Route path='/bmi' element={<BMI />}/>
          <Route path='/tictactoe' element={<TicTacToe />}/>
          <Route path='/stopwatch' element={<Stopwatch />}/>
          <Route path='/calculator' element={<Calculatrice />}/>
          <Route path='/portfolio' element={<Portfolio />}/>
          <Route path='*' element={<Error />}/>
        </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

