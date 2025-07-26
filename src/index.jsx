 import React, {Component} from 'react';
 import Header from './Component/Header.jsx';
 import Hero from './Component/Hero.jsx';
 import Services from './Component/Services.jsx';
 import Footer from './Component/Footer.jsx';
 import { createRoot } from 'react-dom/client'
 import App from './App.jsx'
 import './App.css'


 const root = createRoot(document.getElementById("root"));
   
 root.render(
             <>
                    <div className="main">
                        <Header/>
                        <Hero/>
                        <Services/>
                        <Footer/>
                    </div>
                    </>
 )


 

     
