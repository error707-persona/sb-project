import "../src/styles/styles.css";
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import "@tabler/icons";
const Index = () => {
  return (
    <div>
      <Header/>
      <Hero/>

      <main>
      <Services/>
      </main>

      <footer>
        <Footer/>
      </footer>
      
    </div>
  )
}

export default Index

