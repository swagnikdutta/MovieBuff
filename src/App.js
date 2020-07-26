import React from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom'


import MainPage from './components/mainpage/mainpage'
import SearchPage from './components/searchPage/searchPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact component={MainPage} />
        <Route path='/search/:searchTerm' exact component={SearchPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;

//Path for image
// https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg  

