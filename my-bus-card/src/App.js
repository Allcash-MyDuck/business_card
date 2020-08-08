import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Route, Redirect } from 'react-router-dom';
import About from './components/Article/About/About';
import CV from './components/Article/CV/CV';
import Main from './components/Article/Main/Main';
import Fun from './components/Article/Fun/Fun';

const App = (props) => {
  return (

    <div className='app-wrapper'>
     <Header />
     <Navbar />
     <article>
       <div className='pages-wrapper'>
  <Route path='/main' render={ () => <Main /> }/>
  <Redirect from='/' to='/main' />
  <Route path='/about' render={ () => <About /> }/>
  <Route path='/cv' render={ () => <CV /> }/>
  <Route path='/fun' render={ () => <Fun /> }/>
  </div>
     </article>
       <Footer />
    </div>
    
  );
}

export default App;
