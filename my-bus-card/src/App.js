import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Main from './components/Article/Main';
import { Route } from 'react-router-dom';
import About from './components/Article/About/About';
import CV from './components/Article/CV/CV';

const App = (props) => {
  return (

    <div className='app-wrapper'>
     <Header />
     <Navbar />
     <article>
  <Route path='/main' render={ () => <Main /> }/>
  <Route path='/about' render={ () => <About /> }/>
  <Route path='/cv' render={ () => <CV /> }/>

     </article>
       <Footer />
    </div>
    
  );
}

export default App;
