import React from 'react';
import Home from './components/home/Home'
import SearchResults from './components/search/SearchResult'
import { BrowserRouter, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{height: '100%', margin: 0}}>
        <Route exact path='/' component={Home}/>
        <Route path='/search/:name' component={SearchResults} />
      </div>
    </BrowserRouter>
  );
}

export default App;
