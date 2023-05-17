import React from 'react';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap"
import './App.css'



const App = () => {
  return (
    <>
      <Container className='my-5 mainPage text-light'>
        <h1 className='display-4 text-center'>Lista de Tareas</h1>
        <hr/>
        {/* aqui va el formulario */}
      </Container>
      <Footer></Footer>
    </>
  );
};

export default App;