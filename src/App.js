import React from 'react';
import Row from './components/Row';
import requests from './utils/request';


function App() {
  return (
    <div className="app">
      
      <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
      <Row title='Top Rated' fetchUrl={requests.fetchTrending}/>
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Horror Movies' fetchUrl={requests.fetchHorroryMovies}/>
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>


    </div>
  );
}

export default App;
