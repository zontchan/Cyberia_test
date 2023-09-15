import React from 'react';
import Projects from "./pages/projects/Projects";
import Header from "./components/header/Header";
import Breadcrumbs from "./components/breadcrumbs/Breadcrumbs";
import Footer from "./components/footer/Footer";
import './main.css';

function App() {
  return (
      <>
        <Header/>
        <Breadcrumbs/>
        <Projects/>
        <Footer/>
      </>
  );
}

export default App;