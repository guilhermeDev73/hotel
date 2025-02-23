import React from 'react';
import Header from './components/layout/header';
import HoteisDisponiveis from './components/layout/hoteisDisponiveis';
import Comentarios from './components/layout/comentarios';
import Footer from './components/layout/footer';
import { FaHome } from "react-icons/fa";


function App() {

  return (
    <>
      <Header />
      <main className="w-11/12 m-auto bg-resort relative text-white bg-no-repeat bg-cover h-[80vh] rounded-3xl before:absolute before:rounded-3xl before:bg-black/50 before:top-0 before:left-0 before:w-full before:h-full before:content-['']  flex flex-col items-center justify-center text-center p-6 bg-center">
        <h2 className="text-5xl font-bold z-10">Aproveite as férias dos seus sonhos</h2>
        <p className="text-lg max-w-2xl z-10 font-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, iusto.
        </p>
      </main>
      <HoteisDisponiveis></HoteisDisponiveis>
      <Comentarios></Comentarios>
      <Footer></Footer>
      <a href="">
        <FaHome className='w-16 h-16 rounded-full bg-blue-600 text-white p-3 fixed bottom-0 right-0 cursor-pointer'/>
      </a>
    </>
  );
}

export default App;
