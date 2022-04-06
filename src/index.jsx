import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './components/Header/header';
import camera from './components/Header/img/camera.svg';

import Movie from './components/Movie/movie';


const App = () => {return (
  
  <div className='container'>
    <Header camera={camera} title='V našem kině právě uvádíme'/>
    
    <Movie title='Pulp Fiction' poster='/assets/pulp-fiction.jpg' year={1994} rating='8.9/10' director='Quentin Tarantino'genre='crime, drama'/>

    <Movie title='Pulp Fiction' poster='/assets/pulp-fiction.jpg' year={1994} rating='8.9/10' director='Quentin Tarantino'genre='crime, drama'/>
  

  </div>
  
)};

render(<App />, document.querySelector('#app'));
